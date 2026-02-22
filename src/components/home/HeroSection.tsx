import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Shield } from "lucide-react";
import heroImage from "@/assets/hero-nursery.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful green nursery with various plants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary-foreground px-5 py-2.5 rounded-full mb-8"
          >
            <Leaf size={16} />
            <span className="text-sm font-medium tracking-wider uppercase">Premium Plant Collection</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-6"
          >
            Your Garden,{" "}
            <span className="text-accent">Our</span>
            <br />
            Passion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-white/70 max-w-lg mb-10"
          >
            Discover our handpicked collection of indoor & outdoor plants, expert 
            landscaping services, and transform your space into a green paradise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-14"
          >
            <Link to="/shop">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-nature flex items-center gap-2 text-lg px-8 py-4"
              >
                Explore Plants
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/landscaping">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl font-medium hover:bg-white/20 transition-all flex items-center gap-2 text-lg"
              >
                View Landscaping
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                <Shield size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Plant Guarantee</p>
                <p className="text-xs text-white/50">7-day freshness promise</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
