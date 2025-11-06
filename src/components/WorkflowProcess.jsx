import React from "react";
import { motion } from "framer-motion";
import { FileText, DollarSign, CheckCircle, Package, ArrowLeft } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "מילוי טבלת הזמנת עבודה ושליחתה לבית הדפוס",
    subtitle: "(במחשב סודי) ולצד זה אישור בטיחון מידע",
    icon: FileText,
    color: "rgb(0, 88, 131)",
  },
  {
    number: "02",
    title: "קבלת הצגת מחיר מבית הדפוס",
    subtitle: "",
    icon: DollarSign,
    color: "rgb(0, 88, 131)",
  },
  {
    number: "03",
    title: "אישור תקציב יחידתי + התחלת עבודה",
    subtitle: "",
    icon: CheckCircle,
    color: "rgb(0, 88, 131)",
  },
  {
    number: "04",
    title: "קבלת עבודה עד 14 ימי עסקים",
    subtitle: "",
    icon: Package,
    color: "rgb(0, 88, 131)",
  },
];

export default function WorkflowProcess() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="relative group"
          >
            <div
              className="relative bg-white rounded-2xl p-8 shadow-xl border-2 transition-all duration-300 hover:shadow-2xl overflow-hidden h-full"
              style={{ borderColor: step.color }}
            >
              {/* Background Pattern */}
              <div className="absolute top-0 left-0 w-32 h-32 opacity-5">
                <step.icon className="w-full h-full" />
              </div>

              {/* Step Number */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                className="absolute top-4 left-4 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                style={{ 
                  backgroundColor: step.color,
                  color: 'white'
                }}
              >
                {step.number}
              </motion.div>

              {/* Icon */}
              <div className="mb-6 relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: `${step.color}15` }}
                >
                  <step.icon className="w-10 h-10" style={{ color: step.color }} />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {step.title}
                </h3>
                {step.subtitle && (
                  <p className="text-base text-gray-600 leading-relaxed">{step.subtitle}</p>
                )}
              </div>

              {/* Arrow Indicator */}
              {index < steps.length - 1 && index % 2 === 0 && (
                <motion.div
                  className="hidden md:block absolute -left-4 top-1/2 transform -translate-y-1/2 z-20"
                  animate={{ x: [0, 10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: step.color }}>
                    <ArrowLeft className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              )}

              {/* Hover Effect Overlay */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
                style={{ backgroundColor: step.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeline for Mobile */}
      <div className="md:hidden mt-8 flex justify-center">
        <div className="flex items-center gap-2">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: step.color }}
              />
              {index < steps.length - 1 && (
                <div className="w-8 h-0.5" style={{ backgroundColor: `${step.color}40` }} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}