import { motion } from "framer-motion";
import { Flame, Phone, MessageCircle, MapPin, Mail } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Service Areas", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Gas Refills & Delivery",
  "Welding Consumables",
  "Safety Equipment",
  "Power Tools",
  "Abrasives & Lubricants",
  "Workshop Equipment",
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500">
                <Flame size={20} className="text-white" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-gray-900 font-bold text-lg">Elgin Tool</span>
                <span className="text-orange-500 font-bold text-lg -mt-1">& Gas</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Your trusted Afrox-approved gas supplier and industrial tool expert in the Elgin Valley. Serving homes and businesses for over 25 years.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+27795849684"
                className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors text-sm"
              >
                <Phone size={15} className="text-orange-500" />
                +27 79 584 9684
              </a>
              <a
                href="https://wa.me/27795849684"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 hover:text-green-600 transition-colors text-sm"
              >
                <MessageCircle size={15} className="text-green-500" />
                WhatsApp
              </a>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <MapPin size={15} className="text-orange-500" />
                Grabouw, Western Cape
              </div>
              <a
                href="mailto:info@elgintoolandgas.co.za"
                className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors text-sm"
              >
                <Mail size={15} className="text-orange-500" />
                info@elgintoolandgas.co.za
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold text-base mb-5 tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-500 hover:text-orange-500 text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold text-base mb-5 tracking-wide">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-1.5 text-gray-500 text-sm">
                  <span className="w-1 h-1 bg-orange-500 rounded-full" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold text-base mb-5 tracking-wide">Service Areas</h4>
            <ul className="space-y-3 mb-7">
              {["Grabouw", "Botriver", "Villiersdorp", "Elgin Valley", "Surrounding Areas"].map((area) => (
                <li key={area} className="flex items-center gap-1.5 text-gray-500 text-sm">
                  <MapPin size={12} className="text-orange-500 flex-shrink-0" />
                  {area}
                </li>
              ))}
            </ul>

            <div className="bg-orange-500/10 border border-orange-500/25 rounded-xl p-4">
              <p className="text-orange-500 font-semibold text-sm mb-1">Afrox Approved Supplier</p>
              <p className="text-gray-500 text-xs">Certified safe gas supplier you can trust</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Elgin Tool & Gas. All rights reserved.</p>
          <p>
            Afrox Approved Supplier | Grabouw, Western Cape, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
