import { motion } from "framer-motion";
import { Globe, Truck, ShieldCheck, Phone, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

import heroImg from "@/assets/export-hero.jpg";
import royalPalmImg from "@/assets/plants/royal-palm.jpg";
import washingtoniaPalmImg from "@/assets/plants/washingtonia-palm.jpg";
import datePalmImg from "@/assets/plants/date-palm.jpg";
import coconutPalmImg from "@/assets/plants/coconut-palm.jpg";
import bigGuavaImg from "@/assets/plants/big-guava.jpg";
import arecaPalmImg from "@/assets/plants/areca-palm.jpg";
import travellersPalmImg from "@/assets/plants/travellers-palm.jpg";
import bottlePalmImg from "@/assets/plants/bottle-palm.jpg";

const exportPlants = [
  {
    name: "Royal Palm",
    scientific: "Roystonea regia",
    image: royalPalmImg,
    height: "15–25 ft",
    price: "On Request",
    description: "Majestic tall palm with a smooth grey trunk and graceful crown. Iconic for grand entrances and avenues.",
  },
  {
    name: "Washingtonia Fan Palm",
    scientific: "Washingtonia robusta",
    image: washingtoniaPalmImg,
    height: "20–30 ft",
    price: "On Request",
    description: "Tall slender palm with large fan-shaped leaves. Hardy and fast-growing, perfect for landscapes.",
  },
  {
    name: "Date Palm",
    scientific: "Phoenix dactylifera",
    image: datePalmImg,
    height: "15–25 ft",
    price: "On Request",
    description: "Classic ornamental palm with thick textured trunk and arching silvery-green fronds.",
  },
  {
    name: "Coconut Palm",
    scientific: "Cocos nucifera",
    image: coconutPalmImg,
    height: "20–30 ft",
    price: "On Request",
    description: "Iconic tropical palm with curved trunk and long feathery fronds. Symbol of the tropics.",
  },
  {
    name: "Big Guava Tree",
    scientific: "Psidium guajava",
    image: bigGuavaImg,
    height: "8–15 ft",
    price: "On Request",
    description: "Mature fruiting guava tree. High-yield export-grade specimen with lush canopy.",
  },
  {
    name: "Areca Palm",
    scientific: "Dypsis lutescens",
    image: arecaPalmImg,
    height: "10–20 ft",
    price: "On Request",
    description: "Elegant clustering palm with golden-green stems and feathery fronds. Great for tropical settings.",
  },
  {
    name: "Traveller's Palm",
    scientific: "Ravenala madagascariensis",
    image: travellersPalmImg,
    height: "15–30 ft",
    price: "On Request",
    description: "Dramatic fan-shaped arrangement of massive leaves. A true tropical showstopper.",
  },
  {
    name: "Bottle Palm",
    scientific: "Hyophorbe lagenicaulis",
    image: bottlePalmImg,
    height: "8–12 ft",
    price: "On Request",
    description: "Unique palm with a distinctive swollen bottle-shaped trunk. Rare and highly ornamental.",
  },
];

const features = [
  { icon: Globe, title: "International Delivery", desc: "We ship large specimen plants worldwide with proper documentation." },
  { icon: Truck, title: "Safe Packaging", desc: "Custom crating and climate-controlled transport for every plant." },
  { icon: ShieldCheck, title: "Phytosanitary Certified", desc: "All exports come with phytosanitary certificates and health checks." },
  { icon: Leaf, title: "Nursery Fresh", desc: "Plants are grown and acclimatized in our own nursery since 1970." },
];

const ExportPlants = () => {
  const handleInquiry = (plantName: string) => {
    const message = `Hi! I'm interested in your export-quality *${plantName}*. Please share pricing, availability, and international shipping details.`;
    window.open(`https://wa.me/923470612566?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img src={heroImg} alt="Export quality plants nursery" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-6xl font-bold text-white mb-4"
          >
            Export Quality Plants
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl"
          >
            Premium large palms & trees delivered internationally — grown with care in Pakistan since 1970.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border/50"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <f.icon size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{f.title}</h3>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plants Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Our Export Specimens</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Large, mature plants ready for international shipment. Contact us for bulk pricing and custom orders.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {exportPlants.map((plant, i) => (
              <motion.div
                key={plant.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      Export Grade
                    </span>
                  </div>
                  <CardContent className="p-5 flex flex-col flex-1">
                    <h3 className="font-serif text-lg font-bold text-foreground">{plant.name}</h3>
                    <p className="text-xs text-primary italic mb-2">{plant.scientific}</p>
                    <p className="text-sm text-muted-foreground mb-3 flex-1">{plant.description}</p>
                    <div className="flex items-center justify-between text-sm mb-4">
                      <span className="text-muted-foreground">Height: <strong className="text-foreground">{plant.height}</strong></span>
                      <span className="font-bold text-primary">{plant.price}</span>
                    </div>
                    <button
                      onClick={() => handleInquiry(plant.name)}
                      className="w-full btn-nature flex items-center justify-center gap-2 text-sm py-2.5"
                    >
                      <Phone size={16} />
                      Inquire on WhatsApp
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-forest">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-foreground mb-4">Need a Custom Order?</h2>
          <p className="text-forest-foreground/70 max-w-xl mx-auto mb-8">
            We handle bulk export orders with full phytosanitary certification, custom crating, and worldwide logistics.
          </p>
          <a
            href="https://wa.me/923470612566?text=Hi!%20I%27m%20interested%20in%20bulk%20export%20plants.%20Please%20share%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-nature text-lg px-8 py-3"
          >
            <Phone size={20} />
            Contact for Bulk Orders
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExportPlants;
