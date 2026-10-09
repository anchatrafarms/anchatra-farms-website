// ─────────────────────────────────────────────────────────────────────────────
// SITE SETTINGS
// Brand, contact details, navigation and enquiry-form settings live here.
// Anything left as an empty string ('') is simply hidden on the website.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: 'ANCHATRA FARMS',
  tagline: 'Rooted in Oddanchatram. Growing global connections.',
  description:
    'ANCHATRA FARMS is an emerging agricultural sourcing and export business from Oddanchatram, Tamil Nadu, offering black garlic, moringa powder, green cardamom, black pepper and fresh produce to international trade buyers.',

  // Your live web address, e.g. 'https://www.anchatrafarms.com' (no trailing slash).
  // Used for canonical links and social sharing. Leave empty until you have a domain.
  url: '',

  // ── Wordmark ───────────────────────────────────────────────────────────────
  // To replace the text wordmark with an image logo:
  //   1. Put the logo file in the /public folder (e.g. /public/logo.svg)
  //   2. Set image to '/logo.svg'. Use imageOnDark for a light version shown
  //      on the dark footer (optional — falls back to `image`).
  logo: {
    primary: 'ANCHATRA',
    secondary: 'FARMS',
    image: '',
    imageOnDark: '',
  },

  // ── Location (confirmed) ───────────────────────────────────────────────────
  location: {
    town: 'Oddanchatram',
    district: 'Dindigul district',
    state: 'Tamil Nadu',
    country: 'India',
    // Full street address, shown in the footer and contact page once supplied.
    streetAddress: '',
  },

  // ── Contact details ────────────────────────────────────────────────────────
  // Leave empty until you have real details. Empty items are not displayed.
  contact: {
    email: 'anchatrafarms@gmail.com',
    phone: '+91 63790 23424', // shown as written
    // WhatsApp number in international format, digits only, no "+" or spaces,
    // e.g. '919876543210'. The WhatsApp enquiry buttons appear once this is set.
    whatsapp: '916379023424',
    // Social profiles: add entries like { label: 'LinkedIn', url: 'https://…' }
    social: [],
  },

  // ── Enquiry form ───────────────────────────────────────────────────────────
  // endpoint: the URL the quotation form posts to (JSON). Works with form
  // services such as Formspree or Web3Forms, or your own API. While this is
  // empty the form runs in PREVIEW MODE and does not send anything.
  // accessKey: only needed for services that require one in the payload
  // (Web3Forms calls it `access_key`). Leave empty for Formspree.
  form: {
    // FormSubmit delivers each enquiry to the inbox named at the end of this address.
    endpoint: 'https://formsubmit.co/ajax/anchatrafarms@gmail.com',
    accessKey: '',
    quantityUnits: ['kg', 'metric tonnes', 'cartons', 'bags', '20 ft container', '40 ft container', 'Other'],
  },

  nav: [
    { label: 'Home', href: '/' },
    { label: 'Our Products', href: '/products/' },
    { label: 'Our Story', href: '/our-story/' },
    { label: 'Sourcing & Quality', href: '/sourcing-quality/' },
    { label: 'Contact', href: '/contact/' },
  ],

  // ── Story page location photograph ─────────────────────────────────────────
  // Reserved for a real photograph of Oddanchatram that you supply.
  // Put the file in src/assets/images/ and set `file` to its name.
  // `caption` is optional text shown under the photograph; leave it empty for none.
  locationImage: {
    file: 'market-stall.jpg',
    alt: 'Baskets of potatoes, beans and tomatoes at a vegetable market stall in Tamil Nadu',
    isOwnPhoto: false,
    caption: '',
  },
};

export const locationLine = [site.location.town, site.location.district, site.location.state, site.location.country]
  .filter(Boolean)
  .join(', ');
