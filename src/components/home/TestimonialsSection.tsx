import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    role: "Home Owner",
    location: "Lahore",
    rating: 5,
    text: "Green Life Nursery transformed my backyard into a stunning garden. Their team's attention to detail and plant knowledge is exceptional. Highly recommend!",
    initials: "AK",
  },
  {
    id: 2,
    name: "Ahmad Raza",
    role: "Restaurant Owner",
    location: "Islamabad",
    rating: 5,
    text: "We ordered 50+ plants for our restaurant. Every single plant arrived in perfect condition. The quality is unmatched and prices are very reasonable.",
    initials: "AR",
  },
  {
    id: 3,
    name: "Fatima Malik",
    role: "Interior Designer",
    location: "Karachi",
    rating: 5,
    text: "As an interior designer, I need reliable plant suppliers. Green Life has been my go-to for 3 years. Their monstera collection is the best in Pakistan!",
    initials: "FM",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4 tracking-widest uppercase">
            <span className="w-8 h-px bg-primary" />
            Testimonials
            <span className="w-8 h-px bg-primary" />
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join thousands of happy customers who have transformed their spaces with our plants.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card rounded-2xl p-8 h-full flex flex-col border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Quote className="w-5 h-5 text-primary" />
                </div>

                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-accent fill-accent" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed flex-grow mb-8 text-[15px]">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-border/50">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-12 md:gap-20"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="text-accent fill-accent" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">4.9/5 Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-nature mb-1">10,000+</div>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient-nature mb-1">98%</div>
            <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
