import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart();
  const { t, language } = useLanguage();

  const sendToWhatsApp = () => {
    if (items.length === 0) return;

    const orderDetails = items.map(item => {
      const name = language.code === 'ar' ? item.name : item.nameEn;
      return `• ${name} - ${item.quantity} × ${item.price} ${t('currency', 'ريال', 'SAR')} = ${item.quantity * item.price} ${t('currency', 'ريال', 'SAR')}`;
    }).join('\n');

    const total = getTotalPrice();
    const message = `${t('cart.whatsapp.greeting', 'السلام عليكم،\nأود طلب الخدمات التالية:', 'Hello,\nI would like to order the following services:')}\n\n${orderDetails}\n\n${t('cart.whatsapp.total', 'المجموع الكلي:', 'Total:')} ${total} ${t('currency', 'ريال', 'SAR')}\n\n${t('cart.whatsapp.thanks', 'شكراً لكم', 'Thank you')}`;

    const whatsappUrl = `https://wa.me/966534150198?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-white p-12 rounded-xl shadow-lg">
              <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
              <h1 className="text-3xl font-bold text-gray-800 mb-4">
                {t('cart.empty.title', 'سلة المشتريات فارغة', 'Shopping Cart is Empty')}
              </h1>
              <p className="text-gray-600 text-lg mb-8">
                {t('cart.empty.description', 'لم تضف أي منتجات إلى سلة المشتريات بعد', "You haven't added any products to your cart yet")}
              </p>
              <a
                href="/store"
                className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-green-600 transition-colors inline-block"
              >
                {t('cart.empty.browse', 'تصفح المنتجات', 'Browse Products')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800">
              {t('cart.title', 'سلة المشتريات', 'Shopping Cart')}
            </h1>
            <button
              onClick={clearCart}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              {t('cart.clear', 'إفراغ السلة', 'Clear Cart')}
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Cart Items */}
            <div className="divide-y divide-gray-200">
              {items.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-4 space-x-reverse">
                    {/* Product Image */}
                    <img
                      src={item.image}
                      alt={language.code === 'ar' ? item.name : item.nameEn}
                      className="w-20 h-20 object-cover rounded-lg"
                    />

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {language.code === 'ar' ? item.name : item.nameEn}
                      </h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {language.code === 'ar' ? item.description : item.descriptionEn}
                      </p>
                      <div className="text-blue-600 font-semibold mt-2">
                        {item.price} {t('currency', 'ريال', 'SAR')}
                      </div>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-3 space-x-reverse">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-lg font-bold text-gray-800">
                      {item.quantity * item.price} {t('currency', 'ريال', 'SAR')}
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-gray-50 p-6 border-t">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xl font-semibold text-gray-800">
                  {t('cart.total', 'المجموع الكلي:', 'Total:')}
                </span>
                <span className="text-2xl font-bold text-blue-600">
                  {getTotalPrice()} {t('currency', 'ريال', 'SAR')}
                </span>
              </div>

              <motion.button
                onClick={sendToWhatsApp}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-500 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 space-x-reverse"
              >
                <MessageCircle className="w-6 h-6" />
                <span>{t('cart.sendWhatsapp', 'إرسال عبر واتساب', 'Send via WhatsApp')}</span>
              </motion.button>

              <p className="text-gray-600 text-sm text-center mt-4">
                {t('cart.whatsapp.note', 'سيتم فتح واتساب مع تفاصيل طلبك', 'WhatsApp will open with your order details')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;