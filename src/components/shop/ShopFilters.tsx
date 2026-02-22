import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { categories, sortOptions } from "@/data/plants";
import { Slider } from "@/components/ui/slider";

interface ShopFiltersProps {
  search: string;
  setSearch: (s: string) => void;
  selectedCategory: string;
  setSelectedCategory: (c: string) => void;
  sortBy: string;
  setSortBy: (s: string) => void;
  priceRange: [number, number];
  setPriceRange: (r: [number, number]) => void;
  maxPrice: number;
  totalResults: number;
}

const ShopFilters = ({
  search, setSearch,
  selectedCategory, setSelectedCategory,
  sortBy, setSortBy,
  priceRange, setPriceRange,
  maxPrice, totalResults,
}: ShopFiltersProps) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <section className="py-6 border-b border-border">
      <div className="container mx-auto px-4 space-y-4">
        {/* Search + Filter Toggle */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search plants..."
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all ${
              showFilters
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
            }`}
          >
            <SlidersHorizontal size={16} />
            Filters & Sort
          </button>
        </div>

        {/* Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Expanded Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="bg-card rounded-2xl border border-border p-5 space-y-5">
                {/* Sort Options */}
                <div>
                  <p className="text-sm font-medium text-foreground mb-3">Sort By</p>
                  <div className="flex flex-wrap gap-2">
                    {sortOptions.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => setSortBy(opt)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          sortBy === opt
                            ? "bg-accent text-accent-foreground shadow-sm"
                            : "bg-muted text-muted-foreground hover:bg-accent/20"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-foreground">Price Range</p>
                    <span className="text-sm text-primary font-semibold">
                      Rs. {priceRange[0].toLocaleString()} — Rs. {priceRange[1].toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    min={0}
                    max={maxPrice}
                    step={100}
                    value={priceRange}
                    onValueChange={(v) => setPriceRange(v as [number, number])}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Rs. 0</span>
                    <span>Rs. {maxPrice.toLocaleString()}</span>
                  </div>
                </div>

                {/* Active Filters Summary */}
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">{totalResults}</span> plants found
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSortBy("Popular");
                      setPriceRange([0, maxPrice]);
                      setSearch("");
                    }}
                    className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors"
                  >
                    <X size={14} />
                    Clear All
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results count when filters hidden */}
        {!showFilters && (
          <p className="text-sm text-muted-foreground">{totalResults} plants found</p>
        )}
      </div>
    </section>
  );
};

export default ShopFilters;
