
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { id: 1, name: "ספרים וחוברות", color: "rgb(39, 64, 111)" },
  { id: 2, name: "מחברות ופנקסים", color: "rgb(255, 180, 80)" },
  { id: 3, name: "תעודות וברכות", color: "rgb(98, 100, 100)" },
  { id: 4, name: "מדבקות ורולאפ", color: "rgb(153, 24, 99)" },
  { id: 5, name: "הדפסה על מוצרים", color: "rgb(67, 187, 144)" },
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavigation = (page, section) => {
    setIsMobileMenuOpen(false);
    
    if (page === "Home" && !section) {
      // לחיצה על "עמוד הבית" - תמיד עובר לעמוד הבית
      window.location.href = createPageUrl("Home");
    } else if (currentPageName === "Home" && section) {
      // אנחנו בעמוד הבית, רק צריך לגלול
      setTimeout(() => scrollToSection(section), 100);
    } else if (page === "Home" && section) {
      // עובר לעמוד הבית עם סקשן
      window.location.href = createPageUrl("Home") + "#" + section;
    } else {
      // עובר לעמוד אחר בלי סקשן
      window.location.href = createPageUrl(page);
    }
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
            <div className="flex items-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/5d0ed06d1_collegeLogoText.png"
                alt="לוגו המכללה"
                className="h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <button
                onClick={() => handleNavigation("Home")}
                className="text-gray-700 font-medium transition-colors cursor-pointer"
              >
                עמוד הבית
              </button>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 font-medium transition-colors cursor-pointer">
                  המוצרים שלנו
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.id} asChild>
                      <Link
                        to={`${createPageUrl("Category")}?id=${category.id}`}
                        className="cursor-pointer"
                      >
                        <div
                          className="w-3 h-3 rounded-full ml-2"
                          style={{ backgroundColor: category.color }}
                        />
                        {category.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
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
            <div className="flex items-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/9d0f053f3_.png"
                alt="לוגו הוצאה לאור"
                className="h-16 w-auto"
              />
            </div>

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
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => handleNavigation("Home")}
                className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
              >
                עמוד הבית
              </button>

              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-gray-500 mb-2">
                  המוצרים שלנו
                </p>
                <div className="space-y-2 pr-4">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={`${createPageUrl("Category")}?id=${category.id}`}
                      className="flex items-center gap-2 text-gray-700 py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: category.color }}
                      />
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleNavigation("Home", "process")}
                className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
              >
                תהליך עבודה
              </button>

              <button
                onClick={() => handleNavigation("Home", "gallery")}
                className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
              >
                גלריית עבודות
              </button>

              <button
                onClick={() => handleNavigation("Contact")}
                className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
              >
                יצירת קשר
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-l from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold mb-2">קטלוג מוצרים</h3>
              <p className="text-gray-300">לוגו 2025</p>
            </div>
            <div className="flex gap-8">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/5d0ed06d1_collegeLogoText.png"
                alt="לוגו המכללה"
                className="h-16 w-auto"
              />
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/9d0f053f3_.png"
                alt="לוגו הוצאה לאור"
                className="h-16 w-auto"
              />
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2025 הוצאה לאור פיקוד העורף. כל הזכויות שמורות.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
