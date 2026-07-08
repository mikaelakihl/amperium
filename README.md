# Amperium

Amperium Elektriska is a Swedish electrical contractor based in Gustavsberg, founded in 2023 by Jimmy Rittervall and Simon Kihl, with over 40 years of combined industry experience. The company offers three services: service & maintenance (including emergency callouts), electrical installation (new builds, renovations, upgrades), and project management consulting — for both private customers and businesses.

This repo is the company's marketing site: a bilingual (Swedish/English) site presenting the company and its services, with a contact form for quote requests. Built with React, TypeScript, and Vite.

For how to update content (contacts, opening hours, copy) without touching the structure, see [CONTENT_GUIDE.md](./CONTENT_GUIDE.md).

## Pages

- **Home** — hero section, service overview, About preview, trust signals (certified electricians, credit rating)
- **About** — company story and contact cards for each team member
- **Services** — overview of all three services, each with its own detail page
- **Contact** — quote request form, contact details, opening hours

The whole site is available in Swedish and English via the language switcher in the nav.

## Getting started

```bash
npm install
npm run dev
```

Other commands:

```bash
npm run build     # typecheck + production build
npm run test      # run the test suite (vitest)
npm run lint       # eslint
npm run format     # prettier --write
```

## Tech stack

- **React 19 + TypeScript** — UI
- **Vite** — dev server and build
- **React Router** — routing (`src/App.tsx`)
- **react-i18next** — translations (Swedish/English)
- **CSS Modules** — styling, no CSS-in-JS
- **Vitest + Testing Library** — tests

## Folder structure

```
src/
  components/
    ui/            # generic design-system components (Button, Input, Pill, ...)
    Footer/         Navigation/         Layout/    # app shell, rendered on every page
    LoadingPage/     LanguageSwitcher/
    ServiceCard/     ServicePreview/    # shared between Home and Services, not page-specific
  pages/
    Home/
      components/   # components only used on Home (Hero, Banner, ...)
      index.tsx
    About/
      components/   # components only used on About (ContactCard, ...)
      index.tsx
    Contact/
      components/   # components only used on Contact (Form, OpeningHours, ...)
      index.tsx
    Services/
      index.tsx
      ServiceDetail/
        content.ts  # data for each service (heading, description, labels)
        index.tsx
  locales/
    en/translation.json
    sv/translation.json
  styles/
    tokens/         # design tokens (color, spacing, typography, etc.) as CSS variables
    semantic-tokens.css   # semantic tokens pointing at the primitives in tokens/
    global.css
  routes/
    services.ts     # url slugs and path helpers for the service pages
  i18n/
    i18n.ts         # i18next setup, language detection, syncs <html lang>
  hooks/
    usePageTitle.ts # sets document.title per page
  constants/
    contact.ts      # single source of truth for phone number and email
```

### Where should a new component go?

- **Only used on one page?** → `pages/<Page>/components/`
- **A generic building block with no page-specific content** (button, input, card wrapper)? → `components/ui/`
- **Shared across multiple pages, but not a generic primitive** (e.g. `ServiceCard`)? → `components/` (top level)
- **Part of the app shell** (header, footer, navigation, loading page)? → `components/` (top level)

## Translations (i18n)

All copy lives in `src/locales/en/translation.json` and `src/locales/sv/translation.json`, with an **identical key structure** in both files. Keys are nested by page/section, e.g. `home.hero.buttons.contactUs`, `contact.form.errors.required`.

- `common` holds shared strings (e.g. `common.contactUs`) reused elsewhere via `$t(common.xxx)` syntax.
- When adding a new key, add it to **both** files with the same path.
- Keys referenced dynamically (e.g. `contact.hours.${dayKey}` in `OpeningHours.tsx`) must exist for every day in `hours.ts`.

## Design tokens

Colors, spacing, typography, etc. are CSS variables in `src/styles/tokens/`. `semantic-tokens.css` maps those primitives to named roles (`--color-action-primary`, `--color-focus-ring`, etc.) — always use the semantic names in component CSS, not the primitives directly (e.g. `var(--color-action-primary)`, not `var(--color-orange-500)`).

Breakpoints are CSS custom media queries, used as `@media (--md) { ... }` (defined in `breakpoint-tokens.css`).

## Tests

Every component with logic or important markup has a co-located `*.test.tsx` file in the same folder. Run `npm run test` before committing larger changes.
