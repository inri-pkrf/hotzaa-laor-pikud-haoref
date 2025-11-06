import React from "react";
import { motion } from "framer-motion";
import { FileText, DollarSign, CheckCircle, Package, ArrowDown } from "lucide-react";

const steps = [
  {
    title: "מילוי טבלת הזמנת עבודה ושליחתה לבית הדפוס",
    subtitle: "(במחשב סודי) ולצד זה אישור בטיחון מידע",
    icon: FileText,
    color: "rgb(0, 88, 131)",
  },
  {
    title: "קבלת הצגת מחיר מבית הדפוס",
    subtitle: "",
    icon: DollarSign,
    color: "rgb(0, 88, 131)",
  },
  {
    title: "אישור תקציב יחידתי + התחלת עבודה",
    subtitle: "",
    icon: CheckCircle,
    color: "rgb(0, 88, 131)",
  },
  {
    title: "קבלת עבודה עד 14 ימי עסקים",
    subtitle: "",
    icon: Package,
    color: "rgb(0, 88, 131)",
  },
];

export default function WorkflowProcess() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="space-y-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Step Card */}
            <div className="relative">
              <div
                className="bg-white rounded-xl p-6 shadow-lg border-2 transition-all duration-300 hover:shadow-xl"
                style={{ borderColor: step.color }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {step.title}
                    </h3>
                    {step.subtitle && (
                      <p className="text-base text-gray-600">{step.subtitle}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <motion.div
                  className="flex justify-center my-2"
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowDown
                    className="w-6 h-6"
                    style={{ color: step.color }}
                  />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}