import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import {
  Menu,
  X,
  ChevronDown,
  Book,
  NotebookPen,
  Award,
  Tag,
  Printer,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { id: 1, name: "ספרים וחוברות", color: "rgb(39, 64, 111)", icon: Book },
  { id: 2, name: "מחברות ופנקסים", color: "rgb(255, 180, 80)", icon: NotebookPen },
  { id: 3, name: "תעודות וברכות", color: "rgb(98, 100, 100)", icon: Award },
  { id: 4, name: "מדבקות ורולאפ", color: "rgb(153, 24, 99)", icon: Tag },
  { id: 5, name: "הדפסה על מוצרים", color: "rgb(67, 187, 144)", icon: Printer },
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (page, section) => {
    setIsMobileMenuOpen(false);
    
    if (page === "Home" && !section) {
      // Navigate to home page
      window.location.href = createPageUrl("Home");
    } else if (section) {
      // Navigate to home page with hash
      window.location.href = createPageUrl("Home") + "#" + section;
    } else {
      // Navigate to other page
      window.location.href = createPageUrl(page);
    }
  };

  const handleCategoryClick = (categoryId) => {
    setIsMobileMenuOpen(false);
    window.location.href = `${createPageUrl("Category")}?id=${categoryId}`;
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/972529322925', '_blank');
  };

  const isHomePage = currentPageName === "Home";

  return (
    <div className="min-h-screen bg-[#FAFAF9]" dir="rtl">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Karantina:wght@300;400;700&family=Assistant:wght@200;300;400;500;600;700;800&display=swap');
        
        * {
          direction: rtl;
        }
        body {
          font-family: 'Assistant', sans-serif;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Karantina', cursive;
        }
        
        nav button:hover,
        nav a:hover {
          color: rgb(34, 179, 225) !important;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Right Logo - מכללה */}
            <button onClick={() => handleNavigation("Home")} className="flex items-center cursor-pointer">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/5d0ed06d1_collegeLogoText.png"
                alt="לוגו המכללה"
                className="h-16 w-auto"
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => handleNavigation("Home")}
                className="text-gray-700 font-medium transition-colors cursor-pointer"
              >
                עמוד הבית
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 font-medium transition-colors cursor-pointer outline-none">
                  המוצרים שלנו
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="w-72 p-4 bg-white/95 backdrop-blur-xl border-gray-200/50 shadow-2xl rounded-2xl"
                >
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <DropdownMenuItem key={category.id} asChild>
                        <button
                          onClick={() => handleCategoryClick(category.id)}
                          className="flex items-center gap-4 cursor-pointer px-4 py-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-l hover:from-gray-50 hover:to-white group w-full"
                        >
                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl"
                            style={{ backgroundColor: category.color }}
                          >
                            <category.icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                            {category.name}
                          </span>
                        </button>
                      </DropdownMenuItem>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={() => handleNavigation("Home", "process")}
                className="text-gray-700 font-medium transition-colors cursor-pointer"
              >
                תהליך עבודה
              </button>

              <button
                onClick={() => handleNavigation("Home", "gallery")}
                className="text-gray-700 font-medium transition-colors cursor-pointer"
              >
                גלריית עבודות
              </button>

              <button
                onClick={() => handleNavigation("Contact")}
                className="text-gray-700 font-medium transition-colors cursor-pointer"
              >
                יצירת קשר
              </button>
            </div>

            {/* Left Logo - הוצאה לאור */}
            <button onClick={() => handleNavigation("Home")} className="flex items-center cursor-pointer">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/977407d91_-.png"
                alt="לוגו הוצאה לאור"
                className="h-16 w-auto"
              />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t shadow-2xl"
          >
            <div className="px-4 py-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <button
                onClick={() => handleNavigation("Home")}
                className="block w-full text-right px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-all"
              >
                עמוד הבית
              </button>

              <div className="py-2">
                <p className="text-sm font-bold text-gray-900 mb-4 px-4">
                  המוצרים שלנו
                </p>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-4 w-full px-4 py-4 rounded-xl transition-all duration-300 hover:bg-gradient-to-l hover:from-gray-50 hover:to-white group"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl flex-shrink-0"
                        style={{ backgroundColor: category.color }}
                      >
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors text-right">
                        {category.name}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNavigation("Home", "process")}
                className="block w-full text-right px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-all"
              >
                תהליך עבודה
              </button>

              <button
                onClick={() => handleNavigation("Home", "gallery")}
                className="block w-full text-right px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-all"
              >
                גלריית עבודות
              </button>

              <button
                onClick={() => handleNavigation("Contact")}
                className="block w-full text-right px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-xl font-medium transition-all"
              >
                יצירת קשר
              </button>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer with CTA */}
      <footer>
        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16"
          style={{ background: 'linear-gradient(135deg, #1a472a, #2B3E6F)' }}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                מוכנים להתחיל?
              </h2>
              <p className="text-lg text-white/90 mb-6">
                צרו איתנו קשר עוד היום ונשמח לסייע לכם בכל פרויקט
              </p>
              <motion.button
                onClick={handleWhatsApp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#20BD5A] transform transition-all duration-200 shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgb(37,211,102,0.5)]"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                פנו אלינו בווטסאפ
              </motion.button>
            </motion.div>
          </div>
        </motion.section>

        {/* Footer Info */}
        <div className="bg-gray-200 text-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-6">
              {/* Logo */}
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/977407d91_-.png"
                alt="לוגו הוצאה לאור"
                className="h-20 w-auto"
              />
              
              {/* Catalog Text */}
              <h3 className="text-2xl font-bold text-gray-900">קטלוג מוצרים</h3>
              
              {/* Copyright */}
              <p className="text-sm text-gray-600">
                כל הזכויות שמורות להוצאה לאור פיקוד העורף © 2025
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}