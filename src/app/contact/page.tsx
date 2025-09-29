'use client';

import React, { useState } from 'react';
import { motion } from '@/app/components/ui/MotionWrapper';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    customService: '',
    message: ''
  });
  const [showCustomService, setShowCustomService] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (name === 'service') {
      setShowCustomService(value === 'other');
      if (value !== 'other') {
        setFormData(prev => ({ ...prev, customService: '' }));
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const selectedService = formData.service === 'other' ? formData.customService : formData.service;
    const message = `${t('contact.whatsapp.greeting', 'السلام عليكم،', 'Hello,')}\n\n${t('contact.whatsapp.name', 'الاسم:', 'Name:')} ${formData.name}\n${t('contact.whatsapp.phone', 'رقم الهاتف:', 'Phone:')} ${formData.phone}\n${t('contact.whatsapp.service', 'الخدمة المطلوبة:', 'Required Service:')} ${selectedService}\n\n${t('contact.whatsapp.message', 'الرسالة:', 'Message:')}\n${formData.message}\n\n${t('contact.whatsapp.thanks', 'شكراً لكم', 'Thank you')}`;
    
    const whatsappUrl = `https://wa.me/966534150198?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const services = [
    { id: '', name: t('contact.form.selectService', 'اختر الخدمة', 'Select Service') },
    { id: 'home-cleaning', name: t('services.homeCleaningShort', 'تنظيف المنازل', 'Home Cleaning') },
    { id: 'corporate-cleaning', name: t('services.corporateCleaningShort', 'تنظيف الشركات والفنادق', 'Corporate & Hotel Cleaning') },
    { id: 'villa-cleaning', name: t('services.villaCleaningShort', 'تنظيف الفلل والشقق', 'Villa & Apartment Cleaning') },
    { id: 'ac-cleaning', name: t('services.acCleaningShort', 'تنظيف وغسيل المكيفات', 'AC Cleaning & Washing') },
    { id: 'tank-cleaning', name: t('services.tankCleaningShort', 'تنظيف وعزل الخزانات', 'Tank Cleaning & Insulation') },
    { id: 'pest-control', name: t('services.pestControlShort', 'مكافحة الحشرات', 'Pest Control') },
    { id: 'pool-cleaning', name: t('services.poolCleaningShort', 'تنظيف المسابح', 'Pool Cleaning') },
    { id: 'floor-cleaning', name: t('services.floorCleaningShort', 'تنظيف الأرضيات', 'Floor Cleaning') },
    { id: 'sterilization', name: t('services.sterilizationShort', 'خدمات التعقيم', 'Sterilization Services') },
    { id: 'restroom-cleaning', name: t('services.restroomCleaningShort', 'تنظيف دورات المياه', 'Restroom Cleaning') },
    { id: 'furniture-cleaning', name: t('services.furnitureCleaningShort', 'تنظيف قطع الأثاث', 'Furniture Cleaning') },
    { id: 'school-cleaning', name: t('services.schoolCleaningShort', 'تنظيف المدارس', 'School Cleaning') },
    { id: 'mosque-cleaning', name: t('services.mosqueCleaningShort', 'تنظيف المساجد', 'Mosque Cleaning') },
    { id: 'charity-cleaning', name: t('services.charityCleaningShort', 'تنظيف بيوت الرحمن', 'Charitable Houses Cleaning') },
    { id: 'remind-service', name: t('services.remindServiceShort', 'خدمة "ذكرني"', 'Remind Me Service') },
    { id: 'other', name: t('contact.form.otherService', 'خدمات أخرى', 'Other Services') }
  ];
  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone', 'رقم الهاتف', 'Phone Number'),
      value: '966534150198',
      link: 'tel:966534150198'
    },
    {
      icon: Mail,
      title: t('contact.email', 'البريد الإلكتروني', 'Email'),
      value: 'khaledgamal7015@gmail.com',
      link: 'mailto:khaledgamal7015@gmail.com'
    },
    {
      icon: MapPin,
      title: t('contact.address', 'العنوان', 'Address'),
      value: t('contact.addressValue', ' القصيم - بريده - المملكة العربية السعودية  ', 'Riyadh, Saudi Arabia'),
      link: null
    },
    {
      icon: Clock,
      title: t('contact.hours', 'ساعات العمل', 'Working Hours'),
      value: t('contact.hoursValue', 'السبت - الخميس: 8:00 ص - 8:00 م', 'Sat - Thu: 8:00 AM - 8:00 PM'),
      link: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/7504825/pexels-photo-7504825.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600 bg-opacity-70" />
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-4">
              {t('contact.hero.title', 'تواصل معنا', 'Contact Us')}
            </h1>
            <p className="text-xl">
              {t('contact.hero.subtitle', 'نحن هنا لخدمتكم والإجابة على استفساراتكم', 'We are here to serve you and answer your inquiries')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {t('contact.form.title', 'أرسل لنا رسالة', 'Send Us a Message')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.name', 'الاسم الكامل', 'Full Name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder={t('contact.form.namePlaceholder', 'أدخل اسمك الكامل', 'Enter your full name')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.phone', 'رقم الهاتف', 'Phone Number')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    placeholder={t('contact.form.phonePlaceholder', 'أدخل رقم هاتفك', 'Enter your phone number')}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.service', 'الخدمة المطلوبة', 'Required Service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                  >
                    {services.map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>

                {showCustomService && (
                  <div>
                    <label htmlFor="customService" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contact.form.customService', 'اكتب الخدمة المطلوبة', 'Write the required service')}
                    </label>
                    <input
                      type="text"
                      id="customService"
                      name="customService"
                      value={formData.customService}
                      onChange={handleInputChange}
                      required={showCustomService}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                      placeholder={t('contact.form.customServicePlaceholder', 'مثال: تنظيف مكاتب، صيانة عامة، إلخ...', 'Example: office cleaning, general maintenance, etc...')}
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.message', 'الرسالة', 'Message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
                    placeholder={t('contact.form.messagePlaceholder', 'اكتب رسالتك هنا...', 'Write your message here...')}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-colors flex items-center justify-center space-x-2 space-x-reverse"
                >
                  <Send className="w-5 h-5" />
                  <span>{t('contact.form.send', 'إرسال الرسالة', 'Send Message')}</span>
                </motion.button>

                <p className="text-sm text-gray-600 text-center">
                  {t('contact.form.note', 'سيتم فتح واتساب مع رسالتك', 'WhatsApp will open with your message')}
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  {t('contact.info.title', 'معلومات التواصل', 'Contact Information')}
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start space-x-4 space-x-reverse"
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-green-500 p-3 rounded-full flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800 mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {t('contact.quick.title', 'تواصل سريع', 'Quick Contact')}
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/966534150198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors space-x-2 space-x-reverse"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{t('contact.quick.whatsapp', 'واتساب', 'WhatsApp')}</span>
                  </a>
                  
                  <a
                    href="tel:0534150198"
                    className="flex items-center justify-center bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors space-x-2 space-x-reverse"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{t('contact.quick.call', 'اتصال مباشر', 'Direct Call')}</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('contact.map.title', 'موقعنا على الخريطة', 'Our Location on Map')}
            </h2>
            <p className="text-gray-600">
              {t('contact.map.description', 'زورنا في مقرنا الرئيسي أو تواصل معنا لترتيب زيارة', 'Visit us at our main office or contact us to arrange a visit')}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 p-4 rounded-xl shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661147.3458152153!2d45.79060960156535!3d26.34788861193916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f59ad6fe2be3b%3A0xe1fb621d3b0d00aa!2z2YXZhti32YLYqSDYp9mE2YLYtdmK2YUg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1757626092683!5m2!1sar!2seg"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;