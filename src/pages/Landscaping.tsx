import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Phone, Ruler, Paintbrush, TreeDeciduous, Droplets, Sun } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import landscapingImg from "@/assets/landscaping-project.jpg";

const services = [
  { icon: Ruler, title: "Garden Design & Planning", description: "Custom layouts tailored to your space, climate, and preferences." },
  { icon: Paintbrush, title: "Hardscape Construction", description: "Pathways, patios, retaining walls, and decorative stonework." },
  { icon: TreeDeciduous, title: "Tree & Shrub Planting", description: "Strategic planting for shade, privacy, and seasonal beauty." },
  { icon: Droplets, title: "Irrigation Systems", description: "Efficient drip and sprinkler systems for optimal water use." },
  { icon: Sun, title: "Outdoor Lighting", description: "Ambient and functional lighting to enhance your garden at night." },
  { icon: CheckCircle2, title: "Lawn Installation", description: "Lush green lawns with proper grading and soil preparation." },
];

const process = [
  { step: "01", title: "Consultation", description: "We visit your site, discuss your vision, and assess the space." },
  { step: "02", title: "Design", description: "Our team creates a detailed landscape plan with 3D visualization." },
  { step: "03", title: "Execution", description: "Expert installation with premium materials and healthy plants." },
  { step: "04", title: "Maintenance", description: "Optional ongoing care to keep your garden thriving year-round." },
];

const Landscaping = () => {
  const handleBooking = () => {
    const message = "Hi! I'm interested in your landscaping services. I'd like to book a free consultation. Please share available dates.";
    window.open(`https://wa.me/923470612566?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="relative py-24 md:py-32 bg-forest overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-medium mb-4 tracking-widest uppercase">
                  <span className="w-8 h-px bg-accent" /> Professional Services
                </span>
                <h1 className="font-serif text-4xl md:text-6xl font-bold text-forest-foreground mb-6 leading-tight">
                  Landscape Design That Inspires
                </h1>
                <p className="text-forest-foreground/70 text-lg mb-8">
                  From concept to completion, we transform outdoor spaces into stunning green environments that enhance your property's beauty and value.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleBooking} className="btn-gold flex items-center gap-2">
                    Book Free Consultation <ArrowRight size={18} />
                  </motion.button>
                  <a href="tel:+923470612566">
                    <motion.button whileHover={{ scale: 1.02 }} className="border-2 border-forest-foreground/20 text-forest-foreground px-6 py-3 rounded-xl font-medium hover:bg-forest-foreground/10 transition-colors flex items-center gap-2">
                      <Phone size={18} /> Call Us
                    </motion.button>
                  </a>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
                <img src={landscapingImg} alt="Landscaping project" className="rounded-3xl shadow-2xl w-full h-[400px] object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 tracking-widest uppercase"><span className="w-8 h-px bg-primary" /> Our Services <span className="w-8 h-px bg-primary" /></span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">What We Offer</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, i) => (
                <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ y: -5 }} className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/20 transition-all hover:shadow-[var(--shadow-elevated)] group">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                    <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 tracking-widest uppercase"><span className="w-8 h-px bg-primary" /> How It Works <span className="w-8 h-px bg-primary" /></span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Our Process</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {process.map((step, i) => (
                <motion.div key={step.step} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="text-5xl font-bold text-gradient-nature mb-4">{step.step}</div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-forest">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-foreground mb-6">Ready to Transform Your Space?</h2>
              <p className="text-forest-foreground/70 text-lg max-w-xl mx-auto mb-8">Book a free consultation today and let our experts design the garden of your dreams.</p>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleBooking} className="btn-gold text-lg px-10 py-4 flex items-center gap-3 mx-auto">
                Book Now <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Landscaping;
