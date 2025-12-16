import React from "react";
import { motion } from "framer-motion";
import { FileText, DollarSign, CheckCircle, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "מילוי טבלת הזמנת עבודה",
    subtitle: "(במחשב סודי) + אישור בטיחון מידע",
    icon: FileText,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    number: "02",
    title: "קבלת הצעת מחיר מבית הדפוס",
    subtitle: "",
    icon: DollarSign,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    number: "03",
    title: "אישור תקציב + התחלת עבודה",
    subtitle: "אישור סופי והעברה לייצור",
    icon: CheckCircle,
    gradient: "from-green-500 to-emerald-600",
  },
  {
    number: "04",
    title: "קבלת עבודה",
    subtitle: "עד 14 ימי עסקים",
    icon: Package,
    gradient: "from-orange-500 to-red-600",
  },
];

export default function WorkflowProcess() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ 
            duration: 0.6, 
            delay: index * 0.15,
            type: "spring",
            stiffness: 100
          }}
          className="relative"
        >
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative"
          >
            {/* Card */}
            <div className={`relative bg-gradient-to-br ${step.gradient} rounded-3xl p-10 shadow-2xl overflow-hidden group`}>
              {/* Background Pattern with Icons - Organized Grid */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                {[...Array(20)].map((_, i) => {
                  const row = Math.floor(i / 5);
                  const col = i % 5;
                  return (
                    <step.icon
                      key={i}
                      className="absolute text-white"
                      style={{
                        width: "80px",
                        height: "80px",
                        top: `${row * 25}%`,
                        left: `${col * 20}%`,
                        transform: "rotate(45deg)",
                      }}
                    />
                  );
                })}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Number Badge - Top Right */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  className="absolute top-0 right-0 flex items-center justify-center w-20 h-20 bg-white/30 backdrop-blur-md rounded-full shadow-xl"
                >
                  <span className="text-4xl font-bold text-white">{step.number}</span>
                </motion.div>

                {/* Text Content - Centered */}
                <div className="text-center pt-16 pb-4">
                  {/* Title */}
                  <h3 className="text-4xl text-white mb-3 leading-tight drop-shadow-lg font-['Assistant']" style={{ fontWeight: 400 }}>
                    {step.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-lg text-white/95 leading-relaxed drop-shadow-md">
                    {step.subtitle}
                  </p>

                  {/* Bottom decoration line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.5, duration: 0.8 }}
                    className="mt-8 h-1 bg-white/40 rounded-full mx-auto"
                    style={{ width: "50%" }}
                  />
                </div>
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
            </div>
          </motion.div>

          {/* Connector Arrow (except for last item) */}
          {index < steps.length - 1 && (
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 + 0.6, duration: 0.4 }}
              className="flex justify-center py-4"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full relative"
              >
                {/* Arrow tip */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">
                  <div className="w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-gray-400" />
                </div>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}