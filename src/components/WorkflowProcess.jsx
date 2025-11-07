import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, DollarSign, CheckCircle, Package } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "מילוי טבלת הזמנת עבודה",
    subtitle: "(במחשב סודי) + אישור בטיחון מידע",
    icon: FileText,
    color: "rgb(34, 179, 225)",
  },
  {
    number: "02",
    title: "קבלת הצגת מחיר",
    subtitle: "תוך 48 שעות",
    icon: DollarSign,
    color: "rgb(168, 85, 247)",
  },
  {
    number: "03",
    title: "אישור תקציב + התחלת עבודה",
    subtitle: "אישור סופי והעברה לייצור",
    icon: CheckCircle,
    color: "rgb(34, 197, 94)",
  },
  {
    number: "04",
    title: "קבלת עבודה",
    subtitle: "עד 14 ימי עסקים",
    icon: Package,
    color: "rgb(249, 115, 22)",
  },
];

export default function WorkflowProcess() {
  return (
    <div className="relative max-w-3xl mx-auto py-8">
      {/* Vertical Line */}
      <div className="absolute right-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-400 via-green-400 to-orange-400 transform translate-x-1/2" />

      <div className="space-y-6">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative"
          >
            <div className="flex items-center gap-8">
              {/* Content - Alternating sides */}
              <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right order-2'}`}>
                <motion.div
                  whileHover={{ scale: 1.05, x: index % 2 === 0 ? 10 : -10 }}
                  className="inline-block"
                >
                  <div className="bg-white rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-current max-w-xs"
                       style={{ borderColor: `${step.color}20` }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <step.icon className="w-5 h-5" style={{ color: step.color }} />
                      </div>
                      <span 
                        className="text-3xl font-bold opacity-40"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.subtitle}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Center Dot */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                className="absolute right-1/2 transform translate-x-1/2 z-10"
              >
                <div 
                  className="w-12 h-12 rounded-full shadow-xl flex items-center justify-center relative"
                  style={{ 
                    background: `linear-gradient(135deg, ${step.color}, ${step.color}dd)`,
                  }}
                >
                  <span className="text-xl font-bold text-white">{step.number}</span>
                  
                  {/* Pulse effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: step.color }}
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Connecting line segment */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.5, duration: 0.4 }}
                className="absolute right-1/2 transform translate-x-1/2 w-0.5 bg-gradient-to-b from-current to-transparent h-6 top-full"
                style={{ color: step.color }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}