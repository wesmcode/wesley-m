# Components

Canonical UI patterns for the static site (root `*.html` files). One source of truth — when you need a button, card, or section, copy from here. Do not re-invent.

The rendered version lives at [`/styleguide.html`](../styleguide.html). Open it in a browser to see every block in context.

## Design tokens (defined in page CSS, not base.css)

All quiet tints have been tuned to pass **WCAG AA 4.5:1** for small text. Don't soften them further — pick a larger font size instead.

| Token              | Value                              | Used for                          | Contrast on its bg |
| ------------------ | ---------------------------------- | --------------------------------- | ------------------ |
| `--bg`             | `#2B3856`                          | Navy primary background           | —                  |
| `--bg-alt`         | `#F5F2EC`                          | Cream alt-section background      | —                  |
| `--fg`             | `#FFFFFF`                          | Text on navy                      | 11.5:1 AAA         |
| `--ink`            | `#1B2238`                          | Text on cream                     | 14.7:1 AAA         |
| `--fg-quiet`       | `rgba(255,255,255,0.78)`           | Secondary text + labels on navy   | 8.5:1 AAA          |
| `--fg-hover`       | `rgba(255,255,255,0.62)`           | Hover / tertiary state on navy    | 5.4:1 AA           |
| `--ink-quiet`      | `rgba(27,34,56,0.75)`              | Secondary text + labels on cream  | 6.3:1 AA           |
| `--accent`         | `#B57842`                          | Ochre accent (≤1 use per grid)    | 4.7:1 AA (ink)     |
| `--rule`           | `1px solid rgba(255,255,255,0.22)` | Rule lines on navy                | —                  |
| `--rule-dark`      | `1px solid rgba(27,34,56,0.18)`    | Rule lines on cream               | —                  |

### Fluid spacing scale

Use these instead of fixed pixel padding — the page scales continuously from 360px to 1280px viewports.

| Token              | Value                          | Used for                         |
| ------------------ | ------------------------------ | -------------------------------- |
| `--pad-x`          | `clamp(20px, 3.6vw, 40px)`     | Page horizontal padding          |
| `--section-pad-y` | `clamp(48px, 8vw, 88px)`       | Section vertical padding         |
| `--section-pad-y-lg` | `clamp(56px, 9vw, 96px)`    | Larger section vertical padding  |
| `--grid-gap`       | `clamp(16px, 2.2vw, 24px)`     | Card grid gap (tight)            |
| `--grid-gap-lg`    | `clamp(28px, 4vw, 48px)`       | Card grid gap (wide)             |

Type: `Garamond, 'EB Garamond', 'Times New Roman', serif`. Headings stay weight `400` with negative letter-spacing (`-0.02em`).

### Breakpoints

- `≤960px` — three-up grids collapse to two-up (last card spans full width).
- `≤680px` — everything collapses to one column. Hover invert disabled.
- Spacing and font sizes scale fluidly with `clamp()` between these — no padding jumps at breakpoints.

---

## Buttons

### `.cta`
Use for primary actions (book a call, email, view resume). Always an `<a>`, never a `<button>` unless it triggers JS without navigation.

```html
<a href="#engage" class="cta cta-primary">Engagement tracks</a>
<a href="resume.html" target="_blank" class="cta cta-secondary">Read the resume &rarr;</a>
```

- `.cta-primary` — filled, inverts on hover
- `.cta-secondary` — outlined, fills on hover
- On light sections (`.values`, `.results`), the CTA palette auto-inverts via cascade

### `.link`
Inline text link. Uppercase, no underline until hover, focus-visible inverts. Use in nav, footer, breadcrumbs.

```html
<a href="index.html" class="link">&larr; Home</a>
```

---

## Section labels

Eyebrow above a section heading. Always paired with `.section-label-row` for spacing.

```html
<div class="section-label-row">
    <span class="section-label">Background &mdash;</span>
</div>
```

On light sections use `.section-label-dark`:

```html
<span class="section-label section-label-dark">Principles &mdash;</span>
```

---

## Hero

Used at the top of `about.html`. Two-column on desktop, stacked on mobile.

```html
<section class="hero" aria-label="Introduction">
    <div class="hero-grid">
        <div class="hero-text">
            <p class="hero-eyebrow">Role &middot; Location</p>
            <h1 class="hero-title">Hello, I&rsquo;m<br>Wesley Melo</h1>
            <p class="hero-lede">One-sentence positioning.</p>
            <p class="hero-lede">Optional second paragraph with <strong>emphasized phrases</strong>.</p>
            <div class="hero-actions">
                <a href="#engage" class="cta cta-primary">Primary action</a>
                <a href="#" class="cta cta-secondary">Secondary action</a>
            </div>
        </div>
        <figure class="hero-figure">
            <img src="images/wesley-portrait.jpg" alt="..." loading="eager" fetchpriority="high">
        </figure>
    </div>
</section>
```

`.hero-figure` applies a soft-light navy color harmony via `::after` and a bottom-fade gradient via `::before` so the portrait dissolves into the page.

---

## Stats strip

Three-column metrics row, separated by top rule.

```html
<section class="stats" aria-label="At a glance">
    <div class="stats-grid">
        <div class="stat">
            <div class="stat-value">10+</div>
            <div class="stat-label">years shipping product</div>
        </div>
        <!-- repeat -->
    </div>
</section>
```

