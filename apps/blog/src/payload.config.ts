import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Sections } from './collections/Sections'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'

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
  // Seed the dev user on first boot — DEV ONLY. In production you create the
  // first user normally via the /admin/create-first-user form.
  onInit: async (payload) => {
    if (!IS_DEV) return
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
  },
  collections: [Users, Sections, Media, Posts],
  // The Posts collection overrides this for the body field with a richer
  // configuration; this default is used anywhere else a richText field appears.
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
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
})
