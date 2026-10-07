# Pondview Pickleball website

Source and a ready-built `dist` folder for https://pondviewpb.com. The site uses React, TypeScript, Vite, and CSS. GitHub stores the project; Cloudflare Pages publishes the committed build.

## Pages

- `/` — compact homepage with the main scheduling link and page cards.
- `/play/` — court rentals, open play, lessons and coaching.
- `/coach/` — Coach Byron, RPO training photos, and certificate opening in a new tab.
- `/facility/` — amenities, FAQs including lockers, and an Iba area map. The map is not an exact court pin.
- `/about/` — our story.
- `/contact/` — inquiry form.
- `/code-of-conduct/` — club rules, with Safety first given priority.
- `/thank-you/` — return page after a successful form submission.

Header sections use internal page links. Facebook, Reclub, the certificate, and other external links open in a new tab. Instagram remains a clearly labeled placeholder. Reclub is the court scheduler. The site keeps the round Pondview logo, dark and gold theme, mobile hamburger menu, and decorative palms.

## Contact form: one-time activation required

The Submit button sends the form to FormSubmit for email delivery to `contact@pondviewpb.com`. It does not open the visitor's email app. `support@pondviewpb.com` stays in the footer as the general support address.

Before sharing the form with customers:

1. Open https://pondviewpb.com/contact/ and submit a test inquiry using an email address you control. Complete the provider's verification if requested.
2. Check the inbox that receives mail forwarded from `contact@pondviewpb.com`, including spam. Open the FormSubmit activation email and confirm the address.
3. Submit another test inquiry and confirm that it arrives. Delivery is not verified until this step succeeds.

The form includes name, email, contact reason, and message, a honeypot, and the provider's default spam verification. FormSubmit processes these fields; a notice appears beside the form. After a successful submission, the provider redirects the visitor to this site's `/thank-you/` page. FormSubmit is an external service; delivery and availability depend on that service and the recipient's mail routing.

Official setup and activation documentation: https://formsubmit.co/ and https://formsubmit.co/help

## Existing Cloudflare Pages settings

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Root directory | Repository root (leave blank) |
| Build command | `exit 0` |
| Build output directory | `dist` |
| Environment variable | `SKIP_DEPENDENCY_INSTALL=true` |

Because this setup publishes prebuilt files, always commit the updated `dist` folder along with source changes. Editing `src` alone does not update the live site. Push to the connected production branch and check the Cloudflare Pages deployment for that new commit.

## Local development and future edits

Use Node 22.12 or newer:

```sh
npm install
npm run dev
npx tsc --noEmit
npm run build
npm run preview
```

`src/App.tsx` holds the homepage and route selection. `src/Pages.tsx` holds the other pages. `src/UI.tsx` holds the shared navigation, footer, icons, and scheduling links. Styles are in `src/styles.css`; original assets are in `public/images/`.

`scripts/postbuild.mjs` creates a directory index for each internal page so direct links and refreshes work with the static deployment. The project targets a root domain or Cloudflare Pages hostname, not a GitHub Pages repository subpath.

## Content still to confirm

Locker availability, rental and lesson prices, and the exact court map pin remain placeholders. Supply the Instagram URL when it is ready. The certificate is the owner's supplied image and retains its watermark. Keep certification details and the linked image current when renewed.
