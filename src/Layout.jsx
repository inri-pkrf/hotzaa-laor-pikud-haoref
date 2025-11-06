import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  { id: 1, name: "ספרים וחוברות", color: "#00BFA5" },
  { id: 2, name: "מחברות ופנקסים", color: "#C2185B" },
  { id: 3, name: "תעודות וברכות", color: "#757575" },
  { id: 4, name: "מדבקות ורולאפ", color: "#FF9800" },
  { id: 5, name: "הדפסה על מוצרים", color: "#1E3A8A" },
];

export default function Layout({ children, currentPageName }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
    setIsMobileMenuOpen(false);
  };

  const isHomePage = currentPageName === "Home";

  return (
    <div className="min-h-screen bg-[#FAFAF9]" dir="rtl">
      <style>{`
        * {
          direction: rtl;
        }
        body {
          font-family: 'Heebo', 'Rubik', sans-serif;
        }
      `}</style>

      {/* Navigation */}
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/5d0ed06d1_collegeLogoText.png"
                alt="לוגו המכללה"
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {isHomePage ? (
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  עמוד הבית
                </button>
              ) : (
                <Link
                  to={createPageUrl("Home")}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  עמוד הבית
                </Link>
              )}

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors">
                  המוצרים שלנו
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.id} asChild>
                      <Link
                        to={createPageUrl("Category", `?id=${category.id}`)}
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

              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("process")}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    תהליך עבודה
                  </button>
                  <button
                    onClick={() => scrollToSection("gallery")}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    גלריית עבודות
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to={createPageUrl("Home") + "#process"}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    תהליך עבודה
                  </Link>
                  <Link
                    to={createPageUrl("Home") + "#gallery"}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    גלריית עבודות
                  </Link>
                </>
              )}

              <Link
                to={createPageUrl("Contact")}
                className="bg-gradient-to-l from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                יצירת קשר
              </Link>
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
              {isHomePage ? (
                <button
                  onClick={() => scrollToSection("home")}
                  className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                >
                  עמוד הבית
                </button>
              ) : (
                <Link
                  to={createPageUrl("Home")}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  עמוד הבית
                </Link>
              )}

              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-gray-500 mb-2">
                  המוצרים שלנו
                </p>
                <div className="space-y-2 pr-4">
                  {categories.map((category) => (
                    <Link
                      key={category.id}
                      to={createPageUrl("Category", `?id=${category.id}`)}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600 py-1"
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

              {isHomePage ? (
                <>
                  <button
                    onClick={() => scrollToSection("process")}
                    className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                  >
                    תהליך עבודה
                  </button>
                  <button
                    onClick={() => scrollToSection("gallery")}
                    className="block w-full text-right px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                  >
                    גלריית עבודות
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to={createPageUrl("Home") + "#process"}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    תהליך עבודה
                  </Link>
                  <Link
                    to={createPageUrl("Home") + "#gallery"}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    גלריית עבודות
                  </Link>
                </>
              )}

              <Link
                to={createPageUrl("Contact")}
                className="block mx-4 text-center bg-gradient-to-l from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                יצירת קשר
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-gradient-to-l from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
            <div>
              <h3 className="text-xl font-bold mb-4">הוצאה לאור פיקוד העורף</h3>
              <p className="text-gray-300">בית הדפוס וההוצאה לאור בשבילך</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">קישורים מהירים</h4>
              <div className="space-y-2">
                <Link
                  to={createPageUrl("Home")}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  עמוד הבית
                </Link>
                <Link
                  to={createPageUrl("Contact")}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  יצירת קשר
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/9d0f053f3_.png"
                alt="לוגו"
                className="h-20 mx-auto md:mr-0"
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