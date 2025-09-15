import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChevronRight,
  ChevronLeft,
  Users,
  Calendar,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import { services } from '../data/services';
import { products, offers } from '../data/products';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import ProductCard from '../components/ui/ProductCard';

const Home: React.FC = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/1.png.jpg",
    "/2.png.jpg",
    "/3.png.jpg",
    "/4.png.jpg",
    "/5.png.jpg"
  ];

  const stats = [
    {
      number: 500,
      suffix: '+',
      label: t('stats.clients', 'عميل سعيد', 'Happy Clients'),
      icon: Users
    },
    {
      number: 7,
      suffix: '',
      label: t('stats.experience', 'سنوات الخبرة', 'Years Experience'),
      icon: Calendar
    },
    {
      number: 1200,
      suffix: '+',
      label: t('stats.projects', 'مشروع منجز', 'Completed Projects'),
      icon: CheckCircle
    }
  ];

  const articles = [
    {
      id: 1,
      title: language.code === 'ar' ? 'نصائح للحفاظ على نظافة المنزل يومياً' : 'Daily Home Cleaning Tips',
      excerpt: language.code === 'ar'
        ? 'تعرف على أفضل الطرق للحفاظ على نظافة منزلك بشكل يومي دون عناء'
        : 'Learn the best ways to maintain daily home cleanliness effortlessly',
      image: 'https://images.pexels.com/photos/4239146/pexels-photo-4239146.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: '2025-01-15'
    },
    {
      id: 2,
      title: language.code === 'ar' ? 'أهمية تنظيف المكيفات بانتظام' : 'Importance of Regular AC Cleaning',
      excerpt: language.code === 'ar'
        ? 'لماذا يجب تنظيف المكيفات دورياً وكيف يؤثر ذلك على صحتك وفاتورة الكهرباء'
        : 'Why you should clean ACs regularly and how it affects your health and electricity bill',
      image: 'https://images.pexels.com/photos/8865613/pexels-photo-8865613.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: '2025-01-12'
    },
    {
      id: 3,
      title: language.code === 'ar' ? 'كيفية اختيار منتجات التنظيف الآمنة' : 'How to Choose Safe Cleaning Products',
      excerpt: language.code === 'ar'
        ? 'دليل شامل لاختيار منتجات التنظيف الآمنة للعائلة والبيئة'
        : 'Complete guide to choosing family and eco-friendly cleaning products',
      image: 'https://images.pexels.com/photos/4239086/pexels-photo-4239086.jpeg?auto=compress&cs=tinysrgb&w=500',
      date: '2025-01-10'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: storeRef, inView: storeInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: offersRef, inView: offersInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: articlesRef, inView: articlesInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
<section className="relative w-full h-screen overflow-hidden bg-white">

  <div className="absolute inset-0 flex items-center justify-center">
    {heroImages.map((image, index) => (
      <motion.div
        key={index}
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: index === currentSlide ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <img
  src={image}
  alt="Hero"
  className="w-full h-full object-contain sm:object-cover"
  style={{ backgroundColor: "#38bdf8" }}
/>

        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </motion.div>
    ))}
  </div>



        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="absolute inset-0 flex flex-col items-end justify-end text-center text-white px-4 sm:px-6 lg:px-8">
            <div className="w-full flex flex-col items-center mb-10">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
              >
                {t('hero.title', '', 'Al-Fares & One')}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 px-2"
              >
                {t('hero.subtitle', ' ', 'Maintenance & Cleaning - Professional Service with High Quality')}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
              >
                <Link
                  to="/services"
                  className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-center btn-touch"
                >
                  {t('hero.services', 'اكتشف خدماتنا', 'Discover Our Services')}
                </Link>
                <a
                  href="https://wa.me/966534150198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto text-center btn-touch"
                >
                  {t('hero.contact', 'تواصل معنا', 'Contact Us')}
                </a>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm btn-touch"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm btn-touch"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 btn-touch ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* 2. About Us Section */}
      <section ref={aboutRef} className="section-padding bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
              {t('about.title', 'من نحن', 'About Us')}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-4xl mx-auto leading-relaxed px-2">
              {t('about.description', 'مؤسسة الفارس وواحد للصيانة والنظافة هي شركة رائدة في مجال خدمات التنظيف والصيانة في المملكة العربية السعودية. نحن نقدم خدمات متميزة وشاملة للمنازل والشركات والمؤسسات، مع التزامنا بأعلى معايير الجودة والاحترافية. فريقنا المتخصص يستخدم أحدث التقنيات والمعدات لضمان تقديم خدمة استثنائية تلبي توقعات عملائنا الكرام.', 'Al-Fares & One Maintenance & Cleaning is a leading company in cleaning and maintenance services in Saudi Arabia. We provide distinguished and comprehensive services for homes, companies and institutions, with our commitment to the highest standards of quality and professionalism. Our specialized team uses the latest technologies and equipment to ensure exceptional service delivery that meets our valued customers expectations.')}
            </p>
          </motion.div>

          {/* Stats Counter */}
          <div ref={statsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center bg-gradient-to-br from-blue-50 to-green-50 p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our Services Section */}
      <section ref={servicesRef} className="section-padding bg-gray-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {t('services.title', 'خدماتنا', 'Our Services')}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-2">
              {t('services.description', 'نقدم مجموعة واسعة من خدمات الصيانة والنظافة المتخصصة', 'We offer a wide range of specialized maintenance and cleaning services')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={language.code === 'ar' ? service.name : service.nameEn}
                    className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">
                    {language.code === 'ar' ? service.name : service.nameEn}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm sm:text-base">
                    {language.code === 'ar' ? service.description : service.descriptionEn}
                  </p>
                  
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group text-sm sm:text-base btn-touch"
                  >
                    <span>{t('service.readMore', 'المزيد', 'Read More')}</span>
                    {language.code === 'ar' ? (
                      <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 space-x-reverse btn-touch"
            >
              <span>{t('services.viewAll', 'عرض جميع الخدمات', 'View All Services')}</span>
              {language.code === 'ar' ? (
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 4. Store Section */}
      <section ref={storeRef} className="section-padding bg-white">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {t('store.title', 'متجرنا', 'Our Store')}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-2">
              {t('store.description', 'اختر من بين مجموعة متنوعة من عروض الخدمات بأسعار تنافسية', 'Choose from a variety of service offers at competitive prices')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.slice(0, 3).map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/store"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-purple-700 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 space-x-reverse btn-touch"
            >
              <span>{t('store.viewAll', 'عرض جميع المنتجات', 'View All Products')}</span>
              {language.code === 'ar' ? (
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 5. Offers Section */}
      <section ref={offersRef} className="section-padding bg-gradient-to-br from-red-50 to-orange-50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={offersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {t('offers.title', 'العروض الخاصة', 'Special Offers')}
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto px-2">
              {t('offers.description', 'استفد من عروضنا المميزة واحصل على أفضل الخدمات بأسعار مخفضة', 'Take advantage of our special offers and get the best services at reduced prices')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {offers.map((offer, index) => (
              <ProductCard key={offer.id} product={offer} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={offersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <Link
              to="/offers"
              className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:from-red-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2 space-x-reverse btn-touch"
            >
              <span>{t('offers.viewAll', 'عرض جميع العروض', 'View All Offers')}</span>
              {language.code === 'ar' ? (
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </Link>
          </motion.div>
        </div>
      </section>

      
      {/* 7. Contact Us Section */}
      <section ref={contactRef} className="section-padding bg-gradient-to-br from-blue-600 to-green-500">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Contact Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                {t('contact.title', 'تواصل معنا', 'Contact Us')}
              </h2>
              <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
                {t('contact.description', 'نحن هنا لخدمتكم على مدار الساعة. تواصلوا معنا للحصول على استشارة مجانية وعرض سعر مخصص لاحتياجاتكم. فريقنا المتخصص جاهز للإجابة على جميع استفساراتكم وتقديم أفضل الحلول لكم.', 'We are here to serve you around the clock. Contact us for a free consultation and a custom quote for your needs. Our specialized team is ready to answer all your inquiries and provide the best solutions for you.')}
              </p>
              
              <motion.a
                href="https://wa.me/966534150198"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-flex items-center space-x-2 space-x-reverse btn-touch w-full sm:w-auto justify-center sm:justify-start"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                <span>{t('contact.whatsapp', 'تواصل عبر واتساب', 'Contact via WhatsApp')}</span>
              </motion.a>

              <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4 text-sm sm:text-base lg:text-lg">
                <div className="flex items-center space-x-3 space-x-reverse">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>{t('contact.phone', 'الهاتف: 966534150198', 'Phone: 966534150198')}</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>{t('contact.email', 'البريد: khaledgamal7015@gmail.com', 'Email: info@alfares.com')}</span>
                </div>
                <div className="flex items-center space-x-3 space-x-reverse">
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                  <span>{t('contact.address', 'العنوان:    القصيم - بريده المملكة العربية السعودية', 'Address: Riyadh, Saudi Arabia')}</span>
                </div>
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={contactInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white p-3 sm:p-4 rounded-xl shadow-2xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661147.3458152153!2d45.79060960156535!3d26.34788861193916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x157f59ad6fe2be3b%3A0xe1fb621d3b0d00aa!2z2YXZhti32YLYqSDYp9mE2YLYtdmK2YUg2KfZhNiz2LnZiNiv2YrYqQ!5e0!3m2!1sar!2seg!4v1757626092683!5m2!1sar!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;