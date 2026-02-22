import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import landscapingImg from "@/assets/landscaping-project.jpg";

const services = [
  "Garden Design & Planning",
  "Lawn Installation & Maintenance",
  "Hardscape Construction",
  "Irrigation Systems",
  "Outdoor Lighting",
  "Tree & Shrub Planting",
];

const LandscapingSection = () => {
  return (
    <section className="py-24 bg-forest relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4 tracking-widest uppercase">
              <span className="w-8 h-px bg-accent" />
              Professional Landscaping
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-forest-foreground mb-6 leading-tight">
              Transform Your Outdoor Space
            </h2>
            <p className="text-forest-foreground/70 text-lg mb-10 leading-relaxed">
              From concept to completion, our expert landscaping team creates stunning 
              outdoor environments that enhance your property's beauty and value.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-forest-foreground/90">{service}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gold flex items-center gap-2"
                >
                  Get Free Consultation
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/before-after">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="border-2 border-forest-foreground/20 text-forest-foreground px-6 py-3 rounded-xl font-medium hover:bg-forest-foreground/10 transition-colors flex items-center gap-2"
                >
                  View Projects
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Project Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={landscapingImg}
                alt="Professional landscaping project"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-xl"
            >
              <div className="text-3xl font-bold text-gradient-nature">500+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LandscapingSection;
