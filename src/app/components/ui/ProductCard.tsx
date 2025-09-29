'use client';

import React from 'react';
import { motion } from './MotionWrapper';
import { Plus } from 'lucide-react';
import { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addToCart } = useCart();
  const { t, language } = useLanguage();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        {product.photoFilename ? (
          <img
            src={`/api/photos/view/${product.photoFilename}`}
            alt={language.code === 'ar' ? product.name : product.nameEn}
            className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-40 sm:h-48 bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl font-bold">P</span>
              </div>
              <p className="text-sm opacity-75">{language.code === 'ar' ? product.name : product.nameEn}</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4 sm:p-6">
        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2">
          {language.code === 'ar' ? product.name : product.nameEn}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-2">
          {language.code === 'ar' ? product.description : product.descriptionEn}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600">
            {product.price} 
            <span className="text-xs sm:text-sm text-gray-500 mr-1">
              {t('currency', 'ريال', 'SAR')}
            </span>
          </div>
          
          <motion.button
            onClick={handleAddToCart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:from-blue-700 hover:to-green-600 transition-all duration-300 flex items-center space-x-1 sm:space-x-2 space-x-reverse btn-touch"
          >
            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm">
              {t('product.addToCart', 'أضف إلى السلة', 'Add to Cart')}
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;