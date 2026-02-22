import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingCart, Plus, Minus, Trash2, ArrowRight } from "lucide-react";
import { Plant } from "@/data/plants";

export type CartItem = { plant: Plant; quantity: number };

interface CartSidebarProps {
  show: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQty: (plantId: number, delta: number) => void;
  onRemove: (plantId: number) => void;
  onCheckout: () => void;
}

const CartSidebar = ({ show, onClose, cart, onUpdateQty, onRemove, onCheckout }: CartSidebarProps) => {
  const cartTotal = cart.reduce((sum, item) => sum + item.plant.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-card shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="font-serif text-2xl font-bold text-foreground">Your Cart ({cartCount})</h3>
              <button onClick={onClose} className="p-2 rounded-xl hover:bg-muted transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingCart size={48} className="mx-auto text-muted-foreground/30 mb-4" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.plant.id} className="flex gap-4 bg-muted/30 rounded-xl p-3">
                    <img src={item.plant.image} alt={item.plant.name} className="w-20 h-20 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground text-sm truncate">{item.plant.name}</h4>
                      <p className="text-primary font-bold text-sm">Rs. {item.plant.price.toLocaleString()}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button onClick={() => onUpdateQty(item.plant.id, -1)} className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
                          <Minus size={14} />
                        </button>
                        <span className="text-sm font-semibold w-6 text-center">{item.quantity}</span>
                        <button onClick={() => onUpdateQty(item.plant.id, 1)} className="w-7 h-7 rounded-lg bg-muted flex items-center justify-center hover:bg-primary/10 transition-colors">
                          <Plus size={14} />
                        </button>
                        <button onClick={() => onRemove(item.plant.id)} className="ml-auto p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">Rs. {cartTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Delivery</span>
                    <span className="font-medium text-primary">{cartTotal >= 3000 ? "Free" : "Rs. 250"}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">Rs. {(cartTotal + (cartTotal >= 3000 ? 0 : 250)).toLocaleString()}</span>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onCheckout}
                  className="w-full btn-nature py-4 text-lg flex items-center justify-center gap-3"
                >
                  Order via WhatsApp
                  <ArrowRight size={20} />
                </motion.button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CartSidebar;
