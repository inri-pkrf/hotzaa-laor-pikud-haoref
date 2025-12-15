import React, { useState } from "react";
import { base44 } from "@/api/base44Client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Save, FileText } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const sectionNames = {
  hero: "דף הבית - Hero",
  categories: "סעיף המוצרים",
  vision: "סעיף החזון",
  process: "תהליך עבודה",
  gallery: "גלריה",
  footer: "פוטר",
  contact: "צור קשר"
};

export default function Settings() {
  const queryClient = useQueryClient();
  const [editedContent, setEditedContent] = useState({});

  const { data: contents = [], isLoading } = useQuery({
    queryKey: ['siteContent'],
    queryFn: () => base44.entities.SiteContent.list(),
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, value }) => base44.entities.SiteContent.update(id, { value }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['siteContent'] });
      toast.success('הטקסט עודכן בהצלחה!');
    },
    onError: () => {
      toast.error('שגיאה בעדכון הטקסט');
    }
  });

  const handleChange = (id, value) => {
    setEditedContent(prev => ({ ...prev, [id]: value }));
  };

  const handleSave = (content) => {
    const value = editedContent[content.id] !== undefined ? editedContent[content.id] : content.value;
    updateMutation.mutate({ id: content.id, value });
    setEditedContent(prev => {
      const newState = { ...prev };
      delete newState[content.id];
      return newState;
    });
  };

  const groupedContents = contents.reduce((acc, content) => {
    if (!acc[content.section]) {
      acc[content.section] = [];
    }
    acc[content.section].push(content);
    return acc;
  }, {});

  if (isLoading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="inline-block w-16 h-16 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">הגדרות טקסטים</h1>
          <p className="text-gray-600">עריכת כל הטקסטים באתר</p>
        </motion.div>

        <div className="space-y-6">
          {Object.entries(groupedContents).map(([section, sectionContents]) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <FileText className="w-6 h-6 text-blue-600" />
                    {sectionNames[section] || section}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {sectionContents.map((content) => {
                      const currentValue = editedContent[content.id] !== undefined ? editedContent[content.id] : content.value;
                      const isModified = editedContent[content.id] !== undefined;

                      return (
                        <div key={content.id} className="space-y-3 pb-6 border-b last:border-b-0">
                          <div>
                            <label className="block text-sm font-bold text-gray-900 mb-1">
                              {content.description || content.key}
                            </label>
                            <p className="text-xs text-gray-500 mb-2">מפתח: {content.key}</p>
                          </div>

                          {currentValue.length > 100 ? (
                            <Textarea
                              value={currentValue}
                              onChange={(e) => handleChange(content.id, e.target.value)}
                              className="min-h-[120px] text-base"
                              dir="rtl"
                            />
                          ) : (
                            <Input
                              value={currentValue}
                              onChange={(e) => handleChange(content.id, e.target.value)}
                              className="text-base"
                              dir="rtl"
                            />
                          )}

                          <Button
                            onClick={() => handleSave(content)}
                            disabled={!isModified || updateMutation.isPending}
                            className="bg-blue-600 hover:bg-blue-700"
                          >
                            <Save className="w-4 h-4 mr-2" />
                            {updateMutation.isPending ? 'שומר...' : 'שמור שינויים'}
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}