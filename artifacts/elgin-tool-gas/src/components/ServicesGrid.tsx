import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Wrench, Shield, Zap, CircleDot, Settings } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Gas Refills & Delivery",
    description:
      "Afrox-approved gas cylinder refills for domestic, commercial, and agricultural use. Fast, safe delivery to your door.",
    highlight: true,
  },
  {
    icon: Wrench,
    title: "Welding Consumables",
    description:
      "Full range of welding rods, wire, tips, nozzles, and accessories for MIG, TIG, and arc welding applications.",
    highlight: false,
  },
  {
    icon: Shield,
    title: "Safety Equipment & Clothing",
    description:
      "PPE, hard hats, safety boots, goggles, gloves, overalls, and all essential safety gear for workplace compliance.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Power Tools & Accessories",
    description:
      "Industrial-grade drills, grinders, sanders, and more. Quality brands with reliable performance for every job.",
    highlight: false,
  },
  {
    icon: CircleDot,
    title: "Abrasives & Lubricants",
    description:
      "Cutting discs, grinding wheels, flap discs, chain lubricants, penetrating oils, and industrial lubricants.",
    highlight: false,
  },
  {
    icon: Settings,
    title: "Workshop Equipment",
    description:
      "Compressors, jacks, hoists, vices, workbenches, and essential workshop tools to keep your operation running.",
    highlight: false,
  },
];

export default function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 bg-white relative industrial-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3 block">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Everything you need for industrial, agricultural, and commercial operations — all under one roof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`card-hover relative rounded-2xl p-7 border group overflow-hidden ${
                  service.highlight
                    ? "bg-orange-500/10 border-orange-500/40"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                {service.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold bg-orange-500 text-white px-2 py-1 rounded-full tracking-wide">
                      POPULAR
                    </span>
                  </div>
                )}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                    service.highlight
                      ? "bg-orange-500/30 group-hover:bg-orange-500/40"
                      : "bg-orange-500/15 group-hover:bg-orange-500/25"
                  }`}
                >
                  <Icon
                    size={28}
                    className={service.highlight ? "text-orange-400" : "text-orange-500"}
                  />
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
