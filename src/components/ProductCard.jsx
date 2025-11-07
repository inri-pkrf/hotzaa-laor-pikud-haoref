import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Sparkles, FileText, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";

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

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`שלום, אני מעוניין להזמין את המוצר: ${product.title}${product.code ? ` (קוד: ${product.code})` : ''}`);
    window.open(`https://wa.me/972501234567?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-white h-full flex flex-col border-0 shadow-lg" style={{ height: "650px" }}>
        {/* Image Section with Carousel */}
        <div className="relative overflow-hidden" style={{ height: "320px" }}>
          {/* Carousel Images */}
          <div className="relative h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-50">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={allImages[currentImageIndex]}
                alt={`${product.title} - ${currentImageIndex + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Arrows */}
            {allImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all z-10 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/95 hover:bg-white rounded-full flex items-center justify-center shadow-xl transition-all z-10 backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
              </>
            )}

            {/* Dots Indicator */}
            {allImages.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {allImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? "bg-white w-8 shadow-lg"
                        : "bg-white/60 hover:bg-white/80 w-2"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Product Code Badge */}
            {product.code && (
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full z-10">
                <span className="text-xs font-bold text-white tracking-wider">{product.code}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-5 flex-1 flex flex-col bg-gradient-to-b from-white to-gray-50/30">
          {/* Title */}
          <h3 className="text-2xl text-gray-900 text-center leading-tight font-['Assistant']">
            {product.title}
          </h3>

          {/* Details Grid with Icons */}
          <div className="space-y-3 flex-1">
            {product.binding && (
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-700 bg-white rounded-xl p-3 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-5 h-5 text-[rgb(34,179,225)]" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold text-gray-500">כריכה</span>
                  <p className="text-sm text-gray-900 font-medium">{product.binding}</p>
                </div>
              </motion.div>
            )}
            {product.finish && (
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-700 bg-white rounded-xl p-3 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-[rgb(34,179,225)]" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold text-gray-500">גימור</span>
                  <p className="text-sm text-gray-900 font-medium">{product.finish}</p>
                </div>
              </motion.div>
            )}
            {product.pages && (
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-3 text-gray-700 bg-white rounded-xl p-3 shadow-sm border border-gray-100"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-[rgb(34,179,225)]" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-semibold text-gray-500">עמודים</span>
                  <p className="text-sm text-gray-900 font-medium">{product.pages}</p>
                </div>
              </motion.div>
            )}
          </div>

          {/* Price Section */}
          {product.price_info && (
            <div className="bg-gradient-to-l from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100">
              <p className="text-sm text-gray-600 text-center mb-1">מחיר ליחידה</p>
              <p className="text-xl font-bold text-[#2B3E6F] text-center">
                {product.price_info}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            {/* WhatsApp Button */}
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#25D366] to-[#20BD5A] text-white py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span>הזמינו עכשיו בווטסאפ</span>
            </motion.button>

            {/* Download Button */}
            {product.template_file && (
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-xl font-medium hover:border-[rgb(34,179,225)] hover:text-[rgb(34,179,225)] transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                <span className="text-sm">הורדת גריד מוכן להדפסה</span>
              </motion.button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}