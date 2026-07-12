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
**Cloudflare Pages** (project `techm8-website`, serving `tech-m8.solutions`).
Deploys are automatic via Cloudflare's Git integration: pushing to `main`
triggers a Pages build that runs `npm ci && npm run build` and publishes the
generated `out/` directory. There is no GitHub Actions workflow and no manual
deploy step — just merge to `main`.

### Publishing downloads

Only the **install scripts** live in the repo
(`public/downloads/<product>/install.sh` and `install.ps1`), served as static
assets by Pages. The release **archives** themselves — CLI tarballs, the
macOS/Windows app zips, the per-product `VERSION` file, and the `checksums.txt`
— are hosted on **Cloudflare R2** at `dl.tech-m8.solutions` (bucket
`techm8-downloads`, one prefix per product, e.g. `job-hunter/`), not in git or
Pages.

To ship a new product version, upload the archives + checksums to R2 and bump
that product's `VERSION` file there — installers resolve the current release
from `<base>/VERSION`, so no website change is needed unless an installer script
itself changes. Upload with wrangler (after `wrangler login`), e.g.:

```sh
wrangler r2 object put techm8-downloads/job-hunter/JobHunter_<ver>_windows_x64.zip \
  --file JobHunter_<ver>_windows_x64.zip --content-type application/zip --remote
```
