// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT CATEGORIES
// Add a category by copying one block and giving it a unique `slug`.
// Products join a category through their `category` field in products.js.
// The order here is the order shown on the website.
// ─────────────────────────────────────────────────────────────────────────────

export const categories = [
  {
    slug: 'processed',
    name: 'Processed Agricultural Products',
    shortName: 'Processed',
    description:
      'Our main commercial focus: value-added agricultural ingredients for importers, food brands and ingredient buyers.',
  },
  {
    slug: 'spices',
    name: 'Spices',
    shortName: 'Spices',
    description: 'Whole spices from South India, beginning with green cardamom and black pepper.',
  },
  {
    slug: 'fresh-produce',
    name: 'Fresh Produce',
    shortName: 'Fresh Produce',
    description:
      'Vegetables sourced through our market relationships in Oddanchatram, beginning with onions and tomatoes.',
  },
];
