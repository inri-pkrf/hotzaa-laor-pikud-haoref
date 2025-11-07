import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Sparkles, FileText, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProductCard({ product, index }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Combine main image with additional images
  const allImages = [product.image, ...(product.images || [])].filter(Boolean);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const handleDownload = () => {
    if (product.template_file) {
      window.open(product.template_file, '_blank');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white h-full flex flex-col" style={{ height: "600px" }}>
        {/* Image Section with Carousel */}
        <div className="relative bg-gradient-to-br from-[#2B3E6F] to-[#1a2847] overflow-hidden" style={{ height: "280px" }}>
          {/* Code Badge */}
          {product.code && (
            <div className="absolute top-4 right-4 bg-white px-3 py-1.5 rounded-lg shadow-md z-20">
              <span className="text-xs font-bold text-gray-900">{product.code}</span>
            </div>
          )}

          {/* Carousel Images */}
          <div className="relative h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={allImages[currentImageIndex]}
                alt={`${product.title} - ${currentImageIndex + 1}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="max-h-full max-w-full object-contain p-4"
                style={{ maxHeight: "240px" }}
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all z-10"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {allImages.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {allImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-4 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 text-center leading-tight">
            {product.title}
          </h3>

          {/* Details with Icons */}
          <div className="space-y-2.5 text-right flex-1">
            {product.binding && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold">כריכה:</span>
                  <span className="text-sm mr-1.5">{product.binding}</span>
                </div>
              </div>
            )}
            {product.finish && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold">גימור:</span>
                  <span className="text-sm mr-1.5">{product.finish}</span>
                </div>
              </div>
            )}
            {product.pages && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-4 h-4 text-green-600" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold">עמודים:</span>
                  <span className="text-sm mr-1.5">{product.pages}</span>
                </div>
              </div>
            )}
          </div>

          {/* Price Section */}
          {product.price_info && (
            <div className="bg-gradient-to-l from-blue-50 to-blue-100 rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-[#2B3E6F]">
                {product.price_info}
              </p>
            </div>
          )}

          {/* Footer - Code & Download */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
            <div className="text-sm text-gray-600 font-medium">
              {product.code && <span>קוד: {product.code}</span>}
            </div>
            {product.template_file && (
              <Button
                onClick={handleDownload}
                variant="outline"
                size="sm"
                className="gap-2 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300"
              >
                <Download className="w-4 h-4" />
                <span className="text-xs font-medium">הורד דוגמא</span>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}