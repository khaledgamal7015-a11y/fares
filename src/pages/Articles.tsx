import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Articles: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4239086/pexels-photo-4239086.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Articles Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-green-600 bg-opacity-70" />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">
              {t('articles.hero.title', 'المقالات والنصائح', 'Articles & Tips')}
            </h1>
            <p className="text-xl">
              {t('articles.hero.subtitle', 'نصائح مفيدة ومقالات تعليمية حول النظافة والصيانة', 'Useful tips and educational articles about cleaning and maintenance')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('articles.title', 'أحدث المقالات', 'Latest Articles')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('articles.description', 'تابع أحدث المقالات والنصائح المفيدة من خبرائنا في مجال النظافة والصيانة', 'Follow the latest articles and useful tips from our experts in cleaning and maintenance')}
            </p>
          </motion.div>

          {/* Placeholder Message */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-semibold text-gray-500 py-20"
          >
            {t('articles.comingSoon', 'ستضاف قريبًا', 'Coming Soon')}
          </motion.div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              {t('articles.cta.title', 'هل تحتاج مشورة خبير؟', 'Need Expert Advice?')}
            </h2>
            <p className="text-xl mb-8">
              {t('articles.cta.description', 'تواصل معنا للحصول على استشارة مجانية من خبرائنا', 'Contact us for free consultation from our experts')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/966534150198"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                {t('articles.cta.whatsapp', 'استشارة مجانية', 'Free Consultation')}
              </a>
              <a
                href="tel:0534150198"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                {t('articles.cta.call', 'اتصل بنا', 'Call Us')}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
