import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Sparkles, Leaf } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-accent/10 text-accent px-5 py-2.5 rounded-full mb-6"
          >
            <Sparkles size={16} />
            <span className="text-sm font-medium">Get 10% Off Your First Order</span>
          </motion.div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Join Our Green Community
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Subscribe to receive exclusive offers, plant care tips, and be the first 
            to know about new arrivals and seasonal specials.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-3">
              <div className="relative flex-grow">
                <Leaf className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-nature px-6 flex items-center gap-2"
              >
                <Send size={18} />
                <span className="hidden sm:inline">Subscribe</span>
              </motion.button>
            </div>
          </form>

          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to receive marketing emails. Unsubscribe anytime.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {["Exclusive Discounts", "Weekly Plant Tips", "Early Access to Sales"].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {benefit}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
