import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart, Phone, MapPin, Search } from "lucide-react";
import logo from "@/assets/green-life-logo.png";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Export Plants", path: "/export-plants" },
  { name: "Landscaping", path: "/landscaping" },
  { name: "Before & After", path: "/before-after" },
  { name: "Arrangements", path: "/arrangements" },
  { name: "Blogs", path: "/blogs" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

interface NavbarProps {
  cartCount?: number;
  onCartClick?: () => void;
}

const Navbar = ({ cartCount = 0, onCartClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2.5 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-8">
            <a href="tel:+923470612566" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone size={14} />
              <span>+92 347 0612566</span>
            </a>
            <a 
              href="https://maps.app.goo.gl/QXD2aZrbQ3tG6cbM9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <MapPin size={14} />
              <span>Pattoki, Pakistan</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-card/98 backdrop-blur-xl shadow-[0_4px_30px_-4px_rgba(0,0,0,0.1)] border-b border-border/50" 
            : "bg-card backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Circular */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 shadow-sm"
              >
                <img 
                  src={logo}
                  alt="Green Life Nursery"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    location.pathname === item.path
                      ? "text-primary bg-primary/5"
                      : "text-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
              >
                <Search size={20} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onCartClick}
                className="relative p-2.5 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all"
              >
                <ShoppingCart size={20} />
                <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-accent text-accent-foreground text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              </motion.button>

              <Link to="/shop">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="hidden sm:block btn-nature text-sm px-5 py-2.5 ml-2"
                >
                  Shop Now
                </motion.button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2.5 text-foreground hover:text-primary hover:bg-primary/5 rounded-xl transition-all ml-1"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-card border-t border-border/50 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all ${
                        location.pathname === item.path
                          ? "bg-primary/10 text-primary"
                          : "text-foreground hover:bg-muted"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.04 }}
                  className="pt-3"
                >
                  <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="w-full btn-nature">
                      Shop Now
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
