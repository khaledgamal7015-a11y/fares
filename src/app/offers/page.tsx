'use client';

import React from 'react';
import { motion } from '@/app/components/ui/MotionWrapper';
import { useLanguage } from '@/contexts/LanguageContext';
import { offers } from '@/data/products';
import ProductCard from '@/app/components/ui/ProductCard';

export const dynamic = 'force-dynamic';

const Offers: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/152125146_715b21d0-5b60-4b4c-aa10-d7e612680ec2.jpg"
            alt="Offers Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-red-600 bg-opacity-70" />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">
              {t('offers.hero.title', 'العروض الخاصة', 'Special Offers')}
            </h1>
            <p className="text-xl">
              {t('offers.hero.subtitle', 'اكتشف عروضنا المميزة وخصوماتنا الحصرية', 'Discover our amazing offers and exclusive discounts')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('offers.title', 'العروض المتاحة حالياً', 'Currently Available Offers')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('offers.description', 'استفد من عروضنا الخاصة واحصل على أفضل الخدمات بأسعار مخفضة', 'Take advantage of our special offers and get the best services at reduced prices')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <ProductCard key={offer.id} product={offer} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              {t('offers.benefits.title', 'مميزات عروضنا الخاصة', 'Benefits of Our Special Offers')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-red-50 p-8 rounded-xl"
            >
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">%</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {t('offers.benefit1.title', 'توفير مضمون', 'Guaranteed Savings')}
              </h3>
              <p className="text-gray-600">
                {t('offers.benefit1.desc', 'وفر المال مع خصومات تصل إلى 30% على الخدمات المختارة', 'Save money with discounts up to 30% on selected services')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-green-50 p-8 rounded-xl"
            >
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">✓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {t('offers.benefit2.title', 'جودة عالية', 'High Quality')}
              </h3>
              <p className="text-gray-600">
                {t('offers.benefit2.desc', 'نفس المستوى العالي من الجودة والاحترافية بأسعار مخفضة', 'Same high level of quality and professionalism at reduced prices')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center bg-blue-50 p-8 rounded-xl"
            >
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">⏰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {t('offers.benefit3.title', 'عروض محدودة', 'Limited Time')}
              </h3>
              <p className="text-gray-600">
                {t('offers.benefit3.desc', 'عروض خاصة لفترة محدودة، لا تفوت الفرصة', 'Special offers for a limited time, dont miss the opportunity')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              {t('offers.cta.title', 'لا تفوت عروضنا الخاصة!', "Don't miss our special offers!")}
            </h2>
            <p className="text-xl mb-8">
              {t('offers.cta.description', 'تواصل معنا الآن للحصول على أفضل الأسعار والعروض الحصرية', 'Contact us now for the best prices and exclusive offers')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/966534150198"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                {t('offers.cta.whatsapp', 'اطلب العرض الآن', 'Order Offer Now')}
              </a>
              <a
                href="tel:0534150198"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                {t('offers.cta.call', 'اتصل للاستفسار', 'Call for Inquiry')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Offers;