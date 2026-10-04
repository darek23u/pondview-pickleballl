# Pondview website update

This package contains the source and a ready-built `dist` folder. No build is needed for the existing Cloudflare Pages setup.

## Publish using GitHub + Cloudflare Pages

1. Extract the ZIP. Open the `pondview-github` folder.
2. In your GitHub repository root, choose Add file > Upload files. Drag the contents of `pondview-github` into the upload area, including the WHOLE dist, src, public, and scripts folders. Do not upload the ZIP itself or flatten the folders. Commit the changes to your connected production branch.
3. Confirm GitHub shows `dist/index.html`, `dist/assets/`, and `dist/about/index.html`.
4. Keep Cloudflare Pages build command `exit 0`, build output directory `dist`, root directory blank. Keep SKIP_DEPENDENCY_INSTALL=true for this prebuilt workflow.
5. Open the deployment triggered by the NEW commit. Retrying an older deployment may use old files.

The current published version stays available while the new version is prepared. These local files are not automatically deployed by downloading this ZIP.

## Connect pondviewpb.com

In Cloudflare: Workers & Pages > your Pages project > Custom domains > Set up a domain > enter pondviewpb.com.
For this apex domain, add pondviewpb.com as a website/zone on the same Cloudflare account. If its DNS is not already on Cloudflare, change the nameservers at the company where you purchased it to the exact nameservers Cloudflare assigns. Check that existing DNS records, including any mail records, are copied before switching.
Once active, complete the Pages custom-domain setup. Add www.pondviewpb.com through Custom domains too if desired; follow the DNS instructions shown. Do not guess a pages.dev target.
Official guide: https://developers.cloudflare.com/pages/configuration/custom-domains/

## Included changes

- Main scheduling links now point to Pondview Reclub.
- Mobile navigation is collapsed into an accessible hamburger menu; desktop navigation is larger and uses Facility.
- Round symbol-only Pondview logo retained. Enlarged RPO certification badge (the supplied source did not contain a separate official RPO logo file).
- Toilet icon, half-round awning icon, and decorative gold palm outlines starting at 70% of the home-page content.
- Play cards have titles without numbers. Footer location centered, Facebook link added.
- About Us, Contact Us, and Code of Conduct pages, including direct URL refresh support.
- Missing content photos display a themed placeholder.
- Code of Conduct uses Pondview's name and links to the requested 2020 USA Pickleball skill-rating PDF.

## Main email and contact form

support@pondviewpb.com is the main public email in the footer, visit section, and contact page. The contact form opens an email draft addressed to support@pondviewpb.com with the visitor's name, email, reason, and message. Visitors must send it from their email app. No server-side form delivery is configured. contact@pondviewpb.com remains an alternate address but is not the main website contact.

## Future source edits

Use Node 22.12 or newer. Run npm install, then npm run build. Upload the newly generated dist folder along with changed source files. If you retain build command exit 0 on Cloudflare, editing src alone will NOT update the live website; dist must also be rebuilt and committed.

The bundled build script creates /about/, /contact/, and /code-of-conduct/ pages. This package targets a root domain or Cloudflare pages.dev hostname (not a GitHub Pages repository subpath).

## Verification

TypeScript checking and production build passed. Static page URLs and local asset references were checked. Browser visual testing was unavailable in this workspace; check mobile menu, pages, Facebook/Reclub links, and the contact email action on your preview before sharing the update.
