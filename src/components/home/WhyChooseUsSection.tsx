import { motion } from "framer-motion";
import { Leaf, Truck, HeartHandshake, Award, Clock, Sprout } from "lucide-react";

const features = [
  { icon: Leaf, title: "Premium Quality", description: "Handpicked, healthy plants sourced from the best nurseries across Pakistan." },
  { icon: Truck, title: "Safe Delivery", description: "Expert packaging ensures your plants arrive fresh and damage-free." },
  { icon: HeartHandshake, title: "Expert Guidance", description: "Get personalized plant care tips and landscaping advice from our experts." },
  { icon: Award, title: "10+ Years Experience", description: "Trusted by thousands of customers with a decade of horticultural expertise." },
  { icon: Clock, title: "7-Day Guarantee", description: "Not satisfied? We offer a 7-day freshness guarantee on all plants." },
  { icon: Sprout, title: "Sustainable Practices", description: "Eco-friendly growing methods and recyclable packaging materials." },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 tracking-widest uppercase">
              <span className="w-8 h-px bg-primary" />
              Why Choose Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Pakistan's Most Trusted{" "}
              <span className="text-gradient-nature">Plant Nursery</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              At Green Life Nursery, we're passionate about bringing nature closer to you. 
              With over a decade of experience, we've helped transform thousands of homes 
              and outdoor spaces into beautiful green sanctuaries.
            </p>

            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "10K+", label: "Happy Customers" },
                { value: "300+", label: "Plant Varieties" },
                { value: "500+", label: "Projects Done" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-gradient-nature mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-6 group border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
