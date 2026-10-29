import type { MenuCategory } from '../types/index.ts';

export interface CategoryInfo {
  id: MenuCategory;
  name: string;
  description: string;
  badgeCount?: number;
}

export const MENU_CATEGORIES: CategoryInfo[] = [
  {
    id: 'Pastries',
    name: 'Pastries',
    description: 'Delicate multi-layered sponges, velvety ganaches, and classic individual portions baked fresh daily.',
  },
  {
    id: 'Cheesecakes',
    name: 'Cheesecakes',
    description: 'Slow-baked New York style and chilled artisanal cheesecakes infused with berry compotes and rich textures.',
  },
  {
    id: 'Puffs & Bakery Snacks',
    name: 'Puffs & Bakery Snacks',
    description: 'Golden flaky puff pastry rolls, savory spiced pockets, and warm bakery snacks fresh from the oven.',
  },
  {
    id: 'Doughnuts',
    name: 'Doughnuts',
    description: 'Soft, airy ring doughnuts glazed by hand with dark chocolate, hazelnut fillings, and sweet toppings.',
  },
  {
    id: 'Specialty Cakes & Desserts',
    name: 'Specialty Cakes & Desserts',
    description: 'Handcrafted signature desserts, jar creations, mousses, and loaf cakes including our signature 450 g Fruit & Nuts Cake.',
  },
  {
    id: 'Celebration Cakes',
    name: 'Celebration Cakes',
    description: 'Gourmet whole celebration cakes crafted for birthdays, anniversaries, and milestones.',
  },
  {
    id: 'Hot Coffee & Beverages',
    name: 'Hot Coffee & Beverages',
    description: 'Carefully extracted espresso roasts, comforting cappuccinos, lattes, and premium warm drinks with customizable add-ons.',
  },
  {
    id: 'Starters & Appetizers',
    name: 'Starters & Appetizers',
    description: 'Freshly tossed savory starters, crispy bites, finger foods, and our acclaimed Must-Try Peri Peri Fried Chicken.',
  },
];
