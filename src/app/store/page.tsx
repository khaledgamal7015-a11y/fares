'use client';

import React, { useState, useEffect } from 'react';
import { motion } from '@/app/components/ui/MotionWrapper';
import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from '@/app/components/ui/ProductCard';

const Store: React.FC = () => {
  const { t } = useLanguage();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('/api/products');
      const data = await res.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Store Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-purple-600 bg-opacity-70" />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">
              {t('store.title', 'متجرنا', 'Our Store')}
            </h1>
            <p className="text-xl">
              {t('store.subtitle', 'اختر من بين مجموعة متنوعة من عروض الخدمات بأسعار تنافسية', 'Choose from a variety of service offers at competitive prices')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('store.products', 'منتجاتنا', 'Our Products')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('store.description', 'نقدم مجموعة واسعة من خدمات الصيانة والنظافة لتلبية جميع احتياجاتكم', 'We offer a wide range of maintenance and cleaning services to meet all your needs')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product._id || product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Store;