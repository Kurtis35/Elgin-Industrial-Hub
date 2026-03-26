import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/27795849684?text=Hi%20Elgin%20Tool%20and%20Gas%2C%20I%27d%20like%20to%20enquire%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="whatsapp-btn fixed bottom-6 right-6 z-50 flex items-center gap-2.5 text-white font-bold px-5 py-3.5 rounded-full shadow-2xl"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="text-sm hidden sm:block">WhatsApp</span>
    </motion.a>
  );
}
