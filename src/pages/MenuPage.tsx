import React from 'react';
import { MenuSection } from '../components/MenuSection';
import { MENU_ITEMS } from '../data/menu';

export const MenuPage: React.FC = () => {
  return (
    <div className="pt-24 sm:pt-28">
      <MenuSection items={MENU_ITEMS} showHeader={true} />
    </div>
  );
};
