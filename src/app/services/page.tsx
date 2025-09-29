'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from '@/app/components/ui/MotionWrapper';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Services: React.FC = () => {
  const { t, language } = useLanguage();
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const res = await fetch('/api/services');
      const data = await res.json();
      setServices(data);
    }
    fetchServices();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Services Hero"
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
              {t('services.hero.title', 'خدماتنا', 'Our Services')}
            </h1>
            <p className="text-xl">
              {t('services.hero.subtitle', 'خدمات شاملة للصيانة والنظافة', 'Comprehensive maintenance and cleaning services')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('services.title', 'خدماتنا المتنوعة', 'Our Various Services')}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {t('services.description', 'نقدم مجموعة واسعة من خدمات الصيانة والنظافة لتلبية جميع احتياجاتكم', 'We offer a wide range of maintenance and cleaning services to meet all your needs')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  {service.photoFilename ? (
                    <img
                      src={`/api/photos/view/${service.photoFilename}`}
                      alt={language.code === 'ar' ? service.name : service.nameEn}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-2">
                          <span className="text-2xl font-bold">S</span>
                        </div>
                        <p className="text-sm opacity-75">{language.code === 'ar' ? service.name : service.nameEn}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {language.code === 'ar' ? service.name : service.nameEn}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {language.code === 'ar' ? service.description : service.descriptionEn}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">
                      {t('service.features', 'المميزات:', 'Features:')}
                    </h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {(language.code === 'ar' ? service.features : service.featuresEn).slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full ml-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    href={`/services/${service._id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    <span>{t('service.readMore', 'اقرأ المزيد', 'Read More')}</span>
                    {language.code === 'ar' ? (
                      <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-4">
              {t('cta.title', 'هل تحتاج لخدماتنا؟', 'Need Our Services?')}
            </h2>
            <p className="text-xl mb-8">
              {t('cta.description', 'تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص', 'Contact us now for a free consultation and custom quote')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/966534150198"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                {t('cta.whatsapp', 'واتساب', 'WhatsApp')}
              </a>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                {t('cta.contact', 'تواصل معنا', 'Contact Us')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;