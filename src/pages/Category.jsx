import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Category() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get("id");

  // This is a placeholder - you'll add the actual category content later
  const categories = {
    1: { name: "ספרים וחוברות", color: "#00BFA5" },
    2: { name: "מחברות ופנקסים", color: "#C2185B" },
    3: { name: "תעודות וברכות", color: "#757575" },
    4: { name: "מדבקות ורולאפ", color: "#FF9800" },
    5: { name: "הדפסה על מוצרים", color: "#1E3A8A" },
  };

  const category = categories[categoryId];

  if (!category) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <p className="text-2xl text-gray-600">קטגוריה לא נמצאה</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, ${category.color}dd, ${category.color})`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={createPageUrl("Home")}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            חזרה לעמוד הבית
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            {category.name}
          </motion.h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xl text-gray-600 mb-8">
              תוכן הקטגוריה יתווסף בהמשך...
            </p>
            <Link
              to={createPageUrl("Contact")}
              className="inline-block bg-gradient-to-l from-blue-600 to-blue-700 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              יצירת קשר
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}