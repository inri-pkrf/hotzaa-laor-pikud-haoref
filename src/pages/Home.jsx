import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "../components/CategoryCard";
import { BookOpen, Book, Award, Sticker, Printer, Sparkles, CheckCircle, Users, Clock } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "ספרים וחוברות",
    description: "הדפסת ספרים איכותיים, חוברות מקצועיות ומודפסים שמשדרים איכות",
    color: "#00BFA5",
    icon: BookOpen,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/070469535_.png"
  },
  {
    id: 2,
    name: "מחברות ופנקסים",
    description: "מחברות ופנקסים מותאמים אישית לכל צורך - מעוצבים ומודפסים בקפידה",
    color: "#C2185B",
    icon: Book,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/070469535_.png"
  },
  {
    id: 3,
    name: "תעודות וברכות",
    description: "תעודות מעוצבות, כרטיסי ברכה ומוצרי נייר יוקרתיים לכל אירוע",
    color: "#757575",
    icon: Award,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/070469535_.png"
  },
  {
    id: 4,
    name: "מדבקות ורולאפ",
    description: "מדבקות איכותיות, רולאפים וחומרי שיווק מעוצבים במגוון גדלים",
    color: "#FF9800",
    icon: Sticker,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/070469535_.png"
  },
  {
    id: 5,
    name: "הדפסה על מוצרים",
    description: "הדפסה איכותית על מגוון מוצרים - ספלים, חולצות, תיקים ועוד",
    color: "#1E3A8A",
    icon: Printer,
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/070469535_.png"
  },
];

const processSteps = [
  {
    number: "01",
    title: "יצירת קשר",
    description: "פנייה ראשונית ושיחת ייעוץ להבנת הצרכים",
    icon: Users,
  },
  {
    number: "02",
    title: "עיצוב והצעת מחיר",
    description: "הכנת עיצוב ראשוני והצעת מחיר מפורטת",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "אישור והפקה",
    description: "אישור סופי והתחלת תהליך ההדפסה",
    icon: CheckCircle,
  },
  {
    number: "04",
    title: "אספקה",
    description: "משלוח המוצר המוגמר ביעד",
    icon: Clock,
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
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 bg-white"
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
              style={{ fontFamily: 'Karantina, cursive' }}
            >
              הוצאה לאור פיקוד העורף
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ fontFamily: 'Assistant, sans-serif' }}
            >
              בית הדפוס וההוצאה לאור בשבילך
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                החזון שלנו
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  בית הדפוס וההוצאה לאור של פיקוד העורף מספק שירותי הדפסה והוצאה לאור מקצועיים ואיכותיים.
                </p>
                <p>
                  אנו מתמחים במתן פתרונות הדפסה מותאמים אישית, תוך שמירה על סטנדרטים גבוהים של איכות ומקצועיות.
                </p>
                <p>
                  הצוות המנוסה שלנו מלווה את הלקוח בכל שלב, מהרעיון הראשוני ועד למוצר המוגמר.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_6885e537f90714e91be36212/070469535_.png"
                  alt="חזון"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              תהליך העבודה
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ארבעה שלבים פשוטים להפקת המוצר המושלם
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <div className="text-6xl font-bold text-blue-100 mb-4" style={{ fontFamily: 'Karantina, cursive' }}>
                    {step.number}
                  </div>
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-gradient-to-l from-blue-300 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
      <section className="py-20 bg-gradient-to-l from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              מוכנים להתחיל?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              צרו איתנו קשר עוד היום ונשמח לסייע לכם בכל פרויקט
            </p>
            <a
              href={`/Contact`}
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-xl"
            >
              יצירת קשר
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}