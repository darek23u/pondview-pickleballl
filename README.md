# Pondview Pickleball — GitHub upload package

This is a standalone copy of the Pondview website, including the latest round symbol-only logo, supplied images, dark-and-gold styling, certification, and amenities. Visitors do not need a ChatGPT account. There is no authentication or ChatGPT dependency.

The site uses React, TypeScript, Vite, and CSS. It is an informational site: booking, payments, rates, schedules, and contact details remain placeholders. This export is separate from the ChatGPT-hosted version; future edits do not automatically synchronize between them.

## Quick start: GitHub + Cloudflare Pages

### 1. Upload to GitHub

1. Extract the ZIP on your computer.
2. Visit https://github.com/new and create a repository named `pondview-pickleball` (or your preferred name). Private is fine when you authorize Cloudflare to access it; the published website can still be public.
3. Open the repository, then choose **Add file → Upload files** (or **uploading an existing file** for an empty repository).
4. Drag the CONTENTS of the extracted `pondview-github` folder into the upload area. Upload the folders too, including `dist`, `src`, and `public`. Do not upload just the ZIP, and do not wrap everything in an extra folder.
5. Choose **Commit changes**. At the repository root you should see `README.md`, `package.json`, `index.html`, `dist`, `public`, and `src`.

If your file picker does not preserve folders, drag the folders from your desktop file manager into the upload area or use GitHub Desktop.

### 2. Publish on Cloudflare Pages (no local commands needed)

1. Create/sign in to a free account at https://dash.cloudflare.com/.
2. Open **Workers & Pages → Create application → Pages → Import an existing Git repository**. Button wording may vary slightly.
3. Connect GitHub, authorize access to this repository, and select it.
4. Use these settings:

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Root directory | Leave blank (repository root) |
| Build command | `exit 0` |
| Build output directory | `dist` |
| Environment variable | `SKIP_DEPENDENCY_INSTALL` = `true` |

The `dist` folder is already built; no package installation is needed for this route.

5. Select **Save and Deploy**.
6. Cloudflare supplies a public `*.pages.dev` address. Open that address in a private/incognito browser window to verify it works without logging in. Do not enable Cloudflare Access if you want public customer access.

Use Cloudflare Pages to host the business site, not GitHub Pages. GitHub stores the code and Cloudflare serves the website. The free provider address avoids buying a domain. Free-plan usage limits apply; optional domain purchases, future booking services, and payment processing are separate.

## Updating the website later

There are two modes. Choose one:

### A. Keep using the prebuilt folder

After changing source files, rebuild locally and commit the updated `dist` folder as well. Editing only `src` does not update the published site when the build command is `exit 0`.

### B. Let Cloudflare rebuild from source automatically

In Cloudflare, change the build command to `npm run build`, leave the output as `dist`, remove `SKIP_DEPENDENCY_INSTALL`, and set `NODE_VERSION` to `22`. Cloudflare will install the dependencies from `package.json` and rebuild after each push. The shipped build uses exact dependency versions; there is no package lock in this starter export. You can generate and commit one with `npm install`.

## Local development (optional)

Install Node.js 22.12 or later, then run from this folder:

```sh
npm install
npm run dev
```

Create a fresh publishable build:

```sh
npm run build
npm run preview
```

Use the address shown by the local server. Opening `dist/index.html` directly with a `file://` address is not a reliable preview.

## Files to edit

| File or folder | Purpose |
| --- | --- |
| `src/App.tsx` | Text, sections, amenities, navigation, and image references |
| `src/styles.css` | Colors, layout, mobile styling, and round logo appearance |
| `public/images/pondview-symbol.png` | New symbol-only logo |
| `public/images/` | Original logo, wallpaper, team/class photos, and equipment photo |
| `index.html` | Browser title and search description |
| `public/favicon.svg` | Browser tab icon |
| `dist/` | Ready-to-publish build; generated from source |

All supplied images remain your responsibility to use with appropriate rights. No third-party rights are granted by this package. The original artwork is preserved alongside the new logo.

## Before promoting the site

Replace placeholder rates, hours, contact details, opening status, and booking instructions. The website does not accept reservations or payments yet. The wallpaper remains labeled as concept artwork.

## Troubleshooting

- **404 at the main address:** make sure the output directory is `dist` and `dist/index.html` exists in GitHub.
- **Old text after changing source:** rebuild and commit `dist`, or switch to automatic builds as described above.
- **Images missing:** check that `dist/images` was uploaded and filenames have not changed.
- **Wrong repository folder:** if you uploaded the outer folder, move its contents to the repository root or set the root directory to that folder.

## References

- Cloudflare static website setup: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
- Cloudflare build configuration: https://developers.cloudflare.com/pages/configuration/build-configuration/
- Cloudflare GitHub integration: https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/
- GitHub file uploads: https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository
- GitHub Pages usage restrictions: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
