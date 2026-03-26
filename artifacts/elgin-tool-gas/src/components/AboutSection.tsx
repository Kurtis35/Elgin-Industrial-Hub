import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, User } from "lucide-react";

const highlights = [
  "25+ years hands-on experience in gas and industrial tools",
  "Fully qualified Afrox approved gas supplier",
  "Previous experience with Hitti and Apple Somerset West",
  "Deep knowledge of the Elgin Valley community's needs",
  "Committed to safety and quality on every job",
  "Fast, personalised service — Jeremy deals directly with you",
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-gray-50 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-orange-500 font-semibold tracking-widest uppercase text-sm mb-3 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Meet{" "}
              <span className="text-orange-500">Jeremy</span>
              <br />
              Your Local Expert
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              With over <span className="text-orange-500 font-semibold">25 years of experience</span> in the gas and industrial tools industry, Jeremy has built a reputation as the go-to expert in the Elgin Valley.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              His career spans industry giants like <span className="text-gray-900 font-semibold">Hitti</span> and <span className="text-gray-900 font-semibold">Apple Somerset West</span>, giving him unrivalled knowledge of tools, gas, safety equipment, and what local businesses truly need.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Today, <span className="text-gray-900 font-semibold">Elgin Tool & Gas</span> brings that expertise directly to your door — serving farms, workshops, homes, and businesses across Grabouw, Botriver, and Villiersdorp with speed, reliability, and a personal touch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle size={18} className="text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white border border-gray-200 rounded-3xl p-10 overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-600/5 rounded-full blur-2xl" />

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-orange-500/30">
                  <User size={44} className="text-orange-500" />
                </div>
                <h3 className="text-2xl font-black text-gray-900 mb-1">Jeremy</h3>
                <p className="text-orange-500 font-semibold mb-6">Owner & Industrial Expert</p>

                <div className="grid grid-cols-3 gap-6 mb-8">
                  {[
                    { value: "25+", label: "Years Exp." },
                    { value: "100%", label: "Dedicated" },
                    { value: "Afrox", label: "Approved" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-2xl font-black text-orange-500">{stat.value}</div>
                      <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <blockquote className="text-gray-500 text-sm italic leading-relaxed border-l-2 border-orange-500 pl-4 text-left">
                  "I've spent my career making sure people have the right tools and gas when they need it. Elgin Tool & Gas is my way of bringing that same commitment home to our community."
                </blockquote>
                <p className="text-orange-500 font-semibold text-sm mt-3 text-left">— Jeremy, Founder</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
