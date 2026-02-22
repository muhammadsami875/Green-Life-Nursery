import { motion, AnimatePresence } from "framer-motion";
import { X, Star, Plus, Minus, ShoppingCart, ArrowRight } from "lucide-react";
import { Plant } from "@/data/plants";

interface OrderModalProps {
  plant: Plant | null;
  quantity: number;
  setQuantity: (q: number) => void;
  onClose: () => void;
  onAddToCart: (plant: Plant, qty: number) => void;
  onOrder: (plant: Plant) => void;
}

const OrderModal = ({ plant, quantity, setQuantity, onClose, onAddToCart, onOrder }: OrderModalProps) => {
  return (
    <AnimatePresence>
      {plant && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
          >
            <div className="relative h-64">
              <img src={plant.image} alt={plant.name} className="w-full h-full object-cover" />
              <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="p-6">
              <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">{plant.category}</p>
              <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{plant.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plant.description}</p>
              <div className="flex items-center gap-2 mb-6">
                <Star size={16} className="text-accent fill-accent" />
                <span className="font-medium">{plant.rating}</span>
                <span className="text-sm text-muted-foreground">({plant.reviews} reviews)</span>
              </div>

              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-2xl font-bold text-primary">Rs. {plant.price.toLocaleString()}</span>
                  {plant.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through ml-2">Rs. {plant.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 bg-muted rounded-xl px-2">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2 hover:text-primary transition-colors"><Minus size={16} /></button>
                  <span className="font-semibold w-8 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-primary transition-colors"><Plus size={16} /></button>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-4 mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">Rs. {(plant.price * quantity).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span className="font-medium text-primary">{plant.price * quantity >= 3000 ? "Free" : "Rs. 250"}</span>
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => { onAddToCart(plant, quantity); onClose(); }}
                  className="flex-1 btn-outline-nature py-4 text-sm flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onOrder(plant)}
                  className="flex-1 btn-nature py-4 text-sm flex items-center justify-center gap-2"
                >
                  Order Now
                  <ArrowRight size={18} />
                </motion.button>
              </div>
              <p className="text-xs text-muted-foreground text-center mt-3">Order Now redirects to WhatsApp to confirm your order</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderModal;
