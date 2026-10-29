export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number;
  description?: string;
  weight?: string;
  addOns?: MenuAddOn[];
  badge?: string;
  isVeg?: boolean;
  image?: string;
}

export interface MenuAddOn {
  name: string;
  price: number;
}

export type MenuCategory =
  | 'Pastries'
  | 'Cheesecakes'
  | 'Puffs & Bakery Snacks'
  | 'Doughnuts'
  | 'Specialty Cakes & Desserts'
  | 'Celebration Cakes'
  | 'Hot Coffee & Beverages'
  | 'Starters & Appetizers';

export type GalleryCategory =
  | 'All Photos'
  | 'Interior'
  | 'Coffee & Drinks'
  | 'Cakes & Desserts'
  | 'Food'
  | 'Ambience';

export interface GalleryImage {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All Photos'>;
  filename: string;
  src: string;
  sourceUrl?: string;
  aspectRatio: 'portrait' | 'landscape' | 'square' | 'wide';
  caption: string;
  attribution: string;
  permissionStatus: 'Verified Authorized' | 'Direct Establishment Asset' | 'Public Listing Reference' | 'Editorial Reference';
}
