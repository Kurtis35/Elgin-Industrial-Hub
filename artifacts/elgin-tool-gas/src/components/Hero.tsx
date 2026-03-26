import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
    >
      <div className="absolute inset-0 industrial-bg" />

      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,102,0,0.3) 50px, rgba(255,102,0,0.3) 51px), repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,102,0,0.3) 50px, rgba(255,102,0,0.3) 51px)",
          }}
        />
      </div>

      <div className="absolute top-1/4 right-10 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-48 h-48 bg-orange-600/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-500 text-sm font-semibold px-4 py-2 rounded-full tracking-wider uppercase">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Afrox Approved Supplier
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-6"
        >
          Reliable Gas Supply &{" "}
          <span className="text-orange-500 orange-glow">Industrial Tools</span>
          <br />
          in Elgin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-gray-500 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          <span className="text-orange-500 font-semibold">25+ Years Experience</span>
          {" • "}
          <span className="text-gray-800 font-semibold">Afrox Approved Supplier</span>
          {" • "}
          <span className="text-orange-500 font-semibold">Fast Local Delivery</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="tel:+27795849684"
            className="btn-orange flex items-center gap-3 text-white font-bold px-8 py-4 rounded-xl text-lg w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={22} />
            Call Now
          </motion.a>

          <motion.a
            href="https://wa.me/27795849684?text=Hi%20Elgin%20Tool%20and%20Gas%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-900/8 hover:bg-gray-900/12 border border-gray-300 text-gray-800 font-bold px-8 py-4 rounded-xl text-lg transition-all duration-300 w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05, borderColor: "rgba(37, 211, 102, 0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={22} className="text-green-500" />
            WhatsApp Us
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mt-14 text-sm text-gray-500"
        >
          {["Grabouw", "Botriver", "Villiersdorp", "Elgin Valley"].map((area) => (
            <div key={area} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              <span>{area}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("trust")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-orange-500 hover:text-orange-400 transition-colors float-animation"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
