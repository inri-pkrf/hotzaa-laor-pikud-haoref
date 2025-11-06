
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CategoryCard from "../components/CategoryCard";
import WorkflowProcess from "../components/WorkflowProcess";
import { BookOpen, Book, Award, Sticker, Printer } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "ספרים וחוברות",
    description: "הדפסת ספרים איכותיים, חוברות מקצועיות ומודפסים שמשדרים איכות",
    color: "#00BFA5",
    icon: BookOpen,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/4a6837b07_Screenshot2025-11-06125614.png"
  },
  {
    id: 2,
    name: "מחברות ופנקסים",
    description: "מחברות ופנקסים מותאמים אישית לכל צורך - מעוצבים ומודפסים בקפידה",
    color: "#C2185B",
    icon: Book,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/b4431795d_Screenshot2025-11-06125625.png"
  },
  {
    id: 3,
    name: "תעודות וברכות",
    description: "תעודות מעוצבות, כרטיסי ברכה ומוצרי נייר יוקרתיים לכל אירוע",
    color: "#757575",
    icon: Award,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/6b230f223_Screenshot2025-11-06125636.png"
  },
  {
    id: 4,
    name: "מדבקות ורולאפ",
    description: "מדבקות איכותיות, רולאפים וחומרי שיווק מעוצבים במגוון גדלים",
    color: "#FF9800",
    icon: Sticker,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/2300455d0_Screenshot2025-11-06125646.png"
  },
  {
    id: 5,
    name: "הדפסה על מוצרים",
    description: "הדפסה איכותית על מגוון מוצרים - ספלים, חולצות, תיקים ועוד",
    color: "#1E3A8A",
    icon: Printer,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/88e13cc77_Screenshot2025-11-06125656.png"
  },
];

const galleryImages = [
  "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=80",
  "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80",
  "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&q=80",
  "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=800&q=80",
  "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
  "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=800&q=80",
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        id="home"
        className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 bg-white"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-6xl md:text-8xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              הוצאה לאור פיקוד העורף
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-4"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              חזון הוצל"א פקע"ר
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed"
            >
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                אם אתם מחפשים פתרונות הדפסה איכותיים- רולאפים, סובלימציה, ספרים או חוברות- אנחנו כאן כדי להפוך את הרעיונות שלכם למציאות.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                בית הדפוס וההוצאה לאור פקע"ר מציע לכם שירות מקצועי, טכנולוגיות הדפסה מתקדמות וצוות מנוסה שמבטיח איכות ללא פשרות. אנו מקפידים על דיוק, חדשנות וליווי אישי לכל לקוח.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="font-semibold text-gray-900"
              >
                שמחים להציג לפניכם את הקטלוג החדש של הוצאה לאור פיקוד העורף- מוזמנים להתרשם מהמגוון הרחב שלנו!
              </motion.p>
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
      <section id="gallery" className="py-20 bg-white">
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                className="relative group overflow-hidden rounded-xl shadow-lg aspect-square"
              >
                <img
                  src={image}
                  alt={`עבודה ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="py-12"
        style={{ background: 'rgb(0, 88, 131)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              מוכנים להתחיל?
            </h2>
            <p className="text-lg text-white/90 mb-6">
              צרו איתנו קשר עוד היום ונשמח לסייע לכם בכל פרויקט
            </p>
            <motion.a
              href={`/Contact`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-[rgb(0,88,131)] px-8 py-3 rounded-full font-bold text-base hover:bg-gray-100 transform transition-all duration-200 shadow-xl"
            >
              יצירת קשר
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
