import React from "react";
import { motion } from "framer-motion";
import { FileText, DollarSign, CheckCircle, Package, ArrowDown } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "מילוי טבלת הזמנת עבודה ושליחתה לבית הדפוס",
    subtitle: "(במחשב סודי) ולצד זה אישור בטיחון מידע",
    icon: FileText,
    color: "rgb(34, 179, 225)",
    bgGradient: "from-cyan-500 to-blue-500",
  },
  {
    number: "02",
    title: "קבלת הצגת מחיר מבית הדפוס",
    subtitle: "תוך 48 שעות תקבלו הצעת מחיר מפורטת",
    icon: DollarSign,
    color: "rgb(168, 85, 247)",
    bgGradient: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    title: "אישור תקציב יחידתי + התחלת עבודה",
    subtitle: "אישור סופי והעברה לשלב הייצור",
    icon: CheckCircle,
    color: "rgb(34, 197, 94)",
    bgGradient: "from-green-500 to-emerald-500",
  },
  {
    number: "04",
    title: "קבלת עבודה עד 14 ימי עסקים",
    subtitle: "משלוח מהיר ואמין עד אליכם",
    icon: Package,
    color: "rgb(249, 115, 22)",
    bgGradient: "from-orange-500 to-red-500",
  },
];

export default function WorkflowProcess() {
  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Vertical Line */}
      <div className="absolute right-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-purple-400 via-green-400 to-orange-400 hidden md:block transform translate-x-1/2" />

      <div className="space-y-8">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {/* Step Card */}
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className={`relative bg-gradient-to-br ${step.bgGradient} rounded-3xl p-8 shadow-2xl overflow-hidden group`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -mr-20 -mt-20" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full -ml-16 -mb-16" />
                </div>

                {/* Content - Centered */}
                <div className="relative z-10 text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                  >
                    <step.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Number */}
                  <div className="mb-3">
                    <span className="text-5xl font-bold text-white/40">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {step.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-white/90 text-base leading-relaxed">
                    {step.subtitle}
                  </p>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
              </motion.div>
            </motion.div>

            {/* Arrow Between Steps (except last) */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                className="flex justify-center"
              >
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-lg"
                >
                  <ArrowDown className="w-6 h-6 text-gray-600" />
                </motion.div>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}