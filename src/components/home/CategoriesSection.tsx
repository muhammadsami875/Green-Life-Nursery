import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import indoorImg from "@/assets/categories/indoor.jpg";
import outdoorImg from "@/assets/categories/outdoor.jpg";
import floweringImg from "@/assets/categories/flowering.jpg";
import succulentsImg from "@/assets/categories/succulents.jpg";
import fruitImg from "@/assets/categories/fruit.jpg";
import herbsImg from "@/assets/categories/herbs.jpg";

const categories = [
  { id: 1, name: "Indoor Plants", shopCategory: "Indoor Plants", description: "Perfect for homes & offices", count: "50+ varieties", image: indoorImg },
  { id: 2, name: "Outdoor Plants", shopCategory: "Outdoor Plants", description: "Garden & landscape ready", count: "80+ varieties", image: outdoorImg },
  { id: 3, name: "Flowering Plants", shopCategory: "Syngoniums", description: "Add color to your space", count: "40+ varieties", image: floweringImg },
  { id: 4, name: "Succulents", shopCategory: "Succulents", description: "Low maintenance beauties", count: "30+ varieties", image: succulentsImg },
  { id: 5, name: "Fruit Plants", shopCategory: "Fruit Plants", description: "Grow your own fruits", count: "25+ varieties", image: fruitImg },
  { id: 6, name: "Snake Plants", shopCategory: "Snake Plants", description: "Tough & air-purifying", count: "35+ varieties", image: herbsImg },
];

const CategoriesSection = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (shopCategory: string) => {
    navigate(`/shop?category=${encodeURIComponent(shopCategory)}`);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 tracking-widest uppercase">
            <span className="w-8 h-px bg-primary" />
            Browse by Category
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Find Your Perfect Plant
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our carefully curated categories to find plants that match your space and lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                onClick={() => handleCategoryClick(category.shopCategory)}
                className="group relative rounded-2xl overflow-hidden cursor-pointer h-64"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-xs font-medium text-accent tracking-wider uppercase">
                    {category.count}
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-forest-foreground mt-1">
                    {category.name}
                  </h3>
                  <p className="text-forest-foreground/70 text-sm mt-1">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent font-medium text-sm mt-3 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <span>Explore</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
