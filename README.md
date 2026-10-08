# ANCHATRA FARMS website

A static website built with [Astro](https://astro.build). There is no database, login or admin
screen: you edit a few plain data files, and the site rebuilds itself.

## Preview the site

You need [Node.js](https://nodejs.org) (already installed on this computer).

```
cd C:\Users\bhara\Projects\anchatra-farms
npm install        # first time only
npm run dev
```

Open http://localhost:4321. The page refreshes automatically when you save a file.

Other commands:

| Command           | What it does                                                        |
| ----------------- | ------------------------------------------------------------------- |
| `npm run build`   | Creates the finished site in the `dist` folder (this is what you upload) |
| `npm run preview` | Serves the built `dist` folder locally                              |
| `npm run check`   | Builds, then checks every internal link, image and anchor           |

## Where things live

| To change…                                   | Edit this file                 |
| -------------------------------------------- | ------------------------------ |
| Products (add, remove, details, featured)    | `src/data/products.js`         |
| Categories                                   | `src/data/categories.js`       |
| Contact details, WhatsApp, form, logo, nav   | `src/data/site.js`             |
| Buyer questions (FAQ)                        | `src/data/faqs.js`             |
| Verified certificates and documents          | `src/data/documents.js`        |
| Photographs                                  | `src/assets/images/`           |
| Photo credits                                | `src/data/image-credits.json`  |
| Page wording                                 | `src/pages/*.astro`            |
| Colours and fonts                            | top of `src/styles/global.css` |

Each data file has instructions at the top.

## Add a product

1. Put its photographs in `src/assets/images/` (JPG, PNG or WebP; around 1600–2000 px wide is ideal).
2. Open `src/data/products.js`, copy an existing product block and change:
   - `slug` – lower-case with hyphens; becomes the address `/products/your-slug/`
   - `name`, `category` (must match a category `slug`), `summary`, `intro`, `uses`
   - `images` – the filenames from step 1, each with a short `alt` description
3. Fill in `origin`, `forms`, `specifications`, `packaging`, `moq`, `availability`, `storage`
   and `documents` **only when confirmed**. Anything left empty is hidden automatically and the page
   shows “Contact us to discuss current specifications, packaging, and availability.”
4. Set `featured: true` (and a `featuredOrder`) to show it in the large homepage section.

The product page, catalogue tile, category list, footer and the enquiry-form dropdown all update
from that one entry.

## Add a category

Add a block to `src/data/categories.js` with a unique `slug`, then set `category: 'that-slug'` on
its products. The filter button, homepage category list and form grouping appear automatically. A
category with no products shows a friendly “nothing listed yet” message.

## The enquiry form (email and WhatsApp)

The quotation form sends each enquiry two ways:

- **Email** – "Send Quotation Request" posts the enquiry to FormSubmit, which emails it to the
  address at the end of `form.endpoint` in `src/data/site.js` as a table with one labelled row per
  answer. **The first enquiry ever sent triggers an activation email from FormSubmit – open it and
  click "Activate" once.** Enquiries are delivered from then on.
- **WhatsApp** – "Send via WhatsApp" opens WhatsApp with the same details written out as a
  message to `contact.whatsapp`. The visitor still has to press send: a website cannot post into
  WhatsApp on someone's behalf.

To use another form service (Formspree, Web3Forms or your own API), change `form.endpoint`.
Web3Forms also needs `form.accessKey`. If `form.endpoint` is empty the form runs in preview mode
and tells the visitor plainly that nothing was sent.

The success message is only shown after the service confirms receipt. If sending fails, the visitor
sees an error and keeps everything they typed.

## Contact details and WhatsApp

In `src/data/site.js`, edit `contact.email`, `contact.phone`, `contact.whatsapp`
(digits only with country code, e.g. `919876543210`), `location.streetAddress` and `contact.social`.
Empty items stay hidden. WhatsApp enquiry buttons appear on product pages, the contact page, the
footer and the floating button, with the product name pre-filled in the message.

## Replace the wordmark with a logo

Put the logo in `public/` (for example `public/logo.svg`) and set `logo.image: '/logo.svg'` in
`src/data/site.js`. Add `logo.imageOnDark` for a light version used in the footer.

## Photographs

The current photographs are illustrative images from Wikimedia Commons under Creative Commons
licences, credited on the `/image-credits/` page (attribution is a licence requirement — keep that
page while you use them). They are **not** photographs of ANCHATRA FARMS or Oddanchatram, and the
site says so where it matters.

To use your own photographs, add them to `src/assets/images/` and change the filenames in the data
files. For the Oddanchatram photograph on the homepage and Our Story page, update `locationImage`
in `src/data/site.js` and set `isOwnPhoto: true` to remove the “illustrative” caption. When you
remove a Commons image, delete its entry from `src/data/image-credits.json`.

## Certificates and documents

Add genuine documents to `src/data/documents.js` (files go in `public/documents/`). The
“Certificates & documents” section on the Sourcing & Quality page appears only when that list has
entries.

## Going live

1. Set `url` in `src/data/site.js` to your domain (enables canonical links and social images).
2. Run `npm run check`.
3. Upload the `dist` folder to any static host (Netlify, Cloudflare Pages, Vercel, GitHub Pages or
   ordinary web hosting).
