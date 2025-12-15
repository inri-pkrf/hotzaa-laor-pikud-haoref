import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Sparkles, FileText, ChevronLeft, ChevronRight, MessageCircle, Palette, Circle } from "lucide-react";

export default function ProductCard({ product, categoryColor, index }) {
  // Function to get color type based on product code
  const getColorType = (code) => {
    if (!code) return null;
    const codeNum = code.toString();
    
    const colorCodes = ['101', '103', '104', '107', '109', '201', '202', '203', '204', '205', '206', '207', '301', '302', '303', '304', '401', '402', '403', '404', '405', '501', '504', '505', '506'];
    const bwCodes = ['102', '106'];
    const sublimationCodes = ['502', '503'];
    
    if (colorCodes.includes(codeNum)) return 'color';
    if (bwCodes.includes(codeNum)) return 'bw';
    if (sublimationCodes.includes(codeNum)) return 'sublimation';
    
    return null;
  };
  
  const colorType = getColorType(product.code);
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

  // Helper function to lighten/darken color
  const adjustColor = (color, amount) => {
    const clamp = (num) => Math.min(255, Math.max(0, num));
    const rgbMatch = color.match(/\d+/g);
    if (!rgbMatch) return color;
    
    const [r, g, b] = rgbMatch.map(Number);
    return `rgb(${clamp(r + amount)}, ${clamp(g + amount)}, ${clamp(b + amount)})`;
  };

  // Create gradient colors based on category color
  const gradientStart = categoryColor;
  const gradientEnd = adjustColor(categoryColor, -40);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group bg-white h-full flex flex-col border-0 shadow-lg" style={{ height: "550px" }}>
        {/* Image Section with Carousel */}
        <div className="relative overflow-hidden" style={{ height: "280px" }}>
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
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-4 py-2 rounded-full z-10">
                <span className="text-xs font-bold text-white tracking-wider">{product.code}</span>
                {colorType === 'color' && (
                  <div className="flex items-center gap-1">
                    <Circle className="w-2.5 h-2.5 fill-red-500 text-red-500" />
                    <Circle className="w-2.5 h-2.5 fill-yellow-400 text-yellow-400" />
                    <Circle className="w-2.5 h-2.5 fill-blue-500 text-blue-500" />
                  </div>
                )}
                {colorType === 'bw' && (
                  <div className="flex items-center gap-1">
                    <Circle className="w-2.5 h-2.5 fill-white text-white" />
                    <Circle className="w-2.5 h-2.5 fill-gray-800 text-gray-800" />
                  </div>
                )}
                {colorType === 'sublimation' && (
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                )}
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 space-y-3 flex-1 flex flex-col">
          {/* Title */}
          <h3 className="text-xl text-gray-900 text-center leading-tight font-['Assistant']">
            {product.title}
          </h3>

          {/* Details with Icons - Compact */}
          <div className="space-y-2 text-right">
            {product.size && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <FileText className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">גודל:</span>
                  <span className="text-sm mr-1.5">{product.size}</span>
                </div>
              </div>
            )}
            {product.binding && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <BookOpen className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">כריכה:</span>
                  <span className="text-sm mr-1.5">{product.binding}</span>
                </div>
              </div>
            )}
            {product.front_cover && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <BookOpen className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">חזית:</span>
                  <span className="text-sm mr-1.5">{product.front_cover}</span>
                </div>
              </div>
            )}
            {product.back_cover && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <BookOpen className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">גב:</span>
                  <span className="text-sm mr-1.5">{product.back_cover}</span>
                </div>
              </div>
            )}
            {product.finish && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">גימור:</span>
                  <span className="text-sm mr-1.5">{product.finish}</span>
                </div>
              </div>
            )}
            {product.pages && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <FileText className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">כמות דפים:</span>
                  <span className="text-sm mr-1.5">{product.pages}</span>
                </div>
              </div>
            )}
            {product.printing && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">הדפסה:</span>
                  <span className="text-sm mr-1.5">{product.printing}</span>
                </div>
              </div>
            )}
            {product.height && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <FileText className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">גובה:</span>
                  <span className="text-sm mr-1.5">{product.height}</span>
                </div>
              </div>
            )}
            {product.width && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <FileText className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">רוחב:</span>
                  <span className="text-sm mr-1.5">{product.width}</span>
                </div>
              </div>
            )}
            {product.length && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <FileText className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">אורך:</span>
                  <span className="text-sm mr-1.5">{product.length}</span>
                </div>
              </div>
            )}
            {product.thickness && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <FileText className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">עובי:</span>
                  <span className="text-sm mr-1.5">{product.thickness}</span>
                </div>
              </div>
            )}
            {product.diameter && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <FileText className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">קוטר:</span>
                  <span className="text-sm mr-1.5">{product.diameter}</span>
                </div>
              </div>
            )}
            {product.print_area && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <FileText className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">שטח הדפסה:</span>
                  <span className="text-sm mr-1.5">{product.print_area}</span>
                </div>
              </div>
            )}
            {product.color && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">צבע:</span>
                  <span className="text-sm mr-1.5">{product.color}</span>
                </div>
              </div>
            )}
            {product.paper && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <FileText className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">נייר:</span>
                  <span className="text-sm mr-1.5">{product.paper}</span>
                </div>
              </div>
            )}
            {product.material && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <Sparkles className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">חומר:</span>
                  <span className="text-sm mr-1.5">{product.material}</span>
                </div>
              </div>
            )}
            {product.note && (
              <div className="flex items-center gap-2.5 text-gray-700">
                <FileText className="w-5 h-5 flex-shrink-0" style={{ color: categoryColor }} />
                <div className="flex-1">
                  <span className="text-sm font-bold">הערה:</span>
                  <span className="text-sm mr-1.5">{product.note}</span>
                </div>
              </div>
            )}
            </div>

          {/* Price Section */}
          {product.price_info && (
            <div className="relative overflow-hidden rounded-xl p-3 mt-auto">
              {/* Animated Background with Category Color Gradient */}
              <div 
                className="absolute inset-0"
                style={{ 
                  background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})` 
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10">
                <p className="text-xs text-white/90 text-center mb-0.5 font-medium">מחיר ליחידה</p>
                <p className="text-lg font-bold text-white text-center drop-shadow-lg">
                  {product.price_info}
                </p>
              </div>

              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/10 rounded-full blur-xl" />
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-2">
            {/* WhatsApp Button with Category Color */}
            <motion.button
              onClick={handleWhatsApp}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 text-white py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ 
                background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})` 
              }}
            >
              <MessageCircle className="w-4 h-4" />
              <span>הזמינו עכשיו</span>
            </motion.button>

            {/* Download Button */}
            {product.template_file && (
              <motion.button
                onClick={handleDownload}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-white border-2 text-gray-700 py-2.5 rounded-xl font-medium text-sm hover:text-white transition-all duration-300"
                style={{ 
                  borderColor: categoryColor,
                  color: categoryColor
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`;
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'white';
                  e.currentTarget.style.color = categoryColor;
                }}
              >
                <Download className="w-4 h-4" />
                <span>הורדת גריד</span>
              </motion.button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}