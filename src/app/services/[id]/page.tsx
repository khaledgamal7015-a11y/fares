'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from '@/app/components/ui/MotionWrapper';
import { ArrowRight, ArrowLeft, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const [service, setService] = useState(null);
  const [relatedServices, setRelatedServices] = useState([]);

  useEffect(() => {
    if (id) {
      async function fetchService() {
        try {
          const res = await fetch(`/api/services/${id}`);
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();
          setService(data);
        } catch (err) {
          console.error('Error fetching service:', err);
          setService(null);
        }
      }
      fetchService();
    }
  }, [id]);

  useEffect(() => {
    async function fetchServices() {
      try {
        const res = await fetch('/api/services');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setRelatedServices(data);
      } catch (err) {
        console.error('Error fetching related services:', err);
        setRelatedServices([]);
      }
    }
    fetchServices();
  }, []);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {t('service.notFound', 'الخدمة غير موجودة', 'Service Not Found')}
          </h1>
          <Link
            href="/services"
            className="text-blue-600 hover:text-blue-700 flex items-center justify-center"
          >
            {t('service.backToServices', 'العودة للخدمات', 'Back to Services')}
            {language.code === 'ar' ? (
              <ArrowLeft className="w-4 h-4 mr-2" />
            ) : (
              <ArrowRight className="w-4 h-4 ml-2" />
            )}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          {service.photoFilename ? (
            <img
              src={`/api/photos/view/${service.photoFilename}`}
              alt={language.code === 'ar' ? service.name : service.nameEn}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
              <div className="text-white text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl font-bold">S</span>
                </div>
                <p className="text-lg opacity-75">{language.code === 'ar' ? service.name : service.nameEn}</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto px-4"
          >
            <h1 className="text-5xl font-bold mb-4">
              {language.code === 'ar' ? service.name : service.nameEn}
            </h1>
            <p className="text-xl">
              {language.code === 'ar' ? service.description : service.descriptionEn}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t('service.details', 'تفاصيل الخدمة', 'Service Details')}
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {language.code === 'ar' ? service.description : service.descriptionEn}
              </p>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {t('service.features', 'ما نقدمه لك:', 'What We Offer:')}
                </h3>
                <ul className="space-y-3">
                  {(language.code === 'ar' ? service.features : service.featuresEn).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 ml-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back to Services */}
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                {language.code === 'ar' ? (
                  <>
                    <ArrowLeft className="w-4 h-4 ml-2" />
                    <span>{t('service.backToServices', 'العودة للخدمات', 'Back to Services')}</span>
                  </>
                ) : (
                  <>
                    <ArrowRight className="w-4 h-4 mr-2" />
                    <span>{t('service.backToServices', 'العودة للخدمات', 'Back to Services')}</span>
                  </>
                )}
              </Link>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl border">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {t('service.needService', 'تحتاج هذه الخدمة؟', 'Need This Service?')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('service.contactDesc', 'تواصل معنا الآن للحصول على عرض سعر مخصص ومواعيد مناسبة', 'Contact us now for a custom quote and suitable appointments')}
                </p>
                
                <div className="space-y-4">
                  <a
                    href="https://wa.me/966534150198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors w-full"
                  >
                    <MessageCircle className="w-5 h-5 ml-2" />
                    {t('service.whatsapp', 'واتساب', 'WhatsApp')}
                  </a>
                  
                  <a
                    href="tel:0534150198"
                    className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors w-full"
                  >
                    <Phone className="w-5 h-5 ml-2" />
                    {t('service.call', 'اتصال مباشر', 'Direct Call')}
                  </a>
                </div>

                <div className="mt-6 text-center">
                  <p className="text-gray-600 text-sm">
                    {t('service.phone', 'رقم الهاتف:', 'Phone:')} 
                    <span className="font-semibold text-gray-800"> 0534150198</span>
                  </p>
                </div>
              </div>

              {/* Service Image */}
              <div className="rounded-xl overflow-hidden shadow-lg">
                {service.photoFilename ? (
                  <img
                    src={`/api/photos/view/${service.photoFilename}`}
                    alt={language.code === 'ar' ? service.name : service.nameEn}
                    className="w-full h-64 object-cover"
                  />
                ) : (
                  <div className="w-full h-64 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <span className="text-4xl font-bold">S</span>
                      </div>
                      <p className="text-lg opacity-75">{language.code === 'ar' ? service.name : service.nameEn}</p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('service.related', 'خدمات أخرى قد تهمك', 'Other Services You Might Like')}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServices
              .filter(s => (s._id || s.id) !== (service._id || service.id))
              .slice(0, 3)
              .map((relatedService, index) => (
                <motion.div
                  key={relatedService._id || relatedService.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
                >
                  <Link href={`/services/${relatedService._id || relatedService.id}`}>
                    <div className="relative overflow-hidden">
                      {relatedService.photoFilename ? (
                        <img
                          src={`/api/photos/view/${relatedService.photoFilename}`}
                          alt={language.code === 'ar' ? relatedService.name : relatedService.nameEn}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-48 bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center">
                          <div className="text-white text-center">
                            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <span className="text-2xl font-bold">S</span>
                            </div>
                            <p className="text-sm opacity-75">{language.code === 'ar' ? relatedService.name : relatedService.nameEn}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {language.code === 'ar' ? relatedService.name : relatedService.nameEn}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {language.code === 'ar' ? relatedService.description : relatedService.descriptionEn}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;