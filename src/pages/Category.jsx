import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import ProductCard from "../components/ProductCard";

const categoryInfo = {
  1: {
    name: "ספרים וחוברות",
    color: "rgb(39, 64, 111)",
    subtitle: "הדפסה איכותית היא הבסיס לכל מוצר דפוס, החל מפנקסים ועד ספרים. באמצעות טכנולוגיות מתקדמות וצבעים חדים, אנו מספקים תוצרים מדויקים ומרשימים לכל מטרה. כמות מינימלית להדפסה 10 יחידות.",
  },
  2: {
    name: "מחברות ופנקסים",
    color: "rgb(255, 180, 80)",
    subtitle: "מחברות ופנקסים מותאמים אישית לכל צורך - מעוצבים ומודפסים בקפידה",
  },
  3: {
    name: "תעודות וברכות",
    color: "rgb(98, 100, 100)",
    subtitle: "תעודות מעוצבות, כרטיסי ברכה ומוצרי נייר יוקרתיים לכל אירוע",
  },
  4: {
    name: "מדבקות ורולאפ",
    color: "rgb(153, 24, 99)",
    subtitle: "מדבקות איכותיות, רולאפים וחומרי שיווק מעוצבים במגוון גדלים",
  },
  5: {
    name: "הדפסה על מוצרים",
    color: "rgb(67, 187, 144)",
    subtitle: "הדפסה איכותית על מגוון מוצרים - ספלים, חולצות, תיקים ועוד",
  },
};

export default function Category() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = parseInt(urlParams.get("id"));

  const category = categoryInfo[categoryId];

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", categoryId],
    queryFn: () => base44.entities.Product.filter({ category_id: categoryId }),
    enabled: !!categoryId,
  });

  // Group products by size
  const productsBySize = products.reduce((acc, product) => {
    const size = product.size || "אחר";
    if (!acc[size]) acc[size] = [];
    acc[size].push(product);
    return acc;
  }, {});

  if (!category) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <p className="text-2xl text-gray-600">קטגוריה לא נמצאה</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={createPageUrl("Home")}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
            חזרה לעמוד הבית
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {category.name}
            </h1>
            <p className="text-xl text-white/95 max-w-4xl mx-auto leading-relaxed">
              {category.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="text-center py-20">
              <div className="inline-block w-16 h-16 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 mb-8">
                בקרוב יתווספו מוצרים לקטגוריה זו
              </p>
              <Link
                to={createPageUrl("Contact")}
                className="inline-block px-8 py-3 rounded-full font-bold text-white hover:opacity-90 transition-all duration-200"
                style={{ backgroundColor: category.color }}
              >
                יצירת קשר
              </Link>
            </div>
          ) : (
            <div className="space-y-16">
              {Object.entries(productsBySize).map(([size, sizeProducts]) => (
                <div key={size}>
                  {/* Size Header */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <div
                      className="inline-block px-8 py-3 rounded-full"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <h2
                        className="text-3xl font-bold"
                        style={{ color: category.color }}
                      >
                        {size}
                      </h2>
                    </div>
                  </motion.div>

                  {/* Products Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sizeProducts.map((product, index) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        index={index}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}