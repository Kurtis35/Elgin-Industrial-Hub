import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const products = [
  {
    category: "Gas Cylinders",
    items: ["Afrox LPG Cylinders", "Braai Gas", "Industrial Gas", "CO2 Cylinders"],
    emoji: "🔵",
    color: "from-blue-500/10 to-blue-600/5",
    border: "border-blue-200",
    tag: "Most Popular",
    tagColor: "bg-blue-500",
  },
  {
    category: "Welding Tools",
    items: ["MIG Welders", "Angle Grinders", "Welding Rods", "Safety Goggles"],
    emoji: "🔧",
    color: "from-orange-500/10 to-orange-600/5",
    border: "border-orange-200",
    tag: "In Stock",
    tagColor: "bg-orange-500",
  },
  {
    category: "Safety Gear",
    items: ["Hard Hats", "Safety Boots", "Gloves & PPE", "Reflective Clothing"],
    emoji: "🦺",
    color: "from-yellow-500/10 to-yellow-600/5",
    border: "border-yellow-200",
    tag: "Compliant",
    tagColor: "bg-yellow-600",
  },
  {
    category: "Power Tools",
    items: ["Drills & Drivers", "Jigsaws", "Sanders", "Circular Saws"],
    emoji: "⚡",
    color: "from-purple-500/10 to-purple-600/5",
    border: "border-purple-200",
    tag: "Pro Grade",
    tagColor: "bg-purple-600",
  },
  {
    category: "Abrasives",
    items: ["Cutting Discs", "Grinding Wheels", "Flap Discs", "Wire Brushes"],
    emoji: "⚙️",
    color: "from-gray-500/10 to-gray-600/5",
    border: "border-gray-200",
    tag: "All Sizes",
    tagColor: "bg-gray-500",
  },
  {
    category: "Workshop Gear",
    items: ["Compressors", "Chain Hoists", "Workbenches", "Tool Storage"],
    emoji: "🏭",
    color: "from-green-500/10 to-green-600/5",
    border: "border-green-200",
    tag: "Heavy Duty",
    tagColor: "bg-green-700",
  },
];

export default function ProductShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3 block">
            Our Stock
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Product <span className="text-orange-500">Showcase</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A snapshot of what we carry. Contact us for availability, pricing, and custom orders.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.category}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card-hover relative rounded-2xl p-7 border bg-gradient-to-br ${product.color} ${product.border} overflow-hidden group`}
            >
              <div className="absolute top-4 right-4">
                <span className={`text-xs font-bold ${product.tagColor} text-white px-2.5 py-1 rounded-full`}>
                  {product.tag}
                </span>
              </div>

              <div className="text-4xl mb-4">{product.emoji}</div>
              <h3 className="text-gray-900 font-black text-xl mb-4">{product.category}</h3>
              <ul className="space-y-2">
                {product.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-gray-600 text-sm">
                    <span className="w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-gray-200">
                <a
                  href="https://wa.me/27795849684?text=Hi%20Elgin%20Tool%20and%20Gas%2C%20I%27d%20like%20to%20enquire%20about%20pricing."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 text-sm font-semibold transition-colors flex items-center gap-1 group-hover:gap-2"
                >
                  Enquire Now <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
