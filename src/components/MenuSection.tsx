import React, { useState, useMemo } from 'react';
import { Search, X, Sparkles, Plus, LayoutGrid, List, Coffee, Flame } from 'lucide-react';
import { MenuItem, MenuCategory } from '../types';
import { MENU_CATEGORIES } from '../data/categories';
import { COFFEE_ADD_ONS } from '../data/addOns';

interface MenuSectionProps {
  items: MenuItem[];
  showHeader?: boolean;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ items, showHeader = true }) => {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState<'All' | 'Veg' | 'Non-Veg'>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeCoffeeItem, setActiveCoffeeItem] = useState<MenuItem | null>(null);
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, boolean>>({});

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

  const handleImageError = (id: string) => {
    setImgErrorMap((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="menu" className="py-12 sm:py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {showHeader && (
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cream-200 border border-cream-300 text-xs font-semibold text-coffee-600">
              <Sparkles className="w-3.5 h-3.5 text-terracotta-500" />
              <span className="uppercase tracking-wider">Artisanal Bakery, Bistro & Specialty Coffee</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso-900 tracking-tight">
              Our Complete Menu
            </h1>

            <p className="font-sans text-base sm:text-lg text-espresso-800/80 leading-relaxed">
              Every dish crafted with genuine passion, authentic ingredients, and exquisite presentation. Explore all 72 creations across our 8 artisanal categories.
            </p>
          </div>
        )}

        {/* Search, Dietary Filters & View Toggle Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-cream-300 shadow-sm mb-8 space-y-4 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-coffee-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search any dish (e.g. Cheesecake, Peri Peri Chicken, Cortado, Fruit Cake)..."
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

            {/* View Mode Toggle: Grid with Photos vs List */}
            <div className="flex items-center space-x-1 bg-cream-100 p-1 rounded-xl border border-cream-300 shrink-0 self-end sm:self-center">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  viewMode === 'grid'
                    ? 'bg-white text-espresso-900 shadow-sm'
                    : 'text-coffee-600 hover:text-espresso-900'
                }`}
                title="Visual Card Grid with Photos"
              >
                <LayoutGrid className="w-4 h-4" />
                <span className="hidden sm:inline">Photo Cards</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg text-xs font-semibold flex items-center space-x-1.5 transition-all ${
                  viewMode === 'list'
                    ? 'bg-white text-espresso-900 shadow-sm'
                    : 'text-coffee-600 hover:text-espresso-900'
                }`}
                title="Bistro Compact List"
              >
                <List className="w-4 h-4" />
                <span className="hidden sm:inline">List View</span>
              </button>
            </div>

          </div>

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-coffee-600 pt-1 border-t border-cream-200">
            <span>
              Showing <strong className="text-espresso-900 font-bold">{filteredItems.length}</strong> of{' '}
              <strong className="text-espresso-900">{items.length}</strong> creations
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

        {/* Menu Listings */}
        <div className="space-y-14 max-w-6xl mx-auto">
          {categorizedGroups.map((group) => {
            const catInfo = MENU_CATEGORIES.find((c) => c.id === group.category);

            return (
              <div key={group.category} className="space-y-6 text-left">
                {/* Category Header */}
                <div className="border-b border-cream-300/80 pb-3 flex items-end justify-between flex-wrap gap-2">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-espresso-900">
                      {group.category}
                    </h2>
                    {catInfo && (
                      <p className="text-xs sm:text-sm text-espresso-800/75 mt-1 leading-relaxed">
                        {catInfo.description}
                      </p>
                    )}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-coffee-600 bg-white px-3 py-1 rounded-full border border-cream-300 shadow-xs">
                    {group.items.length} {group.items.length === 1 ? 'Creation' : 'Creations'}
                  </span>
                </div>

                {/* VIEW MODE 1: PHOTO CARD GRID */}
                {viewMode === 'grid' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {group.items.map((item) => (
                      <div
                        key={item.id}
                        className="bg-white rounded-2xl border border-cream-300 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group hover:-translate-y-1"
                      >
                        {/* Food Image Container with Badges */}
                        <div className="relative aspect-[4/3] bg-cream-200 overflow-hidden">
                          {item.image && !imgErrorMap[item.id] ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              onError={() => handleImageError(item.id)}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-cream-200 text-coffee-500 p-4 text-center">
                              <Coffee className="w-8 h-8 mb-1 opacity-60" />
                              <span className="text-xs font-medium text-coffee-600">{item.name}</span>
                            </div>
                          )}

                          {/* Gradient overlay on image bottom */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                          {/* Top Badges: Veg/Non-Veg + Must Try */}
                          <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 flex-wrap">
                            {/* Veg / Non-veg dot indicator */}
                            {item.isVeg !== undefined && (
                              <span
                                className={`inline-flex items-center justify-center w-5 h-5 bg-white/95 rounded shadow-xs backdrop-blur-xs ${
                                  item.isVeg ? 'border border-emerald-600' : 'border border-red-600'
                                }`}
                                title={item.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
                              >
                                <span
                                  className={`w-2 h-2 rounded-full ${
                                    item.isVeg ? 'bg-emerald-600' : 'bg-red-600'
                                  }`}
                                />
                              </span>
                            )}

                            {/* Must Try Badge (e.g. Peri Peri Fried Chicken) */}
                            {item.badge && (
                              <span className="px-2 py-0.5 rounded-full bg-terracotta-500 text-white text-[10px] font-bold tracking-wide uppercase shadow-sm flex items-center space-x-1">
                                <Flame className="w-3 h-3" />
                                <span>{item.badge}</span>
                              </span>
                            )}
                          </div>

                          {/* Weight badge (e.g. 450 g Fruit & Nuts Cake) */}
                          {item.weight && (
                            <div className="absolute top-2.5 right-2.5">
                              <span className="px-2 py-0.5 rounded-full bg-black/75 text-white text-[10px] font-semibold backdrop-blur-xs shadow-xs">
                                {item.weight}
                              </span>
                            </div>
                          )}

                          {/* Price Tag Overlay */}
                          <div className="absolute bottom-2.5 right-2.5">
                            <span className="px-2.5 py-1 rounded-lg bg-espresso-950/90 text-cream-100 font-serif font-bold text-sm shadow-md backdrop-blur-xs border border-cream-200/20">
                              ₹{item.price}
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                          <div className="space-y-1.5">
                            <h3 className="font-serif text-base sm:text-lg font-bold text-espresso-950 group-hover:text-terracotta-600 transition-colors leading-snug">
                              {item.name}
                            </h3>

                            {item.description && (
                              <p className="text-xs text-espresso-800/75 leading-relaxed line-clamp-2">
                                {item.description}
                              </p>
                            )}
                          </div>

                          {/* Action footer */}
                          <div className="pt-2 border-t border-cream-200 flex items-center justify-between">
                            <span className="text-[11px] font-medium text-coffee-600 uppercase tracking-wider">
                              {item.category.split('&')[0]}
                            </span>

                            {item.category === 'Hot Coffee & Beverages' ? (
                              <button
                                onClick={() => setActiveCoffeeItem(item)}
                                className="text-[11px] font-semibold text-terracotta-600 hover:text-terracotta-700 bg-terracotta-50 hover:bg-terracotta-100 px-2 py-1 rounded transition-colors flex items-center space-x-1"
                              >
                                <Plus className="w-3 h-3" />
                                <span>Add-ons (+₹50)</span>
                              </button>
                            ) : (
                              <span className="font-serif font-bold text-sm text-espresso-900">
                                ₹{item.price}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* VIEW MODE 2: BISTRO LIST SCAN VIEW (with photo thumbnails) */}
                {viewMode === 'list' && (
                  <div className="bg-white rounded-3xl border border-cream-300 p-4 sm:p-6 shadow-sm divide-y divide-cream-200">
                    {group.items.map((item) => (
                      <div
                        key={item.id}
                        className="py-4 first:pt-1 last:pb-1 flex items-center gap-4 group hover:bg-cream-50/70 -mx-2 px-2 rounded-xl transition-colors"
                      >
                        {/* Thumbnail Image */}
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-cream-200 shrink-0 border border-cream-300 relative">
                          {item.image && !imgErrorMap[item.id] ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              onError={() => handleImageError(item.id)}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-coffee-500">
                              <Coffee className="w-6 h-6 opacity-50" />
                            </div>
                          )}
                        </div>

                        {/* Middle Info */}
                        <div className="flex-1 space-y-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            {/* Veg / Non-Veg Indicator */}
                            {item.isVeg !== undefined && (
                              <span
                                className={`inline-flex items-center justify-center w-3.5 h-3.5 border rounded-xs shrink-0 ${
                                  item.isVeg ? 'border-emerald-600' : 'border-red-600'
                                }`}
                                title={item.isVeg ? 'Vegetarian' : 'Non-Vegetarian'}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full ${
                                    item.isVeg ? 'bg-emerald-600' : 'bg-red-600'
                                  }`}
                                />
                              </span>
                            )}

                            <span className="font-serif text-base sm:text-lg font-bold text-espresso-900 group-hover:text-terracotta-600 transition-colors truncate">
                              {item.name}
                            </span>

                            {item.weight && (
                              <span className="px-2 py-0.5 rounded bg-cream-200 text-espresso-900 text-[10px] font-semibold">
                                {item.weight}
                              </span>
                            )}

                            {item.badge && (
                              <span className="px-2 py-0.5 rounded-full bg-terracotta-500 text-white text-[10px] font-bold tracking-wide uppercase">
                                ★ {item.badge}
                              </span>
                            )}
                          </div>

                          {item.description && (
                            <p className="text-xs sm:text-sm text-espresso-800/80 leading-relaxed line-clamp-1 sm:line-clamp-2">
                              {item.description}
                            </p>
                          )}

                          {item.category === 'Hot Coffee & Beverages' && (
                            <button
                              onClick={() => setActiveCoffeeItem(item)}
                              className="text-[11px] font-medium text-terracotta-600 hover:text-terracotta-700 underline inline-flex items-center space-x-1"
                            >
                              <span>Customize with ₹50 Add-ons</span>
                            </button>
                          )}
                        </div>

                        {/* Price */}
                        <div className="text-right shrink-0">
                          <span className="font-serif text-base sm:text-lg font-bold text-espresso-950">
                            ₹{item.price}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Coffee Add-On Modal */}
        {activeCoffeeItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={() => setActiveCoffeeItem(null)}
          >
            <div
              className="bg-white rounded-3xl border border-cream-300 shadow-2xl max-w-lg w-full p-6 sm:p-8 space-y-6 text-left"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between border-b border-cream-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-terracotta-600">
                    Barista Customization
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-espresso-900 mt-0.5">
                    {activeCoffeeItem.name}
                  </h3>
                  <span className="text-sm font-semibold text-espresso-800">
                    Base: ₹{activeCoffeeItem.price}
                  </span>
                </div>

                <button
                  onClick={() => setActiveCoffeeItem(null)}
                  className="p-1 rounded-full text-coffee-400 hover:text-espresso-900 hover:bg-cream-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-espresso-800/80">
                  Enhance your cup with our curated house syrups and barista alternatives (+₹50 each):
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {COFFEE_ADD_ONS.map((addon) => (
                    <div
                      key={addon.name}
                      className="p-3 rounded-xl border border-cream-300 bg-cream-50 flex items-center justify-between"
                    >
                      <span className="text-xs font-medium text-espresso-900">
                        {addon.name}
                      </span>
                      <span className="text-xs font-bold text-terracotta-600 bg-white px-2 py-0.5 rounded border border-cream-200">
                        +₹{addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveCoffeeItem(null)}
                  className="px-6 py-2.5 bg-espresso-900 hover:bg-espresso-800 text-cream-100 rounded-full text-xs font-semibold tracking-wide uppercase transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
