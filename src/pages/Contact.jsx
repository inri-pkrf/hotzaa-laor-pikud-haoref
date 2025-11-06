import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    שלחו לנו הודעה
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        שם מלא
                      </label>
                      <Input
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="הזן שם מלא"
                        className="text-right"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        אימייל
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="your@email.com"
                        className="text-right"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        טלפון
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="050-1234567"
                        className="text-right"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        הודעה
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        placeholder="כתבו את הודעתכם כאן..."
                        className="min-h-32 text-right"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      style={{ background: 'rgb(0, 88, 131)' }}
                      className="w-full hover:opacity-90 text-lg py-6"
                    >
                      <Send className="w-5 h-5 ml-2" />
                      שלח הודעה
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
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
                <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0, 88, 131, 0.1)' }}>
                        <Mail className="w-6 h-6" style={{ color: 'rgb(0, 88, 131)' }} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">אימייל</h3>
                        <p className="text-gray-600">info@example.co.il</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-green-600" />
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
                        <MapPin className="w-6 h-6 text-purple-600" />
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

              <div className="rounded-2xl p-8" style={{ background: 'rgba(0, 88, 131, 0.1)' }}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  שעות פעילות
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p className="flex justify-between">
                    <span className="font-medium">ראשון - חמישי:</span>
                    <span>08:00 - 17:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">שישי:</span>
                    <span>08:00 - 13:00</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">שבת:</span>
                    <span>סגור</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}