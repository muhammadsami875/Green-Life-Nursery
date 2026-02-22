import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopFilters from "@/components/shop/ShopFilters";
import PlantCard from "@/components/shop/PlantCard";
import CartSidebar, { CartItem } from "@/components/shop/CartSidebar";
import OrderModal from "@/components/shop/OrderModal";
import CategoryCards from "@/components/shop/CategoryCards";
import { allPlants, Plant } from "@/data/plants";
import { toast } from "sonner";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const initialCategory = searchParams.get("category");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(initialCategory);
  const [sortBy, setSortBy] = useState("Popular");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState<Plant | null>(null);
  const [quantity, setQuantity] = useState(1);

  const maxPrice = useMemo(() => Math.max(...allPlants.map((p) => p.price)), []);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, maxPrice]);

  const filtered = useMemo(() => {
    return allPlants
      .filter((p) => !selectedCategory || selectedCategory === "All" || p.category === selectedCategory)
      .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
      .sort((a, b) => {
        if (sortBy === "Price: Low to High") return a.price - b.price;
        if (sortBy === "Price: High to Low") return b.price - a.price;
        if (sortBy === "Rating") return b.rating - a.rating;
        return b.reviews - a.reviews;
      });
  }, [search, selectedCategory, sortBy, priceRange]);

  const addToCart = (plant: Plant, qty: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.plant.id === plant.id);
      if (existing) {
        return prev.map((item) =>
          item.plant.id === plant.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { plant, quantity: qty }];
    });
    toast.success(`${plant.name} added to cart!`);
  };

  const updateCartQty = (plantId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.plant.id === plantId ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (plantId: number) => {
    setCart((prev) => prev.filter((item) => item.plant.id !== plantId));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    const cartTotal = cart.reduce((sum, item) => sum + item.plant.price * item.quantity, 0);
    const items = cart.map((item) => `🌿 ${item.plant.name} x${item.quantity} = Rs. ${(item.plant.price * item.quantity).toLocaleString()}`).join("\n");
    const message = `Hi! I'd like to order:\n\n${items}\n\n💵 Total: Rs. ${cartTotal.toLocaleString()}\n\nPlease confirm availability and delivery details.`;
    window.open(`https://wa.me/923470612566?text=${encodeURIComponent(message)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
    setCart([]);
    setShowCart(false);
  };

  const handleOrder = (plant: Plant) => {
    const message = `Hi! I'd like to order:\n\n🌿 *${plant.name}*\n💰 Price: Rs. ${plant.price.toLocaleString()}\n📦 Quantity: ${quantity}\n💵 Total: Rs. ${(plant.price * quantity).toLocaleString()}\n\nPlease confirm availability and delivery details.`;
    window.open(`https://wa.me/923470612566?text=${encodeURIComponent(message)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
    setSelectedPlant(null);
    setQuantity(1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar cartCount={cartCount} onCartClick={() => setShowCart(true)} />
      <main>
        {/* Hero Banner */}
        <section className="bg-forest py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl font-bold text-forest-foreground mb-4">
              Shop Plants
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-forest-foreground/70 text-lg max-w-xl mx-auto">
              Browse our collection of premium indoor & outdoor plants delivered fresh to your doorstep.
            </motion.p>
          </div>
        </section>

        {selectedCategory === null ? (
          <CategoryCards onSelectCategory={(cat) => setSelectedCategory(cat)} />
        ) : (
          <>
            {/* Back to Categories */}
            <div className="container mx-auto px-4 pt-6">
              <button
                onClick={() => { setSelectedCategory(null); setSearch(""); setSortBy("Popular"); setPriceRange([0, maxPrice]); }}
                className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                <ArrowLeft size={16} />
                Back to Categories
              </button>
            </div>

            {/* Filters */}
            <ShopFilters
              search={search}
              setSearch={setSearch}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              sortBy={sortBy}
              setSortBy={setSortBy}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              maxPrice={maxPrice}
              totalResults={filtered.length}
            />

            {/* Products Grid */}
            <section className="py-12">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filtered.map((plant, index) => (
                    <PlantCard
                      key={plant.id}
                      plant={plant}
                      index={index}
                      onAddToCart={addToCart}
                      onOrderNow={(p) => { setSelectedPlant(p); setQuantity(1); }}
                    />
                  ))}
                </div>
                {filtered.length === 0 && (
                  <div className="text-center py-20">
                    <p className="text-muted-foreground text-lg">No plants found matching your filters.</p>
                  </div>
                )}
              </div>
            </section>
          </>
        )}
      </main>

      <CartSidebar
        show={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        onUpdateQty={updateCartQty}
        onRemove={removeFromCart}
        onCheckout={handleCheckoutWhatsApp}
      />

      <OrderModal
        plant={selectedPlant}
        quantity={quantity}
        setQuantity={setQuantity}
        onClose={() => { setSelectedPlant(null); setQuantity(1); }}
        onAddToCart={addToCart}
        onOrder={handleOrder}
      />

      <Footer />
    </div>
  );
};

export default Shop;
