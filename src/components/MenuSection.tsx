import React, { useState, useMemo } from 'react';
import { Search, X, Sparkles, Plus } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_CATEGORIES } from '../data/categories';
import { COFFEE_ADD_ONS } from '../data/addOns';

interface MenuSectionProps {
  items: MenuItem[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ items }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'All' | 'Veg' | 'Non-Veg'>('All');
  const [activeCoffeeItem, setActiveCoffeeItem] = useState<MenuItem | null>(null);

  // Filter items based on Category, Search query, and Dietary preference
  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category match
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Dietary match
      if (dietaryFilter === 'Veg' && !item.isVeg) {
        return false;
      }
      if (dietaryFilter === 'Non-Veg' && item.isVeg) {
        return false;
      }

      // Search query (case-insensitive across name, description, weight, badge, category)
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const nameMatch = item.name.toLowerCase().includes(query);
        const descMatch = item.description?.toLowerCase().includes(query) ?? false;
        const categoryMatch = item.category.toLowerCase().includes(query);
        const badgeMatch = item.badge?.toLowerCase().includes(query) ?? false;
        const weightMatch = item.weight?.toLowerCase().includes(query) ?? false;

        if (!nameMatch && !descMatch && !categoryMatch && !badgeMatch && !weightMatch) {
          return false;
        }
      }

      return true;
    });
  }, [items, selectedCategory, dietaryFilter, searchQuery]);

  // Group filtered items by category if 'All' is selected, or keep single category view
  const categorizedGroups = useMemo(() => {
    if (selectedCategory !== 'All') {
      return [{ category: selectedCategory, items: filteredItems }];
    }

    const groups: { category: MenuCategory; items: MenuItem[] }[] = [];
    MENU_CATEGORIES.forEach((cat) => {
      const catItems = filteredItems.filter((i) => i.category === cat.id);
      if (catItems.length > 0) {
        groups.push({ category: cat.id, items: catItems });
      }
    });
    return groups;
  }, [selectedCategory, filteredItems]);

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
    setDietaryFilter('All');
  };

  return (
    <section id="menu" className="py-24 bg-cream-100 border-b border-cream-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-medium text-coffee-600">
            <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
            <span className="uppercase tracking-wider">Artisanal Bakery & Cafe Menu</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-900 tracking-tight">
            Our Complete Menu
          </h2>

          <p className="font-sans text-base sm:text-lg text-espresso-800/80 leading-relaxed">
            Every dish crafted with authentic ingredients, exact proportions, and genuine love. Explore all 8 categories across our bakery, coffees, and savory kitchen.
          </p>
        </div>

        {/* Controls: Search Bar & Dietary Filter */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-cream-300 shadow-sm mb-8 space-y-4 max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-coffee-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any dish, flavor, or ingredient (e.g. Cheesecake, Peri Peri, Espresso)..."
                className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-cream-100/70 border border-cream-300 text-sm text-espresso-900 placeholder:text-coffee-400 focus:outline-none focus:ring-2 focus:ring-terracotta-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-coffee-400 hover:text-espresso-900 p-1"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Dietary Filter Segmented Control */}
            <div className="flex items-center space-x-1 bg-cream-100 p-1 rounded-xl border border-cream-300 w-full sm:w-auto shrink-0 justify-center">
              {(['All', 'Veg', 'Non-Veg'] as const).map((diet) => (
                <button
                  key={diet}
                  onClick={() => setDietaryFilter(diet)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    dietaryFilter === diet
                      ? 'bg-white text-espresso-900 shadow-sm'
                      : 'text-coffee-600 hover:text-espresso-900'
                  }`}
                >
                  {diet === 'Veg' && <span className="inline-block w-2 h-2 rounded-full bg-emerald-600 mr-1.5" />}
                  {diet === 'Non-Veg' && <span className="inline-block w-2 h-2 rounded-full bg-red-600 mr-1.5" />}
                  <span>{diet}</span>
                </button>
              ))}
            </div>

          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-coffee-600 pt-1 border-t border-cream-200">
            <span>
              Showing <strong className="text-espresso-900 font-bold">{filteredItems.length}</strong> of{' '}
              <strong className="text-espresso-900">{items.length}</strong> menu selections
            </span>

            {(searchQuery || dietaryFilter !== 'All' || selectedCategory !== 'All') && (
              <button
                onClick={handleResetFilters}
                className="text-terracotta-600 hover:text-terracotta-700 font-semibold underline"
              >
                Reset all filters
              </button>
            )}
          </div>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 scrollbar-none max-w-6xl mx-auto px-1">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
              selectedCategory === 'All'
                ? 'bg-espresso-900 text-cream-100 shadow-sm font-semibold'
                : 'bg-white text-espresso-800 hover:bg-cream-200/80 border border-cream-300'
            }`}
          >
            All Categories ({items.length})
          </button>

          {MENU_CATEGORIES.map((cat) => {
            const count = items.filter((i) => i.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-espresso-900 text-cream-100 shadow-sm font-semibold'
                    : 'bg-white text-espresso-800 hover:bg-cream-200/80 border border-cream-300'
                }`}
              >
                <span>{cat.name}</span>
                <span
                  className={`ml-1.5 text-[11px] px-1.5 py-0.5 rounded-full ${
                    selectedCategory === cat.id
                      ? 'bg-cream-100/20 text-cream-100'
                      : 'bg-cream-200 text-coffee-600'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="max-w-md mx-auto my-16 p-8 bg-white rounded-3xl border border-cream-300 text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 mx-auto rounded-full bg-cream-200 text-coffee-600 flex items-center justify-center">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl font-bold text-espresso-900">
              No Dishes Found
            </h3>
            <p className="text-xs sm:text-sm text-espresso-800/80 leading-relaxed">
              We couldn't find any dish matching "<span className="font-semibold text-espresso-900">{searchQuery}</span>" with the active filters.
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-espresso-900 hover:bg-espresso-800 text-cream-100 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Menu Listings: Bistro Row Scan View */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {categorizedGroups.map((group) => {
            const catInfo = MENU_CATEGORIES.find((c) => c.id === group.category);

            return (
              <div
                key={group.category}
                className="bg-white rounded-3xl border border-cream-300 p-6 sm:p-8 shadow-sm space-y-6 text-left"
              >
                {/* Category Header */}
                <div className="border-b border-cream-200 pb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-900">
                      {group.category}
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-coffee-600 bg-cream-100 px-3 py-1 rounded-full border border-cream-300">
                      {group.items.length} {group.items.length === 1 ? 'Dish' : 'Dishes'}
                    </span>
                  </div>
                  {catInfo && (
                    <p className="text-xs sm:text-sm text-espresso-800/75 mt-1.5 leading-relaxed">
                      {catInfo.description}
                    </p>
                  )}
                </div>

                {/* Items Row Scan List */}
                <div className="divide-y divide-cream-200">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className="py-4 sm:py-5 first:pt-2 last:pb-2 group hover:bg-cream-50/60 -mx-4 sm:-mx-6 px-4 sm:px-6 rounded-xl transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4">
                        
                        {/* Left: Dish Name, Badges, Weight, Description */}
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            {/* Veg / Non-Veg Indicator */}
                            {item.isVeg !== undefined && (
                              <span
                                className={`inline-flex items-center justify-center w-4 h-4 border rounded-sm shrink-0 ${
                                  item.isVeg ? 'border-emerald-600' : 'border-red-600'
                                }`}
                                title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                              >
                                <span
                                  className={`w-2 h-2 rounded-full ${
                                    item.isVeg ? 'bg-emerald-600' : 'bg-red-600'
                                  }`}
                                />
                              </span>
                            )}

                            {/* Dish Name */}
                            <span className="font-serif text-base sm:text-lg font-bold text-espresso-900 group-hover:text-terracotta-600 transition-colors">
                              {item.name}
                            </span>

                            {/* Weight badge (e.g. 450 g Fruit & Nuts Cake) */}
                            {item.weight && (
                              <span className="px-2 py-0.5 rounded bg-cream-200 text-espresso-900 text-[11px] font-semibold">
                                {item.weight}
                              </span>
                            )}

                            {/* Must Try Badge (especially Peri Peri Fried Chicken) */}
                            {item.badge && (
                              <span className="px-2.5 py-0.5 rounded-full bg-terracotta-500 text-white text-[11px] font-bold tracking-wide uppercase shadow-xs">
                                ★ {item.badge}
                              </span>
                            )}
                          </div>

                          {/* Description */}
                          {item.description && (
                            <p className="text-xs sm:text-sm text-espresso-800/80 leading-relaxed max-w-3xl">
                              {item.description}
                            </p>
                          )}

                          {/* Coffee Add-On Prompt for Hot Coffee & Beverages */}
                          {item.category === 'Hot Coffee & Beverages' && (
                            <div className="pt-1.5 flex items-center space-x-2">
                              <button
                                onClick={() => setActiveCoffeeItem(item)}
                                className="inline-flex items-center space-x-1 text-[11px] font-medium text-terracotta-600 hover:text-terracotta-700 bg-terracotta-50 px-2 py-0.5 rounded border border-terracotta-200"
                              >
                                <Plus className="w-3 h-3" />
                                <span>Customize with ₹50 Add-ons (Hazelnut, Caramel, Oat milk)</span>
                              </button>
                            </div>
                          )}
                        </div>

                        {/* Right: Price */}
                        <div className="text-right shrink-0">
                          <span className="font-serif text-lg sm:text-xl font-bold text-espresso-950">
                            ₹{item.price}
                          </span>
                        </div>

                      </div>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Coffee Add-on Modal */}
      {activeCoffeeItem && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-espresso-950/80 backdrop-blur-sm p-4 animate-fadeIn"
        >
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-cream-300 shadow-2xl text-left space-y-4">
            <div className="flex items-center justify-between border-b border-cream-200 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600">
                  Coffee Add-ons
                </span>
                <h3 className="font-serif text-lg font-bold text-espresso-900">
                  Customize {activeCoffeeItem.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveCoffeeItem(null)}
                className="p-1 rounded-lg text-espresso-700 hover:bg-cream-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-espresso-800/80">
              All add-ons are prepared fresh at the beverage counter for an exact ₹50 enhancement.
            </p>

            <div className="divide-y divide-cream-100">
              {COFFEE_ADD_ONS.map((addon) => (
                <div key={addon.name} className="py-2.5 flex items-center justify-between text-xs">
                  <span className="font-medium text-espresso-900">{addon.name}</span>
                  <span className="font-serif font-bold text-terracotta-600">+₹{addon.price}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveCoffeeItem(null)}
                className="w-full py-2.5 bg-espresso-900 text-cream-100 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-espresso-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
