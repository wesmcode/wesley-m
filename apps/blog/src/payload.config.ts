import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Sections } from './collections/Sections'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { CaseStudies } from './collections/CaseStudies'

// Sections are flavors/categories shown on blog posts (not separate landing
// pages). Editors can add, rename, or delete after first boot — this list only
// runs when a slug doesn't already exist.
const DEFAULT_SECTIONS = [
  {
    name: 'Notes',
    slug: 'notes',
    tagline: 'Short observations from the day',
    description: 'Quick, working-out-loud writing. Not essays, not finished thoughts.',
    order: 10,
  },
  {
    name: 'Essay',
    slug: 'essay',
    tagline: 'Longer reads',
    description: 'Longer-form pieces with a thesis.',
    order: 20,
  },
  {
    name: 'Satire',
    slug: 'satire',
    tagline: 'On the lighter side',
    description: 'Satirical takes on tech, product, AI, and the culture around them.',
    order: 30,
  },
  {
    name: 'Philosophy',
    slug: 'philosophy',
    tagline: 'The big-question pieces',
    description: 'Posts that wander into what work, software, and being human are actually for.',
    order: 40,
  },
]

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const IS_DEV = process.env.NODE_ENV !== 'production'
const DEV_EMAIL = process.env.DEV_AUTOLOGIN_EMAIL || 'wes@wesley-m.com'
const DEV_PASSWORD = process.env.DEV_AUTOLOGIN_PASSWORD || 'wesley-m-dev'

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '— Wesley Melo Blog',
    },
    // Skip login entirely — DEV ONLY. In production the normal login form is
    // shown so /admin is never anonymously accessible.
    autoLogin: IS_DEV
      ? {
          email: DEV_EMAIL,
          password: DEV_PASSWORD,
          prefillOnly: false,
        }
      : false,
  },
  // Seed the dev user and default sections on first boot.
  onInit: async (payload) => {
    if (IS_DEV) {
      const existing = await payload.find({ collection: 'users', limit: 1 })
      if (existing.totalDocs === 0) {
        await payload.create({
          collection: 'users',
          data: {
            email: DEV_EMAIL,
            password: DEV_PASSWORD,
            name: 'Wesley Melo',
          },
        })
        payload.logger.info(`Seeded dev user: ${DEV_EMAIL}`)
      }
    }

    // Seed any missing default sections. Existing sections are never modified —
    // editors keep full control after first boot.
    for (const section of DEFAULT_SECTIONS) {
      const found = await payload.find({
        collection: 'sections',
        where: { slug: { equals: section.slug } },
        limit: 1,
      })
      if (found.totalDocs === 0) {
        await payload.create({ collection: 'sections', data: section })
        payload.logger.info(`Seeded section: ${section.slug}`)
      }
    }
  },
  collections: [Users, Sections, Media, Posts, CaseStudies],
  // The Posts collection overrides this for the body field with a richer
  // configuration; this default is used anywhere else a richText field appears.
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || process.env.POSTGRES_URL || '',
    },
    // Keep our tables isolated in their own schema so we don't disturb whatever
    // already lives in `public` on this Neon database.
    schemaName: 'blog',
    push: true,
  }),
  sharp,
  upload: {
    limits: {
      fileSize: 25_000_000, // 25 MB
    },
  },
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: {
        media: true,
      },
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
})
