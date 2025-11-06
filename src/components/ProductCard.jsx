import React from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white">
        {/* Image Section */}
        <div className="relative bg-gradient-to-br from-[#2B3E6F] to-[#1a2847] p-8 overflow-hidden">
          {/* Code Badge */}
          {product.code && (
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-md">
              <span className="text-sm font-bold text-gray-900">{product.code}</span>
            </div>
          )}

          {/* Print Icon Badge */}
          <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-[#2B3E6F]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
            </svg>
          </div>

          {/* Product Image */}
          <div className="relative z-10 flex items-center justify-center py-8">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-64 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300 shadow-2xl"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 text-center">
            {product.title}
          </h3>

          {/* Details */}
          <div className="space-y-2 text-right text-gray-700">
            {product.binding && (
              <p className="text-base">
                <span className="font-semibold">כריכה:</span> {product.binding}
              </p>
            )}
            {product.finish && (
              <p className="text-base">
                <span className="font-semibold">גימור:</span> {product.finish}
              </p>
            )}
            {product.pages && (
              <p className="text-base">
                <span className="font-semibold">עמודים:</span> {product.pages}
              </p>
            )}
            {product.detailed_description && (
              <p className="text-sm text-gray-600 leading-relaxed border-t pt-3 mt-3">
                {product.detailed_description}
              </p>
            )}
          </div>

          {/* Price Section */}
          {product.price_info && (
            <div className="bg-gradient-to-l from-blue-50 to-blue-100 rounded-xl p-4 text-center">
              <p className="text-xl font-bold text-[#2B3E6F]">
                {product.price_info}
              </p>
            </div>
          )}
        </div>
      </Card>
    </motion.div>
  );
}