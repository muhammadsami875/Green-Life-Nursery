import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I'm ${form.name}.\n\nSubject: ${form.subject}\n\n${form.message}\n\nEmail: ${form.email}\nPhone: ${form.phone}`;
    window.open(`https://wa.me/923470612566?text=${encodeURIComponent(message)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+92 347 0612566", href: "tel:+923470612566" },
    { icon: Mail, label: "Email", value: "greenlifenurseryfarm@gmail.com", href: "mailto:greenlifenurseryfarm@gmail.com" },
    { icon: MapPin, label: "Location", value: "Pattoki, Punjab, Pakistan", href: "https://maps.app.goo.gl/QXD2aZrbQ3tG6cbM9" },
    { icon: Clock, label: "Hours", value: "Mon-Sat: 8AM - 7PM", href: null },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="bg-forest py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl font-bold text-forest-foreground mb-4">Contact Us</motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-forest-foreground/70 text-lg max-w-xl mx-auto">
              Have a question or want to place an order? We'd love to hear from you.
            </motion.p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Info */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <p className="text-muted-foreground leading-relaxed">Reach out to us for plant orders, landscaping consultations, or any questions. We typically respond within 1 hour.</p>
                </div>
                <div className="space-y-5">
                  {contactInfo.map((item) => (
                    <motion.div key={item.label} whileHover={{ x: 5 }} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.a href="https://wa.me/923470612566" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-3 btn-nature text-lg px-8 py-4">
                  <MessageCircle size={20} /> Chat on WhatsApp
                </motion.a>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-3">
                <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 border border-border/50 shadow-[var(--shadow-card)]">
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                      <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="+92 300 1234567" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Subject *</label>
                      <input type="text" required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Plant order, landscaping, etc." />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="text-sm font-medium text-foreground mb-2 block">Message *</label>
                    <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none" placeholder="Tell us how we can help..." />
                  </div>
                  <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full btn-nature py-4 text-lg flex items-center justify-center gap-3">
                    <Send size={18} /> Send Message
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-96 bg-muted">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54476.63244857048!2d73.8!3d31.02!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39184e25f0000001%3A0x5e893e6b87f1c2d2!2sPattoki%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Green Life Nursery Location"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
