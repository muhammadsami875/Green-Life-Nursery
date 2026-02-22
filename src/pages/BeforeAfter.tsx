import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import landscapingImg from "@/assets/landscaping-project.jpg";
import heroImg from "@/assets/hero-nursery.jpg";

const projects = [
  { id: 1, title: "Residential Garden Makeover", location: "Lahore", before: heroImg, after: landscapingImg, description: "Complete transformation of a barren backyard into a lush green garden with stone pathways and ambient lighting." },
  { id: 2, title: "Commercial Landscape Design", location: "Islamabad", before: heroImg, after: landscapingImg, description: "Office park exterior redesigned with native plants, water features, and modern hardscaping." },
  { id: 3, title: "Rooftop Garden Installation", location: "Karachi", before: heroImg, after: landscapingImg, description: "Urban rooftop transformed into a green oasis with container gardens, seating areas, and vertical greenery." },
  { id: 4, title: "Villa Front Yard Design", location: "Faisalabad", before: heroImg, after: landscapingImg, description: "Dramatic curb appeal upgrade with ornamental trees, flower beds, and an elegant driveway border." },
];

const BeforeAfter = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="bg-forest py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl font-bold text-forest-foreground mb-4">Before & After</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-forest-foreground/70 text-lg max-w-xl mx-auto">
              See the dramatic transformations we've achieved for our clients across Pakistan.
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 space-y-20">
            {projects.map((project, index) => (
              <motion.div key={project.id} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="space-y-6">
                <div className="text-center md:text-left">
                  <span className="text-sm text-primary font-medium tracking-wider uppercase">{project.location}</span>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-1">{project.title}</h2>
                  <p className="text-muted-foreground max-w-2xl mt-2">{project.description}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img src={project.before} alt="Before" className="w-full h-72 md:h-96 object-cover" />
                    <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-destructive text-destructive-foreground text-sm font-semibold">Before</span>
                  </div>
                  <div className="relative rounded-2xl overflow-hidden">
                    <img src={project.after} alt="After" className="w-full h-72 md:h-96 object-cover" />
                    <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold">After</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BeforeAfter;
