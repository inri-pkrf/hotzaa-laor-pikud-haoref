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
      className="group h-full"
    >
      <Link to={`${createPageUrl("Category")}?id=${category.id}`} className="block h-full">
        <div
          className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 h-full"
          style={{ aspectRatio: "3/4", minHeight: "400px" }}
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
          <div className="relative h-full p-6 flex flex-col justify-between">
            <div>
              {/* Icon */}
              <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <category.icon className="w-7 h-7 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                {category.name}
              </h3>

              {/* Description */}
              <p className="text-white/90 text-base leading-relaxed line-clamp-4">
                {category.description}
              </p>
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300 mt-4">
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