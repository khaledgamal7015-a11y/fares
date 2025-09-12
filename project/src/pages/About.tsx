import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Calendar, CheckCircle, Award, Target, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import AnimatedCounter from '../components/ui/AnimatedCounter';

const About: React.FC = () => {
  const { t } = useLanguage();

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

  const values = [
    {
      icon: Award,
      title: t('values.quality.title', 'الجودة', 'Quality'),
      description: t('values.quality.desc', 'نحن ملتزمون بتقديم أعلى معايير الجودة في جميع خدماتنا', 'We are committed to delivering the highest quality standards in all our services')
    },
    {
      icon: Target,
      title: t('values.precision.title', 'الدقة', 'Precision'),
      description: t('values.precision.desc', 'نعمل بدقة متناهية لضمان تحقيق أفضل النتائج', 'We work with utmost precision to ensure the best results')
    },
    {
      icon: Heart,
      title: t('values.care.title', 'الاهتمام', 'Care'),
      description: t('values.care.desc', 'نهتم بأدق التفاصيل لضمان رضا عملائنا الكامل', 'We care about every detail to ensure complete customer satisfaction')
    }
  ];

  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const { ref: valuesRef, inView: valuesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/121212.png"
            alt="About Us Hero"
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
              {t('about.hero.title', 'من نحن', 'About Us')}
            </h1>
            <p className="text-xl">
              {t('about.hero.subtitle', 'تعرف على قصة نجاحنا وخبرتنا', 'Learn about our success story and expertise')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-800">
                {t('about.title', 'مؤسسة الفارس وواحد للصيانة والنظافة', 'Al-Fares & One Maintenance & Cleaning')}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.p1', 'تأسست مؤسسة الفارس وواحد للصيانة والنظافة بهدف تقديم خدمات متميزة في مجال الصيانة والنظافة في المملكة العربية السعودية. نحن نفخر بخبرتنا الممتدة لسنوات طويلة في خدمة عملائنا الكرام.', 'Al-Fares & One Maintenance & Cleaning was established to provide distinguished services in the field of maintenance and cleaning in Saudi Arabia. We are proud of our extensive experience in serving our valued customers.')}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.p2', 'نحن نسعى دائماً لتحقيق أعلى معايير الجودة والاحترافية في جميع خدماتنا، ونضع رضا العميل في المقدمة. فريقنا المتخصص يعمل بأحدث التقنيات والمعدات لضمان تقديم خدمة متميزة.', 'We always strive to achieve the highest standards of quality and professionalism in all our services, putting customer satisfaction first. Our specialized team works with the latest technologies and equipment to ensure exceptional service delivery.')}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {t('about.p3', 'مؤسستنا مرخصة ومعتمدة من الجهات المختصة، ونلتزم بجميع معايير السلامة والجودة المطلوبة. نحن شريكك الموثوق للحفاظ على نظافة وسلامة منزلك أو مؤسستك.', 'Our establishment is licensed and certified by the relevant authorities, and we adhere to all required safety and quality standards. We are your trusted partner in maintaining the cleanliness and safety of your home or institution.')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <img
                src="/152125146_715b21d0-5b60-4b4c-aa10-d7e612680ec2 (2).jpg"
                alt="Our Services"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/259.jpg"
                alt="Professional Team"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/97t.jpg"
                alt="Quality Work"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="/152125146_715b21d0-5b60-4b4c-aa10-s.jpg"
                alt="Modern Equipment"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('stats.title', 'إنجازاتنا بالأرقام', 'Our Achievements in Numbers')}
            </h2>
            <p className="text-gray-600 text-lg">
              {t('stats.description', 'أرقام تتحدث عن جودة خدماتنا ورضا عملائنا', 'Numbers that speak about the quality of our services and customer satisfaction')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-800 mb-2">
                  <AnimatedCounter end={stat.number} suffix={stat.suffix} />
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t('values.title', 'قيمنا ومبادئنا', 'Our Values & Principles')}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              {t('values.description', 'نحن نعمل وفقاً لمجموعة من القيم والمبادئ التي تضمن تقديم أفضل خدمة لعملائنا', 'We work according to a set of values and principles that ensure providing the best service to our customers')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="text-center bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;