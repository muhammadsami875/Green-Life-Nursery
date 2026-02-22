import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import monsteraImg from "@/assets/plants/monstera.jpg";
import snakePlantImg from "@/assets/plants/snake-plant.jpg";
import pothosImg from "@/assets/plants/pothos.jpg";
import landscapingImg from "@/assets/landscaping-project.jpg";
import indoorImg from "@/assets/categories/indoor.jpg";
import herbsImg from "@/assets/categories/herbs.jpg";

const blogs = [
  { id: 1, title: "10 Best Indoor Plants for Beginners", excerpt: "Starting your plant journey? These low-maintenance indoor plants are perfect for beginners and thrive even with minimal care.", image: monsteraImg, date: "Jan 15, 2026", readTime: "5 min", category: "Plant Care" },
  { id: 2, title: "How to Create a Vertical Garden at Home", excerpt: "Transform a blank wall into a living masterpiece with our step-by-step guide to building a vertical garden.", image: indoorImg, date: "Jan 10, 2026", readTime: "7 min", category: "DIY" },
  { id: 3, title: "Snake Plant: The Ultimate Care Guide", excerpt: "Everything you need to know about growing and maintaining snake plants, from watering schedules to propagation.", image: snakePlantImg, date: "Jan 5, 2026", readTime: "6 min", category: "Plant Care" },
  { id: 4, title: "Landscaping Trends for 2026", excerpt: "Discover the hottest landscaping trends this year, from sustainable gardens to outdoor living spaces.", image: landscapingImg, date: "Dec 28, 2025", readTime: "8 min", category: "Landscaping" },
  { id: 5, title: "Growing Herbs in Small Spaces", excerpt: "Don't have a big garden? Learn how to grow fresh herbs in your kitchen, balcony, or windowsill.", image: herbsImg, date: "Dec 20, 2025", readTime: "4 min", category: "Gardening" },
  { id: 6, title: "Why Pothos is the Perfect Office Plant", excerpt: "Discover why pothos is the number one choice for offices and how to keep them thriving under fluorescent lights.", image: pothosImg, date: "Dec 15, 2025", readTime: "5 min", category: "Plant Care" },
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="bg-forest py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl font-bold text-forest-foreground mb-4">Our Blog</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-forest-foreground/70 text-lg max-w-xl mx-auto">
              Plant care tips, gardening guides, and landscaping inspiration.
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.article key={blog.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
                  <motion.div whileHover={{ y: -6 }} className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/20 transition-all hover:shadow-[var(--shadow-elevated)] group h-full flex flex-col">
                    <div className="relative h-52 overflow-hidden">
                      <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">{blog.category}</span>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                        <span className="flex items-center gap-1"><Calendar size={12} />{blog.date}</span>
                        <span className="flex items-center gap-1"><Clock size={12} />{blog.readTime} read</span>
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{blog.title}</h3>
                      <p className="text-muted-foreground text-sm flex-grow mb-4">{blog.excerpt}</p>
                      <div className="flex items-center gap-2 text-primary font-medium text-sm">
                        <span>Read More</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
