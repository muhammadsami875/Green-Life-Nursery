import { motion } from "framer-motion";
import { Leaf, Award, Users, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-nursery.jpg";
import drSaeedImg from "@/assets/team/dr-saeed-sabir.jpeg";
import naveedImg from "@/assets/team/naveed-sabir.jpeg";
import shaheryarImg from "@/assets/team/shaheryar-ahmad.jpeg";

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Customers" },
  { icon: Leaf, value: "300+", label: "Plant Varieties" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: TrendingUp, value: "500+", label: "Projects Done" },
];

const team = [
  { name: "Dr. Saeed Sabir", role: "CEO", image: drSaeedImg },
  { name: "Naveed Sabir", role: "Head Horticulturist", image: naveedImg },
  { name: "Shaheryar Ahmad", role: "Landscape Designer & Project Executor", image: shaheryarImg },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="bg-forest py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl font-bold text-forest-foreground mb-4">About Green Life</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-forest-foreground/70 text-lg max-w-xl mx-auto">
              Pakistan's most trusted plant nursery since 1970.
            </motion.p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 tracking-widest uppercase">
                  <span className="w-8 h-px bg-primary" /> Our Story
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  A Passion for <span className="text-gradient-nature">Green Living</span>
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Green Life Nursery was founded in 1970 in Pattoki, Punjab with a simple mission: to make premium, healthy plants accessible to everyone in Pakistan.</p>
                  <p>What started as a small nursery with just a handful of plant varieties has grown into one of Pakistan's most trusted plant destinations, serving over 10,000 happy customers across the country.</p>
                  <p>Today, we offer 300+ plant varieties, professional landscaping services, and expert plant care guidance — all backed by our 7-day freshness guarantee.</p>
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <img src={heroImg} alt="Our nursery" className="rounded-3xl shadow-xl w-full h-[450px] object-cover" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-gradient-nature mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">Meet Our Team</h2>
              <p className="text-muted-foreground mt-4 max-w-lg mx-auto">Passionate plant enthusiasts dedicated to bringing nature closer to you.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {team.map((member, i) => (
                <motion.div key={member.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-2xl p-8 text-center border border-border/50 hover:border-primary/20 transition-all hover:shadow-[var(--shadow-elevated)]">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-5 border-3 border-primary/20 shadow-lg shadow-primary/10">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-forest">
          <div className="container mx-auto px-4 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-foreground mb-4">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
                {[
                  { title: "Quality First", desc: "Every plant is handpicked and inspected before delivery." },
                  { title: "Sustainability", desc: "Eco-friendly growing methods and recyclable packaging." },
                  { title: "Customer Love", desc: "Your satisfaction is guaranteed with our 7-day freshness promise." },
                ].map((v) => (
                  <div key={v.title} className="text-center">
                    <h3 className="font-serif text-xl font-semibold text-accent mb-3">{v.title}</h3>
                    <p className="text-forest-foreground/60 text-sm">{v.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
