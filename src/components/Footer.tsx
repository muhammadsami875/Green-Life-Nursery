import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/green-life-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "Shop Plants", path: "/shop" },
    { name: "Landscaping", path: "/landscaping" },
    { name: "Before & After", path: "/before-after" },
    { name: "Blogs", path: "/blogs" },
  ];

  const supportLinks = [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "FAQs", path: "/faqs" },
    { name: "Shipping Policy", path: "/shipping" },
  ];

  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/30">
                <img src={logo} alt="Green Life Nursery" className="w-full h-full object-cover brightness-110" />
              </div>
            </Link>
            <p className="text-forest-foreground/60 leading-relaxed">
              Your garden, our passion. Premium plants and professional landscaping services since 1970.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-forest-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-forest-foreground/60 hover:text-accent hover:pl-2 transition-all duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-forest-foreground/60 hover:text-accent hover:pl-2 transition-all duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+923470612566" className="flex items-center gap-3 text-forest-foreground/60 hover:text-accent transition-colors text-sm">
                  <Phone size={16} className="text-primary" />
                  +92 347 0612566
                </a>
              </li>
              <li>
                <a href="mailto:greenlifenurseryfarm@gmail.com" className="flex items-center gap-3 text-forest-foreground/60 hover:text-accent transition-colors text-sm">
                  <Mail size={16} className="text-primary" />
                  greenlifenurseryfarm@gmail.com
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/QXD2aZrbQ3tG6cbM9" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-forest-foreground/60 hover:text-accent transition-colors text-sm">
                  <MapPin size={16} className="text-primary mt-0.5" />
                  Pattoki, Punjab, Pakistan
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-forest-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-forest-foreground/40">
          <p>© 2024 Green Life Nursery. All rights reserved.</p>
          <p className="text-accent/60">Your Garden, Our Passion</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
