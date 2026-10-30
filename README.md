# The Cafe Heaven — Acharya Vihar, Bhubaneswar

An artisanal, handcrafted web experience built for **The Cafe Heaven, Acharya Vihar, Bhubaneswar, Odisha, India** — located at Plot No. M/5/R/27, Gajapati Nagar.

Designed with a warm tropical-Mediterranean aesthetic: espresso brown, warm cream, coffee brown, and muted terracotta palette, paired with DM Serif Display, Playfair Display, and DM Sans typography.

---

## ☕ Brand & Location Details

- **Establishment Name:** The Cafe Heaven
- **Location:** Plot No. M/5/R/27, Gajapati Nagar, Acharya Vihar, Bhubaneswar, Odisha 751013
- **Hours of Operation:** Monday – Sunday (All 7 Days), 10:00 AM – 10:00 PM
- **Google Maps Listing:** [https://maps.app.goo.gl/5UR6coRrVfRBav3q6](https://maps.app.goo.gl/5UR6coRrVfRBav3q6)
- **Instagram:** [@the.cafeheaven](https://www.instagram.com/the.cafeheaven/)
- **Architecture & Concept:** Contemporary Mediterranean & Boho-Chic Interior Design by Vogue Architect & Interiors (featuring arched partition portals, natural cane and rattan dining furniture, biophilic Heliconia motifs, and bold cobalt blue accents).

---

## 🥐 Complete 72-Item Menu Across 8 Categories

All eight required categories are fully structured and integrated:

1. **Pastries** (8 selections): Belgian Dark Chocolate Truffle, Classic Black Forest, Red Velvet Cream Cheese, Salted Caramel Hazelnut, Fresh Mango Seasonal, Dutch Truffle, Butterscotch Crunch, Opera French Coffee.
2. **Cheesecakes** (8 selections): New York Baked Blueberry, Lotus Biscoff Baked, Classic New York Baked, Nutella Swirl, Basque Burnt Cheesecake, Strawberry Coulis, Belgian Chocolate, Lemon Curd Zest.
3. **Puffs & Bakery Snacks** (8 selections): Spiced Paneer Tikka Puff, Chicken Keema Puff, Classic Masala Veg Puff, Butter Chicken Puff, Mushroom & Herb Cream Puff, Cheese & Corn Pocket, Egg & Pepper Masala Puff, Chicken Sausage Roll.
4. **Doughnuts** (8 selections): Classic Chocolate Glazed Ring, Nutella Cream Filled, Dark Chocolate Ganache, Cinnamon Sugar Ring, White Chocolate Berry, Salted Caramel Crunch, Boston Cream, Biscoff Caramel.
5. **Specialty Cakes & Desserts** (8 selections): **450 g Fruit & Nuts Cake (₹380)**, Chocolate Walnut Brownie, Tiramisu Dessert Cup, Dark Chocolate Lava Cake, Classic Banoffee Pie Tart, Blueberry Crumble Muffin, Chocochip Tea Cake Loaf, Red Velvet Dessert Jar.
6. **Celebration Cakes** (8 selections): Belgian Chocolate Truffle Cake (500g & 1kg), Black Forest Celebration Cake, Fresh Fruit Exotic Cake, Red Velvet Heart Cake, Butterscotch Crunch Celebration Cake, Pineapple Gateau Cake, Nutella Ferrero Rocher Drip Cake.
7. **Hot Coffee & Beverages** (12 selections): Espresso Single Shot, Doppio, Americano Coffee, Espresso Macchiato, Classic Cappuccino, Caffe Latte, Flat White, Caffe Mocha, Hazelnut Latte, Caramel Macchiato, Belgian Hot Chocolate, The Gibraltar / Cortado.  
   * **Coffee Add-ons (+₹50 each):** Hazelnut Syrup, Caramel Drizzle, Vanilla Flavor Shot, Extra Espresso Shot, Whipped Cream, Oat Milk Substitute, Almond Milk Substitute.
8. **Starters & Appetizers** (12 selections): **Peri Peri Fried Chicken (₹440, "Must try" badge)**, Animal Nachos, Korean Bomb Burger, Cheesy Garlic Breadsticks, Crispy Peri Peri French Fries, Chicken Ham, Egg & Cheddar Sandwich, Classic BBQ Chicken Wings, Spaghetti Alfredo Pasta (Veg & Chicken), Paneer Popcorn Crispies, Stuffed Jalapeno Poppers, Chicken Tenders with Honey Mustard.

---

## 🖼️ Photographic Gallery & Asset Manifest

- **Asset Structure:** Located under `public/images/cafe-heaven/` across `exterior/`, `interior/`, `coffee/`, `cakes-and-pastries/`, `food/`, `ambience/`, and `gallery/`.
- **Manifest:** Centralized in `src/data/gallery.ts` tracking filename, aspect ratio, caption, attribution, and verified provenance.
- **Editorial Asymmetric Grid:** Dynamic masonry display featuring landscape, portrait, square, and wide photographic orientations with category filtering (All Photos, Interior, Coffee & Drinks, Cakes & Desserts, Food, Ambience).
- **Accessible Lightbox:** Fullscreen modal with image metadata, previous/next controls, keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`), and backdrop dismiss.

---

## 🛠️ Technology & Verification

- **Framework:** React 18 + TypeScript + Vite 6
- **Styling:** Tailwind CSS 3 with custom warm café palette
- **Icons:** Lucide React
- **Automated Verification Script:** `node --experimental-strip-types scripts/verifySite.mjs`

```bash
# Development server
npm run dev

# TypeScript type check
npx tsc --noEmit

# Production build
npm run build

# Site & Menu Verification
node --experimental-strip-types scripts/verifySite.mjs
```
