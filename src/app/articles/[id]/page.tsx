'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from '@/app/components/ui/MotionWrapper';
import { ArrowRight, ArrowLeft, Calendar, User, BookOpen, Share2, MessageCircle, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const [article, setArticle] = useState(null);
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    if (id) {
      async function fetchData() {
        const [articleRes, articlesRes] = await Promise.all([
          fetch(`/api/articles/${id}`),
          fetch('/api/articles')
        ]);
        const articleData = await articleRes.json();
        const articlesData = await articlesRes.json();
        setArticle(articleData);
        setAllArticles(articlesData);
      }
      fetchData();
    }
  }, [id]);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {t('article.notFound', 'المقال غير موجود', 'Article Not Found')}
          </h1>
          <Link
            href="/articles"
            className="text-blue-600 hover:text-blue-700 flex items-center justify-center"
          >
            {t('article.backToArticles', 'العودة للمقالات', 'Back to Articles')}
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

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `${article.title} - ${article.excerpt || ''}`;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: shareText,
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert(t('article.linkCopied', 'تم نسخ الرابط', 'Link copied to clipboard'));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <div className="absolute inset-0">
          {article.photoFilename ? (
            <img
              src={`/api/photos/view/${article.photoFilename}`}
              alt={article.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
              <div className="text-white text-center">
                <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg opacity-75">{article.title}</p>
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
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm inline-block mb-4">
              {article.category}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              {article.title}
            </h1>
            <div className="flex items-center justify-center space-x-4 space-x-reverse text-sm sm:text-base">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Calendar className="w-4 h-4" />
                <span>{new Date(article.date).toLocaleDateString(language.code === 'ar' ? 'ar-SA' : 'en-US')}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2 space-x-reverse">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2 space-x-reverse">
                <BookOpen className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                  style={{
                    direction: language.code === 'ar' ? 'rtl' : 'ltr',
                    textAlign: language.code === 'ar' ? 'right' : 'left'
                  }}
                />
                
                {/* Share Section */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {t('article.share', 'شارك المقال', 'Share Article')}
                    </h3>
                    <button
                      onClick={handleShare}
                      className="flex items-center space-x-2 space-x-reverse bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Share2 className="w-4 h-4" />
                      <span>{t('article.shareButton', 'مشاركة', 'Share')}</span>
                    </button>
                  </div>
                </div>

                {/* Back to Articles */}
                <div className="mt-6">
                  <Link
                    href="/articles"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    {language.code === 'ar' ? (
                      <>
                        <ArrowLeft className="w-4 h-4 ml-2" />
                        <span>{t('article.backToArticles', 'العودة للمقالات', 'Back to Articles')}</span>
                      </>
                    ) : (
                      <>
                        <ArrowRight className="w-4 h-4 mr-2" />
                        <span>{t('article.backToArticles', 'العودة للمقالات', 'Back to Articles')}</span>
                      </>
                    )}
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Contact Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  {t('article.needHelp', 'تحتاج مساعدة؟', 'Need Help?')}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {t('article.contactDesc', 'تواصل معنا للحصول على استشارة مجانية', 'Contact us for free consultation')}
                </p>
                
                <div className="space-y-3">
                  <a
                    href="https://wa.me/966534150198"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors space-x-2 space-x-reverse"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{t('article.whatsapp', 'واتساب', 'WhatsApp')}</span>
                  </a>
                  
                  <a
                    href="tel:0534150198"
                    className="flex items-center justify-center bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors space-x-2 space-x-reverse"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">{t('article.call', 'اتصال', 'Call')}</span>
                  </a>
                </div>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  {t('article.related', 'مقالات ذات صلة', 'Related Articles')}
                </h3>
                <div className="space-y-4">
                  {allArticles
                    .filter(a => (a._id || a.id) !== (article._id || article.id))
                    .slice(0, 3)
                    .map((relatedArticle) => (
                      <Link
                        key={relatedArticle._id || relatedArticle.id}
                        href={`/articles/${relatedArticle._id || relatedArticle.id}`}
                        className="block group"
                      >
                        <div className="flex space-x-3 space-x-reverse">
                          <img
                            src={relatedArticle.image}
                            alt={relatedArticle.title}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
                              {relatedArticle.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-1">
                              {new Date(relatedArticle.date).toLocaleDateString(language.code === 'ar' ? 'ar-SA' : 'en-US')}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticleDetail;