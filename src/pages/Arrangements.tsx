import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import arr1 from "@/assets/arrangements/arrangement-1.jpg";
import arr2 from "@/assets/arrangements/arrangement-2.jpg";
import arr3 from "@/assets/arrangements/arrangement-3.jpg";
import arr4 from "@/assets/arrangements/arrangement-4.jpg";
import arr5 from "@/assets/arrangements/arrangement-5.jpg";
import arr6 from "@/assets/arrangements/arrangement-6.jpg";
import arr7 from "@/assets/arrangements/arrangement-7.jpg";
import arr8 from "@/assets/arrangements/arrangement-8.jpg";
import { toast } from "sonner";

const arrangements = [
    {
        id: 1,
        name: "Succulent Bowl",
        description: "A vibrant handmade arrangement of colorful succulents with trailing sedum in a classic terracotta pot. A perfect centerpiece for any table.",
        price: 2500,
        image: arr1,
        tag: "Bestseller",
    },
    {
        id: 2,
        name: "Driftwood Terrarium",
        description: "Natural driftwood paired with lush succulents in a rustic clay pot. A unique handcrafted piece that brings the outdoors in.",
        price: 3500,
        image: arr2,
        tag: "Handcrafted",
    },
    {
        id: 3,
        name: "Cascade Globe Planter",
        description: "Trailing succulents cascading from a beautifully carved dark globe pot. An eye-catching statement piece for shelves or desks.",
        price: 800,
        image: arr3,
        tag: "Popular",
    },
    {
        id: 4,
        name: "Boat Succulent Planter",
        description: "Charming succulents arranged with blue decorative stones in a boat-shaped ceramic planter. A creative nautical-themed gift.",
        price: 2000,
        image: arr4,
        tag: "New",
    },
    {
        id: 5,
        name: "Mini Cone Planter",
        description: "Delicate sedum planted in a sleek white concrete cone pot. Compact and elegant — ideal for small spaces or as a desk companion.",
        price: 350,
        image: arr5,
        tag: "Gift Idea",
    },
    {
        id: 6,
        name: "Golden Globe Arrangement",
        description: "Succulents with golden yellow sedum accents in a matte black round pot. A warm, radiant arrangement for modern interiors.",
        price: 600,
        image: arr6,
        tag: "Trending",
    },
    {
        id: 7,
        name: "Succulent Tray Garden",
        description: "A rectangular tray garden featuring kalanchoe and succulents with blue and white decorative stones. Perfect for coffee tables and window sills.",
        price: 2000,
        image: arr7,
        tag: "Premium",
    },
    {
        id: 8,
        name: "Premium Driftwood Planter",
        description: "Tall natural driftwood adorned with string of pearls and echeveria in a terracotta base. Our most luxurious handcrafted arrangement.",
        price: 5500,
        image: arr8,
        tag: "Handcrafted",
    },
];

const Arrangements = () => {
    const [liked, setLiked] = useState<number[]>([]);

    const toggleLike = (id: number) => {
        setLiked((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
    };

    const orderOnWhatsApp = (item: (typeof arrangements)[0]) => {
        const message = `Hi! I'm interested in ordering:\n\n🌿 *${item.name}*\n💰 Price: Rs. ${item.price.toLocaleString()}\n\n${item.description}\n\nPlease confirm availability and delivery details.`;
        window.open(`https://wa.me/923470612566?text=${encodeURIComponent(message)}`, "_blank");
        toast.success("Redirecting to WhatsApp...");
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main>
                {/* Hero */}
                <section className="bg-forest py-16 md:py-24">
                    <div className="container mx-auto px-4 text-center">
                        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-6xl font-bold text-forest-foreground mb-4">
                            Handmade Arrangements
                        </motion.h1>
                        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-forest-foreground/70 text-lg max-w-2xl mx-auto">
                            Each arrangement is lovingly handcrafted by our artisans using the finest plants. Unique, beautiful, and ready to brighten any space.
                        </motion.p>
                    </div>
                </section>

                {/* Arrangements Grid */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {arrangements.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08 }}
                                    className="group bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500"
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden aspect-[16/10]">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                        {item.tag && (
                                            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {item.tag}
                      </span>
                                        )}
                                        <button
                                            onClick={() => toggleLike(item.id)}
                                            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center hover:bg-card transition-colors"
                                        >
                                            <Heart
                                                size={18}
                                                className={liked.includes(item.id) ? "fill-destructive text-destructive" : "text-muted-foreground"}
                                            />
                                        </button>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 space-y-4">
                                        <div>
                                            <h3 className="font-serif text-xl font-bold text-foreground">{item.name}</h3>
                                            <p className="text-muted-foreground text-sm mt-1.5 leading-relaxed">{item.description}</p>
                                        </div>
                                        <div className="flex items-center justify-between pt-2">
                                            <span className="text-xl font-bold text-primary">Rs. {item.price.toLocaleString()}</span>
                                            <button
                                                onClick={() => orderOnWhatsApp(item)}
                                                className="btn-nature text-sm px-5 py-2.5 flex items-center gap-2"
                                            >
                                                <MessageCircle size={16} />
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Custom Order CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-20 text-center bg-forest rounded-3xl p-10 md:p-16"
                        >
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-foreground mb-4">
                                Want a Custom Arrangement?
                            </h2>
                            <p className="text-forest-foreground/70 max-w-xl mx-auto mb-8">
                                Tell us your vision and we'll handcraft a unique plant arrangement just for you. Perfect for gifts, events, or home décor.
                            </p>
                            <a
                                href="https://wa.me/923470612566?text=Hi!%20I'd%20like%20to%20order%20a%20custom%20plant%20arrangement.%20Can%20you%20help%20me%20design%20one?"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-nature inline-flex items-center gap-2 text-base px-8 py-3"
                            >
                                <MessageCircle size={18} />
                                Get a Custom Quote
                            </a>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Arrangements;
