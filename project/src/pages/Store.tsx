import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';

const Store: React.FC = () => {
  const { t } = useLanguage();

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
              {t('store.hero.title', 'متجرنا', 'Our Store')}
            </h1>
            <p className="text-xl">
              {t('store.hero.subtitle', 'تسوق أفضل عروض الخدمات والمنتجات', 'Shop the best service offers and products')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('store.title', 'منتجاتنا وخدماتنا', 'Our Products & Services')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('store.description', 'اختر من بين مجموعة واسعة من الخدمات والعروض المميزة بأسعار تنافسية', 'Choose from a wide range of services and special offers at competitive prices')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              {t('store.cta.title', 'لم تجد ما تبحث عنه؟', "Didn't find what you're looking for?")}
            </h2>
            <p className="text-xl mb-8">
              {t('store.cta.description', 'تواصل معنا لطلب خدمة مخصصة أو استشارة مجانية', 'Contact us to request a custom service or free consultation')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/966534150198"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                {t('store.cta.whatsapp', 'تواصل عبر واتساب', 'Contact via WhatsApp')}
              </a>
              <a
                href="tel:0534150198"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                {t('store.cta.call', 'اتصل بنا', 'Call Us')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Store;