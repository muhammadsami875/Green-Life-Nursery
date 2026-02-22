import { motion } from "framer-motion";
import floweringImg from "@/assets/categories/flowering.jpg";
import fruitImg from "@/assets/categories/fruit.jpg";
import indoorImg from "@/assets/categories/indoor.jpg";
import outdoorImg from "@/assets/categories/outdoor.jpg";
import succulentsImg from "@/assets/categories/succulents.jpg";
import herbsImg from "@/assets/categories/herbs.jpg";

const categoryData = [
  { name: "Indoor Plants", image: indoorImg, count: 12, description: "Perfect for your living spaces" },
  { name: "Syngoniums", image: floweringImg, count: 5, description: "Arrow-shaped beauties" },
  { name: "Snake Plants", image: herbsImg, count: 6, description: "Tough & air-purifying" },
  { name: "Succulents", image: succulentsImg, count: 8, description: "Low-maintenance charmers" },
  { name: "Fruit Plants", image: fruitImg, count: 9, description: "Grow your own fruits" },
  { name: "Outdoor Plants", image: outdoorImg, count: 5, description: "Statement garden plants" },
];

interface CategoryCardsProps {
  onSelectCategory: (category: string) => void;
}

const CategoryCards = ({ onSelectCategory }: CategoryCardsProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Select a category to explore our plant collection
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryData.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              onClick={() => onSelectCategory(cat.name)}
              className="group cursor-pointer relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <h3 className="font-serif text-xl font-bold mb-1">{cat.name}</h3>
                <p className="text-white/70 text-sm">{cat.description}</p>
                <span className="inline-block mt-2 text-xs font-semibold bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  {cat.count} Plants
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All button */}
        <div className="text-center mt-10">
          <button
            onClick={() => onSelectCategory("All")}
            className="px-8 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            View All Plants
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
