'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from '@/app/components/ui/MotionWrapper';
import { 
  Menu, 
  X, 
  Phone, 
  ShoppingCart, 
  Globe, 
  ChevronDown,
  Home,
  Info,
  Wrench,
  Store,
  Percent,
  BookOpen,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCart } from '@/contexts/CartContext';
import { services } from '@/data/services';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();
  const { getTotalItems } = useCart();
  const pathname = usePathname();
  const totalItems = getTotalItems();

  const navigation = [
    { 
      name: t('nav.home', 'الرئيسية', 'Home'), 
      href: '/', 
      icon: Home 
    },
    { 
      name: t('nav.about', 'من نحن', 'About Us'), 
      href: '/about', 
      icon: Info 
    },
    { 
      name: t('nav.services', 'خدماتنا', 'Our Services'), 
      href: '/services', 
      icon: Wrench,
      hasDropdown: true,
      dropdownItems: services.map(service => ({
        name: language.code === 'ar' ? service.name : service.nameEn,
        href: `/services/${service.id}`
      }))
    },
    { 
      name: t('nav.store', 'المتجر', 'Store'), 
      href: '/store', 
      icon: Store 
    },
    { 
      name: t('nav.offers', 'العروض', 'Offers'), 
      href: '/offers', 
      icon: Percent 
    },
    { 
      name: t('nav.articles', 'المقالات', 'Articles'), 
      href: '/articles', 
      icon: BookOpen 
    },
    { 
      name: t('nav.schedule', 'مواعيدنا', 'Schedule'), 
      href: '/schedule', 
      icon: Calendar 
    },
    { 
      name: t('nav.contact', 'تواصل معنا', 'Contact Us'), 
      href: '/contact', 
      icon: MessageCircle 
    }
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 space-x-reverse flex-shrink-0">
            <img 
              src="/Untitled-1.png" 
              alt="شعار الموقع" 
              className="h-8 sm:h-10 lg:h-12 xl:h-14 w-auto object-contain"
            />
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-6 space-x-reverse">
            {navigation.map((item) => (
              <div key={item.href} className="relative group">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 space-x-reverse px-2 2xl:px-3 py-2 rounded-lg transition-colors text-sm 2xl:text-base ${
                        typeof window !== 'undefined' && location.pathname.startsWith('/services')
                          ? 'bg-blue-100 text-blue-600'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <item.icon className="w-4 h-4 2xl:w-5 2xl:h-5" />
                      <span className="whitespace-nowrap">{item.name}</span>
                      <ChevronDown className="w-3 h-3 2xl:w-4 2xl:h-4" />
                    </button>
                    
                    {isServicesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full mt-2 w-64 2xl:w-72 bg-white rounded-lg shadow-xl border z-50 max-h-96 overflow-y-auto"
                      >
                        <div className="py-2">
                          <Link
                            href="/services"
                            className="block px-4 py-2 text-sm 2xl:text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-semibold"
                          >
                            {t('nav.allServices', 'جميع الخدمات', 'All Services')}
                          </Link>
                          <hr className="my-2" />
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="block px-4 py-2 text-sm 2xl:text-base text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center space-x-1 space-x-reverse px-2 2xl:px-3 py-2 rounded-lg transition-colors text-sm 2xl:text-base ${
                      isActive(item.href)
                        ? 'bg-blue-100 text-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <item.icon className="w-4 h-4 2xl:w-5 2xl:h-5" />
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 space-x-reverse flex-shrink-0">
            {/* Language Toggle - Hidden on small screens */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="hidden sm:flex p-2 lg:p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors btn-touch"
            >
              <Globe className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
            </motion.button>

            {/* Shopping Cart */}
            <Link href="/cart" className="relative">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 lg:p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors btn-touch"
              >
                <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                {totalItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 lg:w-6 lg:h-6 flex items-center justify-center font-bold"
                  >
                    {totalItems > 99 ? '99+' : totalItems}
                  </motion.span>
                )}
              </motion.div>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 lg:p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors btn-touch"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 lg:w-6 lg:h-6" />
              ) : (
                <Menu className="w-5 h-5 lg:w-6 lg:h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden border-t border-gray-200 py-3 sm:py-4"
          >
            <div className="space-y-2">
              {/* Mobile Language Toggle */}
              <div className="px-2 sm:hidden">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={toggleLanguage}
                  className="flex items-center space-x-2 space-x-reverse w-full p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors btn-touch"
                >
                  <Globe className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-700 text-base font-medium">
                    {language.code === 'ar' ? 'English' : 'العربية'}
                  </span>
                </motion.button>
              </div>
              
              {/* Mobile Navigation Links */}
              {navigation.map((item) => (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`flex items-center justify-between w-full space-x-2 space-x-reverse px-2 py-3 rounded-lg transition-colors text-base font-medium btn-touch ${
                          typeof window !== 'undefined' && location.pathname.startsWith('/services')
                            ? 'bg-blue-100 text-blue-600'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      >
                        <div className="flex items-center space-x-2 space-x-reverse">
                          <item.icon className="w-5 h-5" />
                          <span>{item.name}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isMobileServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-2 mr-4 space-y-1 max-h-64 overflow-y-auto"
                        >
                          <Link
                            href="/services"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                            className="block px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg font-semibold btn-touch"
                          >
                            {t('nav.allServices', 'جميع الخدمات', 'All Services')}
                          </Link>
                          <hr className="my-1" />
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                              className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg btn-touch"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-2 space-x-reverse px-2 py-3 rounded-lg transition-colors text-base font-medium btn-touch ${
                        isActive(item.href)
                          ? 'bg-blue-100 text-blue-600'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Button */}
              <div className="px-2 pt-3 border-t border-gray-200">
                <motion.a
                  href="tel:0534150198"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 space-x-reverse bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors w-full btn-touch text-base font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t('header.call', 'اتصل الآن', 'Call Now')}</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;