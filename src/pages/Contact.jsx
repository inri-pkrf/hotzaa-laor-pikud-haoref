import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Clock, Info } from "lucide-react";

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/972501234567', '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg, rgb(0, 88, 131), rgb(34, 179, 225))' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4"
          >
            יצירת קשר
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90"
          >
            נשמח לענות על כל שאלה ולסייע בפרויקט שלכם
          </motion.p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {/* WhatsApp */}
            <motion.button
              onClick={handleWhatsApp}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                <MessageCircle className="w-12 h-12 text-[#25D366] transition-transform group-hover:scale-110" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ווטסאפ</h3>
              <p className="text-gray-600 text-sm" dir="ltr">050-123-4567</p>
              <p className="text-xs text-[#25D366] font-medium mt-2">לחצו לשיחה</p>
            </motion.button>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <Phone className="w-12 h-12 text-[rgb(0,88,131)]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">טלפון</h3>
              <p className="text-gray-600 text-sm" dir="ltr">050-123-4567</p>
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <Mail className="w-12 h-12 text-[rgb(0,88,131)]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">אימייל</h3>
              <p className="text-gray-600 text-sm">info@example.co.il</p>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <MapPin className="w-12 h-12 text-[rgb(0,88,131)]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">כתובת</h3>
              <p className="text-gray-600 text-sm">פיקוד העורף, ישראל</p>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-16" />

          {/* Working Hours & Info */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center">
                <Clock className="w-14 h-14 text-[rgb(0,88,131)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">שעות פעילות</h3>
              
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <p className="text-lg font-bold text-gray-900 mb-6">ראשון - חמישי</p>
                
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center justify-between px-4">
                    <span className="text-sm font-medium">קבלת קהל</span>
                    <span className="font-bold" dir="ltr">08:30 - 12:00</span>
                  </div>
                  
                  <div className="border-t border-gray-300 my-4" />
                  
                  <div className="px-4 py-2 bg-red-50 rounded-lg">
                    <p className="text-sm text-red-700 font-medium">הפסקת צהריים</p>
                    <p className="text-xs text-red-600 mt-1" dir="ltr">12:00 - 13:30</p>
                  </div>
                  
                  <div className="border-t border-gray-300 my-4" />
                  
                  <div className="flex items-center justify-between px-4">
                    <span className="text-sm font-medium">קבלת קהל</span>
                    <span className="font-bold" dir="ltr">13:30 - 15:30</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Important Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <div className="mb-6 flex justify-center">
                <Info className="w-14 h-14 text-[rgb(0,88,131)]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">מידע חשוב</h3>
              
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div className="space-y-6 text-right">
                  <div className="pb-6 border-b border-gray-300">
                    <p className="text-sm font-medium text-gray-600 mb-2">זמן עבודה</p>
                    <p className="text-lg font-bold text-gray-900">עד 14 ימי עבודה</p>
                  </div>
                  
                  <div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      פנו אלינו לקבלת הצעת מחיר והזמנת עבודה
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}