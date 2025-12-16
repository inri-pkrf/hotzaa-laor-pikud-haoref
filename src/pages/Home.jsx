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
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/607465f09_image.png"
  },
  {
    id: 2,
    name: "מחברות ופנקסים",
    description: "מחברות ופנקסים מותאמים אישית לכל צורך - מעוצבים ומודפסים בקפידה",
    color: "rgb(255, 180, 80)",
    icon: Book,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/0d3bb31d3_image.png"
  },
  {
    id: 3,
    name: "תעודות וברכות",
    description: "תעודות מעוצבות, כרטיסי ברכה ומוצרי נייר יוקרתיים לכל אירוע",
    color: "rgb(98, 100, 100)",
    icon: Award,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/6df92d623_image.png"
  },
  {
    id: 4,
    name: "מדבקות ורולאפ",
    description: "מדבקות איכותיות, רולאפים וחומרי שיווק מעוצבים במגוון גדלים",
    color: "rgb(153, 24, 99)",
    icon: Sticker,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/957ecc4e0_image.png"
  },
  {
    id: 5,
    name: "הדפסה על מוצרים",
    description: "הדפסה איכותית על מגוון מוצרים - ספלים, חולצות, תיקים ועוד",
    color: "rgb(67, 187, 144)",
    icon: Printer,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/4a6be04d9_image.png"
  },
];

const galleryImages = [
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/f429c28ce_202.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/45d6cdeea_203.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/5efa5fce5_204.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/d57d4e1c3_206.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/d170bd2ee_402.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/2197f4edd_404.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/68f42bf99_501.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/e22dafa43_502.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/5905b29cb_503.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/071477743_107.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/e6001f566_109.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/7f030a3f9_201.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/44d927ceb_101.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/7c63b2d33_102.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/3a39202b5_103.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/b6c384101_104.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/3ba12c73c_106.png",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/9e3ecc241_506.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/1aca7cd39_504.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/36e87a0b1_505.jpg",
  "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/690c743101e01f1e1a93321d/d01a6b799_405.jpg",
];

const features = [
  { icon: Notebook, label: "מחברות" },
  { icon: FileText, label: "חוברות" },
  { icon: BookOpen, label: "ספר" },
  { icon: Flame, label: "סובלימציה" },
  { icon: Flag, label: "רולאפ" },
  { icon: Medal, label: "תעודות" },
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
              {/* Main text */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6 text-lg text-gray-700 leading-relaxed"
              >
                <p className="text-xl font-bold text-gray-900">
                  אם אתם מחפשים פתרונות הדפסה איכותיים - רולאפים, סובלימציה, ספרים או חוברות - אנחנו כאן כדי להפוך את הרעיונות שלכם למציאות!
                </p>
                <p>
                  בית הדפוס וההוצאה לאור פקע"ר מציע לכם שירות מקצועי, טכנולוגיות הדפסה מתקדמות וצוות מנוסה שמבטיח איכות ללא פשרות. אנו מקפידים על דיוק, חדשנות וליווי אישי לכל לקוח.
                </p>
                <p className="font-semibold text-gray-900">
                  שמחים להציג בפניכם את הקטלוג החדש של הוצאה לאור פיקוד העורף – מוזמנים להתרשם מהמגוון הרחב שלנו!
                </p>
              </motion.div>

              {/* WhatsApp Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="pt-4"
              >
                <motion.button
                  onClick={() => window.open('https://wa.me/972529322925', '_blank')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-[#25D366] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-[#20BD5A] transform transition-all duration-200 shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgb(37,211,102,0.5)]"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  צרו איתנו קשר להזמנות
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

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

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-6">
            {galleryImages.map((url, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.03 }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className="relative group overflow-hidden rounded-full aspect-square shadow-xl"
              >
                <img
                  src={url}
                  alt={`עבודה ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold text-sm drop-shadow-lg">
                    {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Print Sizes Table Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              מידות הדפסה
            </h2>
            <p className="text-xl text-gray-600">
              טבלת מידות סטנדרטיות להדפסה
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-x-auto shadow-2xl rounded-2xl"
          >
            <table className="w-full bg-white">
              <thead>
                <tr className="bg-gradient-to-l from-[#2B3E6F] to-[#1a2847]">
                  <th className="px-6 py-4 text-right text-white font-bold text-lg border-l border-white/20">
                    גודל הדפסה
                  </th>
                  <th className="px-6 py-4 text-right text-white font-bold text-lg border-l border-white/20">
                    מידות (ס"מ)
                  </th>
                  <th className="px-6 py-4 text-right text-white font-bold text-lg">
                    כמות שנכנס על דף A4
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-right font-semibold text-gray-900 border-l border-gray-200">A0</td>
                  <td className="px-6 py-4 text-right text-gray-700 border-l border-gray-200">70×100</td>
                  <td className="px-6 py-4 text-right text-gray-700">-</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <td className="px-6 py-4 text-right font-semibold text-gray-900 border-l border-gray-200">A1</td>
                  <td className="px-6 py-4 text-right text-gray-700 border-l border-gray-200">60×80</td>
                  <td className="px-6 py-4 text-right text-gray-700">-</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-right font-semibold text-gray-900 border-l border-gray-200">A2</td>
                  <td className="px-6 py-4 text-right text-gray-700 border-l border-gray-200">42×60</td>
                  <td className="px-6 py-4 text-right text-gray-700">-</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <td className="px-6 py-4 text-right font-semibold text-gray-900 border-l border-gray-200">A3</td>
                  <td className="px-6 py-4 text-right text-gray-700 border-l border-gray-200">30×42</td>
                  <td className="px-6 py-4 text-right text-gray-700">-</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-right font-semibold text-gray-900 border-l border-gray-200">A4</td>
                  <td className="px-6 py-4 text-right text-gray-700 border-l border-gray-200">21×30</td>
                  <td className="px-6 py-4 text-right text-gray-700">-</td>
                </tr>
                <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors bg-gray-50/50">
                  <td className="px-6 py-4 text-right font-semibold text-gray-900 border-l border-gray-200">A5</td>
                  <td className="px-6 py-4 text-right text-gray-700 border-l border-gray-200">15×21</td>
                  <td className="px-6 py-4 text-right text-gray-700">2 על עמוד | רווח של 0.5 ס"מ</td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-right font-semibold text-gray-900 border-l border-gray-200">A6</td>
                  <td className="px-6 py-4 text-right text-gray-700 border-l border-gray-200">10×14</td>
                  <td className="px-6 py-4 text-right text-gray-700">4 על עמוד | רווח של 0.5 ס"מ</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </div>
  );
}