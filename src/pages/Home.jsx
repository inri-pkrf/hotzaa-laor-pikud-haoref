import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CategoryCard from "../components/CategoryCard";
import WorkflowProcess from "../components/WorkflowProcess";
import { BookOpen, Book, Award, Sticker, Printer, FileText, Scroll, Notebook, Flame, Flag, Medal } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "ספרים וחוברות",
    description: "הדפסת ספרים איכותיים, חוברות מקצועיות ומודפסים שמשדרים איכות",
    color: "rgb(39, 64, 111)",
    icon: BookOpen,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/4a6837b07_Screenshot2025-11-06125614.png"
  },
  {
    id: 2,
    name: "מחברות ופנקסים",
    description: "מחברות ופנקסים מותאמים אישית לכל צורך - מעוצבים ומודפסים בקפידה",
    color: "rgb(255, 180, 80)",
    icon: Book,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/b4431795d_Screenshot2025-11-06125625.png"
  },
  {
    id: 3,
    name: "תעודות וברכות",
    description: "תעודות מעוצבות, כרטיסי ברכה ומוצרי נייר יוקרתיים לכל אירוע",
    color: "rgb(98, 100, 100)",
    icon: Award,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/6b230f223_Screenshot2025-11-06125636.png"
  },
  {
    id: 4,
    name: "מדבקות ורולאפ",
    description: "מדבקות איכותיות, רולאפים וחומרי שיווק מעוצבים במגוון גדלים",
    color: "rgb(153, 24, 99)",
    icon: Sticker,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/2300455d0_Screenshot2025-11-06125646.png"
  },
  {
    id: 5,
    name: "הדפסה על מוצרים",
    description: "הדפסה איכותית על מגוון מוצרים - ספלים, חולצות, תיקים ועוד",
    color: "rgb(67, 187, 144)",
    icon: Printer,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/88e13cc77_Screenshot2025-11-06125656.png"
  },
];

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80", span: "row-span-2" },
  { url: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80", span: "col-span-1" },
  { url: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80", span: "col-span-1" },
  { url: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&q=80", span: "col-span-2" },
  { url: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80", span: "col-span-1" },
  { url: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=80", span: "row-span-2" },
  { url: "https://images.unsplash.com/photo-1513001900722-370f803f498d?w=800&q=80", span: "col-span-1" },
  { url: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=800&q=80", span: "col-span-2" },
  { url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80", span: "col-span-1" },
  { url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", span: "col-span-1" },
  { url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80", span: "row-span-2" },
  { url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80", span: "col-span-1" },
];

const features = [
  { icon: Notebook, label: "מחברות", color: "rgb(255, 180, 80)" },
  { icon: FileText, label: "חוברות", color: "rgb(39, 64, 111)" },
  { icon: BookOpen, label: "ספר", color: "rgb(39, 64, 111)" },
  { icon: Flame, label: "סובלימציה", color: "rgb(67, 187, 144)" },
  { icon: Flag, label: "רולאפ", color: "rgb(153, 24, 99)" },
  { icon: Medal, label: "תעודות", color: "rgb(98, 100, 100)" },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section if hash is present in URL
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  }, []);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Background */}
      <motion.section
        id="home"
        className="relative min-h-[60vh] flex items-center justify-center pt-32 pb-20 overflow-hidden"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Background Image - Printing Press */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1920&q=80"
            alt="רקע"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#2B3E6F]/90 via-[#1a2847]/85 to-[#0d1523]/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              הוצאה לאור פיקוד העורף
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white font-semibold drop-shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              בית הדפוס וההוצאה לאור בשבילך
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              המוצרים שלנו
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              מגוון רחב של פתרונות הדפסה והוצאה לאור מקצועיים
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={category.id} category={category} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
            >
              ברוכים הבאים והבאות להוצל"א פקע"ר
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              {/* Bold text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xl font-bold text-gray-900 leading-relaxed"
              >
                מחפשים פתרונות הדפסה איכותיים - אנחנו כאן כדי להפוך את הרעיונות שלכם למציאות
              </motion.p>

              {/* Icons Row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex justify-center items-center gap-8 flex-wrap py-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg transition-transform hover:scale-110"
                      style={{ backgroundColor: feature.color }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{feature.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Regular paragraphs */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="space-y-4 text-lg text-gray-700 leading-relaxed"
              >
                <p>
                  בית הדפוס הפיקודי מציע לכם שירות מקצועי, עם טכנולוגיות הדפסה מתקדמות וצוות מנוסה שמבטיח איכות ללא פשרות.
                </p>
                <p>
                  אנו מקפידים על דיוק, חדשנות וליווי אישי לכל לקוח.
                </p>
                <p className="font-semibold text-gray-900">
                  שמחים להציג לפניכם את הקטלוג החדש של ההוצאה לאור של פיקוד העורף - מוזמנים להתרשם מהמגוון הרחב שלנו!
                </p>
                <p className="text-xl font-bold text-[rgb(34,179,225)]">
                  צרו איתנו קשר להזמנות
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              נוהל הזמנת עבודה
            </h2>
          </motion.div>

          <WorkflowProcess />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              גלריית עבודות
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              דוגמאות מעבודות שביצענו ללקוחותינו
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`relative group overflow-hidden rounded-2xl shadow-xl ${item.span}`}
              >
                <img
                  src={item.url}
                  alt={`עבודה ${index + 1}`}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold text-lg drop-shadow-lg">
                    פרויקט {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}