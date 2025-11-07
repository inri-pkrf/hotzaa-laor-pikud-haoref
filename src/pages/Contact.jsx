import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/972501234567', '_blank');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section style={{ background: 'rgb(0, 88, 131)' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
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
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  פרטי התקשרות
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  נשמח לשמוע מכם ולסייע בכל שאלה או בקשה
                </p>
              </div>

              <div className="space-y-6">
                {/* WhatsApp Button */}
                <motion.button
                  onClick={handleWhatsApp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Card className="border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#25D366] to-[#20BD5A] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-right flex-1">
                          <h3 className="font-bold text-gray-900 mb-1">ווטסאפ</h3>
                          <p className="text-gray-600" dir="ltr">050-123-4567</p>
                          <p className="text-sm text-green-600 font-medium mt-1">לחצו לשיחה</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.button>

                <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: 'rgba(0, 88, 131, 0.1)' }}>
                        <Phone className="w-6 h-6" style={{ color: 'rgb(0, 88, 131)' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">טלפון</h3>
                        <p className="text-gray-600" dir="ltr">
                          050-123-4567
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">אימייל</h3>
                        <p className="text-gray-600">info@example.co.il</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-orange-100 hover:border-orange-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">כתובת</h3>
                        <p className="text-gray-600">
                          פיקוד העורף, ישראל
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="rounded-2xl p-8 shadow-xl" style={{ background: 'linear-gradient(135deg, rgba(0, 88, 131, 0.1), rgba(34, 179, 225, 0.1))' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  שעות פעילות
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="font-bold text-lg mb-2 text-gray-900">ראשון - חמישי</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">קבלת קהל:</span>
                        <span className="font-semibold">08:30 - 12:00</span>
                      </div>
                      <div className="border-t border-gray-200 pt-2">
                        <p className="text-xs text-red-600 mb-2">הפסקת צהריים - ללא קבלת קהל</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">קבלת קהל:</span>
                        <span className="font-semibold">13:00 - 15:00</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 rounded-xl p-4">
                    <p className="font-bold text-gray-900">שישי - שבת</p>
                    <p className="text-gray-600 mt-1">סגור</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-2 border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  מידע חשוב
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-sm">מומלץ לתאם פגישה מראש</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-sm">זמן תגובה להצעות מחיר: עד 48 שעות</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-sm">כמות מינימלית להדפסה: 10 יחידות</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}