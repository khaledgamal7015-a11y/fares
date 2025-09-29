'use client';

import React from 'react';
import { motion } from '@/app/components/ui/MotionWrapper';
import { Clock, Calendar, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Schedule: React.FC = () => {
  const { t } = useLanguage();

  const workingHours = [
    {
      day: t('days.saturday', 'السبت', 'Saturday'),
      hours: '8:00 AM - 8:00 PM',
      available: true
    },
    {
      day: t('days.sunday', 'الأحد', 'Sunday'),
      hours: '8:00 AM - 8:00 PM',
      available: true
    },
    {
      day: t('days.monday', 'الاثنين', 'Monday'),
      hours: '8:00 AM - 8:00 PM',
      available: true
    },
    {
      day: t('days.tuesday', 'الثلاثاء', 'Tuesday'),
      hours: '8:00 AM - 8:00 PM',
      available: true
    },
    {
      day: t('days.wednesday', 'الأربعاء', 'Wednesday'),
      hours: '8:00 AM - 8:00 PM',
      available: true
    },
    {
      day: t('days.thursday', 'الخميس', 'Thursday'),
      hours: '8:00 AM - 8:00 PM',
      available: true
    },
    {
      day: t('days.friday', 'الجمعة', 'Friday'),
      hours: t('schedule.closed', 'مغلق', 'Closed'),
      available: false
    }
  ];

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM',
    '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  const bookingMessage = t(
    'schedule.bookingMessage',
    'السلام عليكم، أود حجز موعد لخدماتكم. يرجى تزويدي بالأوقات المتاحة.',
    'Hello, I would like to book an appointment for your services. Please provide me with available times.'
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Schedule Hero"
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
              {t('schedule.hero.title', 'مواعيد العمل', 'Working Hours')}
            </h1>
            <p className="text-xl">
              {t('schedule.hero.subtitle', 'تعرف على أوقات عملنا واحجز موعدك', 'Know our working hours and book your appointment')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Working Hours Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('schedule.title', 'أوقات العمل الأسبوعية', 'Weekly Working Hours')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('schedule.description', 'نحن متاحون لخدمتكم في الأوقات التالية', 'We are available to serve you at the following times')}
            </p>
          </motion.div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {workingHours.map((schedule, index) => (
              <motion.div
                key={schedule.day}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex items-center justify-between p-6 border-b border-gray-200 last:border-b-0 ${
                  !schedule.available ? 'bg-gray-50' : 'hover:bg-blue-50'
                } transition-colors`}
              >
                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-blue-500 ml-3" />
                  <span className="text-lg font-semibold text-gray-800">
                    {schedule.day}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-gray-500 ml-2" />
                  <span className={`text-lg ${schedule.available ? 'text-green-600' : 'text-red-600'} font-medium`}>
                    {schedule.hours}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Slots Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t('schedule.timeSlots', 'المواعيد المتاحة يومياً', 'Available Daily Time Slots')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('schedule.timeSlotsDesc', 'يمكنك اختيار الوقت المناسب لك من المواعيد التالية', 'You can choose the suitable time from the following appointments')}
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {timeSlots.map((timeSlot, index) => (
              <motion.div
                key={timeSlot}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 border border-blue-200 p-4 rounded-lg text-center hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-sm font-semibold text-gray-800">
                  {timeSlot}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-green-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              {t('schedule.booking.title', 'احجز موعدك الآن', 'Book Your Appointment Now')}
            </h2>
            <p className="text-xl mb-8">
              {t('schedule.booking.description', 'تواصل معنا لحجز موعد مناسب وضمان أفضل خدمة', 'Contact us to book a suitable appointment and ensure the best service')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <motion.a
                href={`https://wa.me/966534150198?text=${encodeURIComponent(bookingMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 space-x-reverse"
              >
                <MessageCircle className="w-6 h-6" />
                <span>{t('schedule.booking.whatsapp', 'احجز عبر واتساب', 'Book via WhatsApp')}</span>
              </motion.a>

              <motion.a
                href="tel:0534150198"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-6 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center space-x-2 space-x-reverse"
              >
                <Phone className="w-6 h-6" />
                <span>{t('schedule.booking.call', 'احجز بالاتصال', 'Book by Call')}</span>
              </motion.a>
            </div>

            <div className="mt-8 p-6 bg-white bg-opacity-20 rounded-lg backdrop-blur-sm">
              <h3 className="text-lg font-semibold mb-4">
                {t('schedule.info.title', 'معلومات مهمة', 'Important Information')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full ml-2"></span>
                  {t('schedule.info.advance', 'يفضل الحجز المسبق بـ 24 ساعة', 'Advance booking preferred 24 hours')}
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full ml-2"></span>
                  {t('schedule.info.emergency', 'خدمة الطوارئ متاحة', 'Emergency service available')}
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full ml-2"></span>
                  {t('schedule.info.free', 'الاستشارة والمعاينة مجانية', 'Free consultation and inspection')}
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-white rounded-full ml-2"></span>
                  {t('schedule.info.guarantee', 'ضمان على جميع الخدمات', 'Guarantee on all services')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Schedule;