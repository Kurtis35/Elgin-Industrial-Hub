import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Truck, Building2, Clock } from "lucide-react";

const trustItems = [
  {
    icon: Clock,
    value: "25+",
    label: "Years Experience",
    description: "Trusted by homes and businesses across the Elgin Valley since 1999",
  },
  {
    icon: Award,
    value: "Afrox",
    label: "Approved Supplier",
    description: "Certified and approved by Afrox — South Africa's leading gas supplier",
  },
  {
    icon: Truck,
    value: "Fast",
    label: "Local Delivery",
    description: "Quick and reliable gas delivery to Grabouw, Botriver & Villiersdorp",
  },
  {
    icon: Building2,
    value: "All",
    label: "Homes & Businesses",
    description: "Serving residential customers, farms, and commercial businesses",
  },
];

export default function TrustSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="trust" className="py-20 bg-zinc-950 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">
            Why Choose{" "}
            <span className="text-orange-500">Elgin Tool & Gas</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Your trusted industrial partner in the Elgin Valley for over two decades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover bg-zinc-900 border border-zinc-800 rounded-2xl p-7 text-center group"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 bg-orange-500/15 rounded-xl flex items-center justify-center group-hover:bg-orange-500/25 transition-colors duration-300">
                    <Icon size={28} className="text-orange-500" />
                  </div>
                </div>
                <div className="text-3xl font-black text-orange-500 mb-1">{item.value}</div>
                <div className="text-white font-bold text-lg mb-3">{item.label}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
