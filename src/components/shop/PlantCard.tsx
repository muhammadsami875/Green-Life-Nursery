import { motion } from "framer-motion";
import { Star, Heart, ShoppingCart } from "lucide-react";
import { Plant } from "@/data/plants";

interface PlantCardProps {
  plant: Plant;
  index: number;
  onAddToCart: (plant: Plant) => void;
  onOrderNow: (plant: Plant) => void;
}

const PlantCard = ({ plant, index, onAddToCart, onOrderNow }: PlantCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03 }}
    >
      <motion.div
        whileHover={{ y: -6 }}
        className="bg-card rounded-2xl overflow-hidden group border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-[var(--shadow-elevated)]"
      >
        <div className="relative h-56 bg-muted/30 overflow-hidden">
          <img
            src={plant.image}
            alt={plant.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {plant.badge && (
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-accent text-accent-foreground">
              {plant.badge}
            </span>
          )}
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm shadow-md flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors opacity-0 group-hover:opacity-100"
          >
            <Heart size={18} />
          </motion.button>
        </div>
        <div className="p-5">
          <p className="text-xs text-muted-foreground mb-1 tracking-wider uppercase">{plant.category}</p>
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {plant.name}
          </h3>
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{plant.description}</p>
          <div className="flex items-center gap-2 mb-3">
            <Star size={14} className="text-accent fill-accent" />
            <span className="text-sm font-medium">{plant.rating}</span>
            <span className="text-xs text-muted-foreground">({plant.reviews})</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-primary">Rs. {plant.price.toLocaleString()}</span>
              {plant.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  Rs. {plant.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-2 mt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAddToCart(plant)}
              className="flex-1 btn-outline-nature py-2.5 text-sm flex items-center justify-center gap-2"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOrderNow(plant)}
              className="flex-1 btn-nature py-2.5 text-sm flex items-center justify-center gap-2"
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PlantCard;
