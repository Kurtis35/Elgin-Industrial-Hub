import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Truck } from "lucide-react";

const areas = [
  {
    name: "Grabouw",
    description:
      "Our home base and primary delivery zone. Same-day gas delivery and tool supply for all Grabouw residents and businesses.",
    tags: ["Same-Day Delivery", "Primary Zone"],
  },
  {
    name: "Botriver",
    description:
      "Regular deliveries to Botriver and surrounding farms. Agricultural and domestic gas supplies with reliable turnaround.",
    tags: ["Farm Deliveries", "Agricultural"],
  },
  {
    name: "Villiersdorp",
    description:
      "Covering Villiersdorp and the Theewaterskloof Dam area. Industrial tools and gas for the greater community.",
    tags: ["Industrial", "Commercial"],
  },
];

export default function ServiceAreas() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="areas" className="py-24 bg-gray-50 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3 block">
            Where We Deliver
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
            Service <span className="text-orange-500">Areas</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We proudly serve the entire Elgin Valley and surrounding regions with fast, reliable deliveries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-hover bg-white border border-gray-200 rounded-2xl p-7 group shadow-sm"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/25 transition-colors">
                  <MapPin size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-gray-900 font-black text-xl">{area.name}</h3>
                  <div className="flex flex-wrap gap-1.5 mt-1.5">
                    {area.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-orange-500/15 text-orange-500 border border-orange-500/20 px-2 py-0.5 rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{area.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-r from-orange-500/10 to-orange-600/5 border border-orange-500/25 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center">
              <Truck size={28} className="text-orange-500" />
            </div>
            <div>
              <h3 className="text-gray-900 font-bold text-lg">Outside Our Delivery Zone?</h3>
              <p className="text-gray-500 text-sm mt-1">
                Contact us — we may still be able to arrange delivery or collection.
              </p>
            </div>
          </div>
          <motion.a
            href="https://wa.me/27795849684?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20delivery%20to%20my%20area."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-orange text-white font-bold px-7 py-3 rounded-xl whitespace-nowrap flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
