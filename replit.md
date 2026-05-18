# BrightMinds Academy

A premium tuition and coaching institute showcase website designed to build deep trust with parents/students and generate admissions inquiries.

## Run & Operate

- `pnpm --filter @workspace/tuition-institute run dev` — run the frontend (port varies)
- `pnpm --filter @workspace/api-server run dev` — run the API server
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS v4, Framer Motion, shadcn/ui, react-hook-form
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `lib/api-spec/openapi.yaml` — API contract (source of truth)
- `lib/db/src/schema/inquiries.ts` — Inquiries table schema
- `artifacts/tuition-institute/src/` — Frontend React app
- `artifacts/tuition-institute/src/components/` — All section components
- `artifacts/api-server/src/routes/inquiries.ts` — Inquiry submission endpoint

## Architecture decisions

- Presentation-first showcase site with a single inquiry form POST endpoint
- All 12 sections as separate component files for maintainability
- Counter animations via custom useCountUp hook + IntersectionObserver
- Frosted glass navbar using CSS backdrop-filter with scroll event listener
- Floating WhatsApp button with CSS pulse animation ring

## Product

A full 12-section showcase website for BrightMinds Academy, covering: Hero with animated stats, About, Courses with tab filtering, Faculty profiles, Why Choose Us, Achievements & Results, Testimonials, Photo Gallery, Branch Locations, FAQs, Contact Form, and Footer.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Google Fonts @import must be the FIRST line of index.css (before @import "tailwindcss")
- Run codegen after every OpenAPI spec change

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
