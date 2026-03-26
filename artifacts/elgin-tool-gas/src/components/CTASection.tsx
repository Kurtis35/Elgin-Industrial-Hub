import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, MessageCircle, Flame } from "lucide-react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contact">
      <div className="absolute inset-0 industrial-bg" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center border-2 border-orange-500/30 glow-pulse">
            <Flame size={32} className="text-orange-500" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight"
        >
          Need Gas Delivered{" "}
          <span className="text-orange-500 orange-glow">Today?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Don't run out of gas. Contact Jeremy directly for fast, reliable gas delivery and industrial supplies to Grabouw, Botriver, and Villiersdorp.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <motion.a
            href="tel:+27795849684"
            className="btn-orange flex items-center gap-3 text-white font-bold px-10 py-5 rounded-xl text-xl w-full sm:w-auto justify-center shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={24} />
            Call Now
          </motion.a>

          <motion.a
            href="https://wa.me/27795849684?text=Hi%20Elgin%20Tool%20and%20Gas%2C%20I%20need%20a%20gas%20delivery%20today.%20Can%20you%20help%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn flex items-center gap-3 text-white font-bold px-10 py-5 rounded-xl text-xl w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={24} />
            WhatsApp Order
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-500"
        >
          {[
            "Fast response guaranteed",
            "Competitive pricing",
            "Safe & certified delivery",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