Max three stats — if you need four, redesign.

---

## Value card (three-up, light section)

Numbered principle cards on a cream background. Hover inverts to navy.

```html
<section class="values" aria-label="Operating principles">
    <div class="values-inner">
        <div class="section-label-row">
            <span class="section-label section-label-dark">Principles &mdash;</span>
        </div>
        <h2 class="values-title">Three principles that<br>guide the work</h2>
        <div class="values-grid">
            <article class="value-card">
                <div class="value-num">01</div>
                <h3>Discovery first</h3>
                <p>Description.</p>
            </article>
            <!-- repeat to 3 -->
        </div>
    </div>
</section>
```

Always three cards. Numbers are decorative — they go `01`, `02`, `03`.

---

## Background timeline

Chronological role list. Three-column grid: period / company / detail.

```html
<section class="background" aria-label="Background">
    <div class="section-label-row">
        <span class="section-label">Background &mdash;</span>
    </div>
    <h2 class="background-title">A decade across<br>agencies, platforms, AI</h2>
    <div class="bg-timeline">
        <div class="bg-row">
            <div class="bg-period">2025 &rarr;</div>
            <div class="bg-company">Code and Theory</div>
            <div class="bg-detail">One-sentence role summary.</div>
        </div>
        <!-- repeat -->
    </div>
    <p class="bg-footnote">Footnote line.</p>
</section>
```

---

## Track card (two-up)

Two side-by-side cards for parallel options (ongoing vs. one-off, plan A vs. plan B).

```html
<section id="engage" class="tracks" aria-label="Engagement tracks">
    <div class="tracks-inner">
        <div class="section-label-row">
            <span class="section-label">Two ways to engage &mdash;</span>
        </div>
        <h2 class="tracks-title">Pick the shape that fits<br>where you are.</h2>
        <div class="tracks-grid">
            <article class="track-card">
                <div class="track-tag">Ongoing</div>
                <h3>Fractional engagement</h3>
                <p class="track-lede">One-sentence summary.</p>
                <ul class="track-list">
                    <li>Bullet</li>
                </ul>
                <div class="track-footer">Best for: …</div>
            </article>
            <article class="track-card">
                <div class="track-tag track-tag-alt">One-off</div>
                <h3>Product audit</h3>
                <!-- same shape -->
            </article>
        </div>
    </div>
</section>
```

Use `.track-tag-alt` on the secondary card to flip the tag styling (filled vs. outlined).

---

## Result card grid (light section)

Mixed grid of stat cards (big number) and context cards (text only). Use to show outcomes without inventing testimonials.

```html
<section class="results" aria-label="Results">
    <div class="results-inner">
        <h2 class="results-title">What &ldquo;ship discipline&rdquo;<br>looks like in practice.</h2>
        <div class="results-grid">
            <article class="result-card result-card-stat">
                <div class="result-value">12&times;</div>
                <p>Description of the metric.</p>
            </article>
            <article class="result-card">
                <div class="result-context">Client &middot; Year</div>
                <p>Description of the work.</p>
            </article>
        </div>
    </div>
</section>
```

Variants:
- `.result-card` — white, default
- `.result-card-stat` — dark navy, white text, for headline numbers
- `.result-card-alt` — ochre accent (`#C58F5C`), use sparingly — at most one per grid

---

## CTA strip

Closing call-to-action above the footer. Two-column on desktop.

```html
<section class="cta-strip" aria-label="Contact">
    <div class="cta-grid">
        <h2 class="cta-title">Closing question or invitation.</h2>
        <div class="cta-actions">
            <a href="#" class="cta cta-primary js-email">Email Wesley</a>
            <a href="resume.html" class="cta cta-secondary">Read the resume &rarr;</a>
        </div>
    </div>
</section>
```

---

## Footer

Shared across pages. Markup lives in each page; styles come from `base.css`. Don't duplicate the navigation — keep the link list in sync across all pages.

```html
<footer id="site-footer" aria-label="Site footer">
    <div class="footer-row">
        <a href="index.html" class="footer-brand">Wesley Melo</a>
        <nav class="footer-nav" aria-label="Footer navigation">
            <a href="about.html" class="link">About</a>
            <a href="blog.html" class="link">Blog</a>
            <a href="index.html#services" class="link">Services</a>
            <a href="resume.html" target="_blank" class="link">Resume</a>
            <a href="#" class="link js-email">Email</a>
            <a href="https://linkedin.com/in/wesmelo" target="_blank" rel="noopener noreferrer" class="link">LinkedIn</a>
        </nav>
    </div>
    <div class="footer-meta">&copy; 2026 Wesley Melo</div>
</footer>
```

---

## Rules of the road

1. **Don't re-invent.** If a pattern exists here, copy the markup. If you need something new, add it here first.
2. **Don't reach for frameworks.** Vanilla HTML/CSS. No Bootstrap, no Tailwind, no React on the static side.
3. **One CSS file per page** — page styles live in `css/<page>.css` and load after `css/base.css`. Don't add new globals to `base.css` unless every page will use them.
4. **Accessibility is non-negotiable.** Skip link, ARIA labels on `<section>`, focus-visible on all interactive elements, reduced-motion fallback for hover transforms.
5. **Mobile breakpoint is `≤880px`** on `about.html` (newer pages) and `≤768px` on older pages. New pages: use `880px`.
