// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT CATALOGUE
//
// To add a product: copy one block, change the `slug` (this becomes the web
// address: /products/<slug>/) and fill in what you have confirmed.
// To remove a product: delete its block.
//
// Fields marked "when confirmed" can be left as '' or [] — empty details are
// hidden on the website and replaced by a "contact us to discuss" sentence.
// Only enter information you can stand behind with a buyer.
//
//   featured        true = shown in the large "featured" section on the homepage
//   featuredOrder   lower numbers appear first
//   images          files in src/assets/images/ — the first is the main image.
//                   cutout: true blends a white-background studio photo into the page.
//   uses            general culinary / ingredient uses (no health claims)
//   origin          when confirmed, e.g. 'Tamil Nadu, India'
//   forms           when confirmed, e.g. ['Whole bulbs', 'Peeled cloves']
//   specifications  when confirmed, e.g. [{ label: 'Moisture', value: '…' }]
//   packaging       when confirmed, e.g. ['10 kg cartons']
//   moq             when confirmed, e.g. '500 kg'
//   availability    when confirmed (availability and lead time)
//   storage         when confirmed (storage and shelf life)
//   documents       when supplied: [{ label: 'Specification sheet', file: '/documents/name.pdf' }]
//                   (put the PDF in /public/documents/)
// ─────────────────────────────────────────────────────────────────────────────

export const products = [
  {
    slug: 'black-garlic',
    name: 'Black Garlic',
    category: 'processed',
    featured: true,
    featuredOrder: 1,
    summary:
      'Dark, soft cloves with a mellow, sweet-savoury depth — an ingredient for sauces, seasonings and speciality foods.',
    intro: [
      'Black garlic is prized by chefs and food developers for its dark, tender cloves and a rounded flavour that is gentler and sweeter than fresh garlic.',
      'It is one of the two products at the centre of our offer. We work with each buyer to agree the form, grade and packing their market requires before quoting.',
    ],
    images: [
      {
        file: 'black-garlic-bulbs.jpg',
        alt: 'Whole black garlic bulbs, two cut open to show the dark cloves inside',
        cutout: true,
      },
      {
        file: 'black-garlic-cloves.jpg',
        alt: 'Three black garlic bulbs with peeled, glossy black cloves in front',
        cutout: true,
      },
    ],
    uses: [
      'Sauces, dressings, glazes and marinades',
      'Seasoning blends, pastes and condiments',
      'Ready meals and speciality food products',
      'Restaurant and food-service kitchens',
    ],
    origin: '',
    forms: [],
    specifications: [],
    packaging: [],
    moq: '',
    availability: '',
    storage: '',
    documents: [],
  },
  {
    slug: 'moringa-powder',
    name: 'Moringa Powder',
    category: 'processed',
    featured: true,
    featuredOrder: 2,
    summary:
      'Green powder made from dried moringa leaves, used as an ingredient in blends, beverages and food products.',
    intro: [
      'Moringa is a familiar tree across South India, and its leaves have long been part of the region’s cooking. Dried and milled, they become a fine green powder used by food and ingredient businesses.',
      'Alongside black garlic, moringa powder is a core focus for ANCHATRA FARMS. Tell us the specification, pack size and documentation your market needs and we will respond with what we can offer.',
    ],
    images: [
      {
        file: 'moringa-powder-bowl.jpg',
        alt: 'A bowl of green moringa leaf powder beside fresh green leaves',
      },
      {
        file: 'moringa-powder-tray.jpg',
        alt: 'Fine green moringa powder in a wooden tray',
      },
      {
        file: 'moringa-leaves.jpg',
        alt: 'Fresh moringa leaves on the branch',
      },
    ],
    uses: [
      'Beverage mixes, teas and smoothie blends',
      'Soups, seasonings and savoury mixes',
      'Bakery, snack and packaged food formulations',
      'Private-label and ingredient supply',
    ],
    origin: '',
    forms: [],
    specifications: [],
    packaging: [],
    moq: '',
    availability: '',
    storage: '',
    documents: [],
  },
  {
    slug: 'onions',
    name: 'Onions',
    category: 'fresh-produce',
    featured: false,
    summary:
      'An everyday kitchen staple, offered through our vegetable-market relationships in Oddanchatram.',
    intro: [
      'Onions are among the first fresh products we plan to offer, drawing on the founder’s personal relationships with shop owners in the Oddanchatram vegetable market.',
      'Fresh produce depends on season, variety and destination. Share your requirement and we will discuss what is currently available and whether it suits your route to market.',
    ],
    images: [
      {
        file: 'onions-market.jpg',
        alt: 'A basket piled with pink-skinned onions at a vegetable market stall',
      },
      {
        file: 'red-onions.jpg',
        alt: 'Three whole red onions',
        cutout: true,
      },
    ],
    uses: [
      'Wholesale and retail fresh produce supply',
      'Food-service and catering kitchens',
      'Food processing and ingredient preparation',
    ],
    origin: '',
    forms: [],
    specifications: [],
    packaging: [],
    moq: '',
    availability: '',
    storage: '',
    documents: [],
  },
  {
    slug: 'tomatoes',
    name: 'Tomatoes',
    category: 'fresh-produce',
    featured: false,
    summary:
      'Fresh tomatoes, discussed enquiry by enquiry according to season, variety and destination.',
    intro: [
      'Tomatoes are part of our developing fresh produce range, sourced through the same local market relationships that inspired the business.',
      'Because tomatoes are highly perishable, we would rather discuss your destination, handling and timing needs openly before proposing anything. Send us your requirement to begin.',
    ],
    images: [
      {
        file: 'tomatoes-vine.jpg',
        alt: 'Ripe red tomatoes growing on the vine',
      },
      {
        file: 'tomatoes-basket.jpg',
        alt: 'A wicker basket of freshly picked red and orange tomatoes',
      },
    ],
    uses: [
      'Wholesale and retail fresh produce supply',
      'Food-service and catering kitchens',
      'Sauces, purées and food processing',
    ],
    origin: '',
    forms: [],
    specifications: [],
    packaging: [],
    moq: '',
    availability: '',
    storage: '',
    documents: [],
  },
];
