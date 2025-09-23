import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, ArrowLeft, BookOpen } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Articles: React.FC = () => {
  const { t, language } = useLanguage();

  const articles = [
    {
      id: 1,
      title: language.code === 'ar' ? 'شركة تنظيف بالقصيم – مؤسسة الفارس الأفضل في بريدة وجميع مدن القصيم     ' : 'Daily Home Cleaning Tips',
      excerpt: language.code === 'ar' 
        ? ' مؤسسة الفارس تقدم خدمات تنظيف المنازل والفلل والكنب والموكيت والمجالس في بريدة وجميع مدن القصيم بأسعار مناسبة وجودة عالية.    .'
        : 'Learn the best ways to maintain daily home cleanliness effortlessly. Practical and easy-to-apply tips for a clean and organized home always.',
      image: '/elaosboa49061.png',
      category: language.code === 'ar' ? 'تنظيف المنازل' : 'Home Cleaning'
    },
    {
      id: 2,
      title: language.code === 'ar' ? '    —   تنظيف المنازل في القصيم — دليلك لأفضل خدمة تنظيف شاملة     ' : 'Importance of Regular AC Cleaning',
      excerpt: language.code === 'ar'
        ? ' مؤسسة الفارس تقدم خدمات تنظيف المنازل والفلل والكنب والموكيت والمجالس ببريدة وجميع مدن القصيم باستخدام أحدث التقنيات وبأسعار تنافسية.'
        : 'Why you should clean ACs regularly and how it affects your health and electricity bill. Complete guide to AC maintenance and energy saving.',
      image: '/www.ahlaabayt.com28-scaled.jpg',
      category: language.code === 'ar' ? 'صيانة المكيفات' : 'AC Maintenance'
    },
    {
      id: 3,
      title: language.code === 'ar' ? '    تنظيف الشركات والفنادق في القصيم — خدمات احترافية بمعايير عالية' : 'How to Choose Safe Cleaning Products',
      excerpt: language.code === 'ar'
        ? '    مؤسسة الفارس تقدم حلول تنظيف شاملة للشركات والفنادق في القصيم، مع فريق متخصص وأدوات حديثة لضمان بيئة نظيفة وصحية بمعايير عالية الجودة..'
        : 'Complete guide to choosing family and eco-friendly cleaning products. Learn about natural ingredients and harmful chemicals.',
      image: 'https://images.pexels.com/photos/4239086/pexels-photo-4239086.jpeg?auto=compress&cs=tinysrgb&w=500',
      category: language.code === 'ar' ? 'منتجات التنظيف' : 'Cleaning Products'
    },
    
  ];

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('articles.title', 'أحدث المقالات', 'Latest Articles')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('articles.description', 'تابع أحدث المقالات والنصائح المفيدة من خبرائنا في مجال النظافة والصيانة', 'Follow the latest articles and useful tips from our experts in cleaning and maintenance')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4 ml-1" />
                    <span>{new Date(article.date).toLocaleDateString(language.code === 'ar' ? 'ar-SA' : 'en-US')}</span>
                    <span className="mx-2">•</span>
                    <User className="w-4 h-4 ml-1" />
                    <span>{article.author}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>

                  <Link
                    to={`/articles/${article.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group text-sm sm:text-base btn-touch"
                  >
                    <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    <span className="text-sm sm:text-base">{t('article.readMore', 'اقرأ المزيد', 'Read More')}</span>
                    {language.code === 'ar' ? (
                      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('newsletter.title', 'اشترك في نشرتنا الإخبارية', 'Subscribe to Our Newsletter')}
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              {t('newsletter.description', 'احصل على أحدث النصائح والمقالات المفيدة مباشرة في بريدك الإلكتروني', 'Get the latest tips and useful articles directly in your email')}
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder={t('newsletter.email', 'بريدك الإلكتروني', 'Your Email')}
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
                <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-green-600 transition-colors whitespace-nowrap">
                  {t('newsletter.subscribe', 'اشترك الآن', 'Subscribe Now')}
                </button>
              </div>
            </div>
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