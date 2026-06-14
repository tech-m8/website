This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy

The site is a static export (`output: 'export'` in `next.config.mjs`) hosted on
**GitHub Pages**. Deploys are automatic: pushing to `main` triggers
`.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and
publishes the generated `out/` directory to Pages via
[`peaceiris/actions-gh-pages`](https://github.com/peaceiris/actions-gh-pages).

There is no manual deploy step — just merge to `main`.

### Publishing downloads

Release archives live under `public/downloads/`, served as static assets (e.g.
`public/downloads/job-hunter/`). To ship a new product version: drop the new
archives + checksums there, bump that product's `VERSION` file, and push — the
Pages build copies `public/` into `out/` as-is. Installers resolve the current
release from the `VERSION` file, so no code change is needed.
