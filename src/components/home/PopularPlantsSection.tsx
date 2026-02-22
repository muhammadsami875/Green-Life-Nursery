import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, ArrowRight } from "lucide-react";

import monsteraImg from "@/assets/plants/monstera.jpg";
import peaceLilyImg from "@/assets/plants/peace-lily.jpg";
import fiddleLeafImg from "@/assets/plants/fiddle-leaf.jpg";
import snakePlantImg from "@/assets/plants/snake-plant.jpg";
import rubberPlantImg from "@/assets/plants/rubber-plant.jpg";
import pothosImg from "@/assets/plants/pothos.jpg";
import zzPlantImg from "@/assets/plants/zz-plant.jpg";
import birdOfParadiseImg from "@/assets/plants/bird-of-paradise.jpg";

const plants = [
  { id: 1, name: "Monstera Deliciosa", category: "Indoor Plants", price: 2500, originalPrice: 3000, rating: 4.9, reviews: 128, image: monsteraImg, badge: "Bestseller", badgeColor: "bg-accent text-accent-foreground" },
  { id: 2, name: "Peace Lily", category: "Indoor Plants", price: 1800, originalPrice: null, rating: 4.8, reviews: 95, image: peaceLilyImg, badge: null, badgeColor: null },
  { id: 3, name: "Fiddle Leaf Fig", category: "Indoor Plants", price: 4500, originalPrice: 5500, rating: 4.7, reviews: 76, image: fiddleLeafImg, badge: "20% OFF", badgeColor: "bg-destructive text-destructive-foreground" },
  { id: 4, name: "Snake Plant", category: "Indoor Plants", price: 1200, originalPrice: null, rating: 4.9, reviews: 203, image: snakePlantImg, badge: "Easy Care", badgeColor: "bg-primary text-primary-foreground" },
  { id: 5, name: "Rubber Plant", category: "Indoor Plants", price: 2200, originalPrice: null, rating: 4.6, reviews: 64, image: rubberPlantImg, badge: null, badgeColor: null },
  { id: 6, name: "Pothos Golden", category: "Indoor Plants", price: 800, originalPrice: 1000, rating: 4.8, reviews: 156, image: pothosImg, badge: "Popular", badgeColor: "bg-secondary text-secondary-foreground" },
  { id: 7, name: "ZZ Plant", category: "Indoor Plants", price: 1500, originalPrice: null, rating: 4.7, reviews: 89, image: zzPlantImg, badge: null, badgeColor: null },
  { id: 8, name: "Bird of Paradise", category: "Indoor Plants", price: 5500, originalPrice: 6500, rating: 4.9, reviews: 42, image: birdOfParadiseImg, badge: "Premium", badgeColor: "bg-accent text-accent-foreground" },
];

const PopularPlantsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 tracking-widest uppercase">
              <span className="w-8 h-px bg-primary" />
              Popular Plants
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Trending This Season
            </h2>
          </div>
          <Link to="/shop">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-outline-nature flex items-center gap-2 self-start md:self-auto"
            >
              View All Plants
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plants.map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl overflow-hidden group border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="relative h-56 bg-muted/30 flex items-center justify-center overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {plant.badge && (
                    <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${plant.badgeColor}`}>
                      {plant.badge}
                    </span>
                  )}
                  
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-9 h-9 rounded-full bg-card/90 backdrop-blur-sm shadow-md flex items-center justify-center text-muted-foreground hover:text-destructive transition-colors"
                    >
                      <Heart size={18} />
                    </motion.button>
                  </div>

                  <Link to="/shop" className="absolute bottom-3 left-3 right-3">
                    <motion.button
                      className="w-full btn-nature py-2.5 text-sm flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0"
                    >
                      <ShoppingCart size={16} />
                      Add to Cart
                    </motion.button>
                  </Link>
                </div>

                <div className="p-5">
                  <p className="text-xs text-muted-foreground mb-1 tracking-wider uppercase">{plant.category}</p>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {plant.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star size={14} className="text-accent fill-accent" />
                      <span className="text-sm font-medium text-foreground">{plant.rating}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">({plant.reviews})</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-primary">
                      Rs. {plant.price.toLocaleString()}
                    </span>
                    {plant.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        Rs. {plant.originalPrice.toLocaleString()}
                      </span>
                    )}
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

export default PopularPlantsSection;
