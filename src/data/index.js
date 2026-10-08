// Helpers that join the data files together. You should not need to edit this file.
import { site, locationLine } from './site.js';
import { categories } from './categories.js';
import { products } from './products.js';
import credits from './image-credits.json';

// Every image in src/assets/images is picked up automatically by filename.
const imageModules = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp,avif}', { eager: true });
const images = Object.fromEntries(
  Object.entries(imageModules).map(([path, mod]) => [path.split('/').pop(), mod.default]),
);

export function getImage(file) {
  const image = images[file];
  if (!image) {
    throw new Error(`Image "${file}" was not found in src/assets/images/. Check the filename in your data files.`);
  }
  return image;
}

export const getCategory = (slug) => categories.find((category) => category.slug === slug);
export const getProduct = (slug) => products.find((product) => product.slug === slug);
export const productsIn = (categorySlug) => products.filter((product) => product.category === categorySlug);
export const featuredProducts = products
  .filter((product) => product.featured)
  .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99));

export const productHref = (product) => `/products/${product.slug}/`;
export const enquiryHref = (product) => (product ? `/contact/?product=${product.slug}#quote-form` : '/contact/#quote-form');

// WhatsApp link with a pre-written message; returns '' until a number is configured.
export function whatsappHref(productName) {
  const number = site.contact.whatsapp.replace(/\D/g, '');
  if (!number) return '';
  const text = productName
    ? `Hello ${site.name}, I would like to enquire about ${productName}.`
    : `Hello ${site.name}, I would like to make a product enquiry.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

export { site, locationLine, categories, products, credits };
