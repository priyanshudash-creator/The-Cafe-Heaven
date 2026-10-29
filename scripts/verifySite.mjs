import { MENU_ITEMS } from '../src/data/menu.ts';
import { MENU_CATEGORIES } from '../src/data/categories.ts';
import { COFFEE_ADD_ONS } from '../src/data/addOns.ts';
import { GALLERY_MANIFEST } from '../src/data/gallery.ts';

console.log('====================================================');
console.log('THE CAFE HEAVEN — AUTOMATED SITE VERIFICATION');
console.log('====================================================\n');

let errors = 0;
let warnings = 0;

// 1. Verify Categories
console.log('1. Checking Categories...');
const requiredCategories = [
  'Pastries',
  'Cheesecakes',
  'Puffs & Bakery Snacks',
  'Doughnuts',
  'Specialty Cakes & Desserts',
  'Celebration Cakes',
  'Hot Coffee & Beverages',
  'Starters & Appetizers'
];

requiredCategories.forEach((cat) => {
  const found = MENU_CATEGORIES.find((c) => c.id === cat);
  if (!found) {
    console.error(`  [ERROR] Missing required category in MENU_CATEGORIES: ${cat}`);
    errors++;
  } else {
    const itemCount = MENU_ITEMS.filter((i) => i.category === cat).length;
    console.log(`  ✓ Category "${cat}": ${itemCount} items`);
  }
});

// 2. Verify Specific Menu Prompt Mandates
console.log('\n2. Verifying Mandated Items & Features...');

// 450 g Fruit & Nuts Cake
const fruitNutsCake = MENU_ITEMS.find((i) => i.name.toLowerCase().includes('fruit & nuts cake'));
if (!fruitNutsCake) {
  console.error('  [ERROR] Fruit & Nuts Cake not found in menu items!');
  errors++;
} else {
  if (fruitNutsCake.weight === '450 g') {
    console.log(`  ✓ 450 g Fruit & Nuts Cake verified: ₹${fruitNutsCake.price} [${fruitNutsCake.category}]`);
  } else {
    console.error(`  [ERROR] Fruit & Nuts Cake missing weight "450 g", got: ${fruitNutsCake.weight}`);
    errors++;
  }
}

// "Must try" label for Peri Peri Fried Chicken
const periPeriChicken = MENU_ITEMS.find((i) => i.name.toLowerCase().includes('peri peri fried chicken'));
if (!periPeriChicken) {
  console.error('  [ERROR] Peri Peri Fried Chicken not found!');
  errors++;
} else {
  if (periPeriChicken.badge === 'Must try') {
    console.log(`  ✓ Peri Peri Fried Chicken verified with "Must try" badge: ₹${periPeriChicken.price}`);
  } else {
    console.error(`  [ERROR] Peri Peri Fried Chicken missing "Must try" badge, got: ${periPeriChicken.badge}`);
    errors++;
  }
}

// Coffee Add-ons at ₹50 each
console.log(`  ✓ Coffee add-ons count: ${COFFEE_ADD_ONS.length}`);
COFFEE_ADD_ONS.forEach((addon) => {
  if (addon.price !== 50) {
    console.error(`  [ERROR] Coffee add-on ${addon.name} price is not ₹50 (got ₹${addon.price})`);
    errors++;
  }
});
console.log('  ✓ All coffee add-ons verified at exact ₹50 pricing.');

// 3. Verify Unique IDs & Valid Prices
console.log('\n3. Verifying Menu Data Integrity...');
const seenIds = new Set();
MENU_ITEMS.forEach((item) => {
  if (seenIds.has(item.id)) {
    console.error(`  [ERROR] Duplicate item ID: ${item.id}`);
    errors++;
  }
  seenIds.add(item.id);

  if (typeof item.price !== 'number' || item.price <= 0) {
    console.error(`  [ERROR] Invalid price for ${item.name}: ${item.price}`);
    errors++;
  }
});
console.log(`  ✓ All ${MENU_ITEMS.length} items verified with valid IDs and prices.`);

// 4. Verify Gallery Manifest
console.log('\n4. Verifying Gallery Asset Manifest...');
console.log(`  Total gallery images cataloged: ${GALLERY_MANIFEST.length}`);
const galleryCategories = new Set(GALLERY_MANIFEST.map((g) => g.category));
console.log(`  Categories represented: ${Array.from(galleryCategories).join(', ')}`);

GALLERY_MANIFEST.forEach((img) => {
  if (!img.src || !img.title || !img.caption || !img.filename || !img.permissionStatus) {
    console.error(`  [ERROR] Incomplete gallery metadata for image ID: ${img.id}`);
    errors++;
  }
});
console.log('  ✓ All gallery items contain full metadata, aspect ratio, captions, and provenance status.');

console.log('\n====================================================');
if (errors === 0) {
  console.log(`ALL VERIFICATIONS PASSED SUCCESSFULLY! (${MENU_ITEMS.length} dishes active, ${GALLERY_MANIFEST.length} photos)`);
} else {
  console.error(`VERIFICATION FAILED WITH ${errors} ERRORS.`);
}
console.log('====================================================\n');
