import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowLeft } from "lucide-react";

export default function CategoryCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`${createPageUrl("Category")}?id=${category.id}`}>
        <div
          className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105"
          style={{ minHeight: "320px" }}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="relative h-full p-8 flex flex-col justify-between" style={{ minHeight: "320px" }}>
            <div>
              {/* Icon */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <category.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-white mb-3">
                {category.name}
              </h3>

              {/* Description */}
              <p className="text-white/90 text-lg leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
              <span>למוצרים</span>
              <ArrowLeft className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </Link>
    </motion.div>
  );
}