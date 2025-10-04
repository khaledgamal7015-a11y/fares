'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface Stats {
  articles: number;
  services: number;
  products: number;
}

export default function AdminPage() {
  const [stats, setStats] = useState<Stats>({
    articles: 0,
    services: 0,
    products: 0
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [articlesRes, servicesRes, productsRes] = await Promise.all([
          fetch('/api/articles'),
          fetch('/api/services'),
          fetch('/api/products')
        ]);

        const [articles, services, products] = await Promise.all([
          articlesRes.ok ? articlesRes.json() : [],
          servicesRes.ok ? servicesRes.json() : [],
          productsRes.ok ? productsRes.json() : []
        ]);

        setStats({
          articles: articles.length || 0,
          services: services.length || 0,
          products: products.length || 0
        });
      } catch (error) {
        console.error('Error fetching stats:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  const statCards = [
    {
      title: 'Articles',
      count: stats.articles,
      href: '/admin/articles',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      description: 'Manage blog articles and content'
    },
    {
      title: 'Services',
      count: stats.services,
      href: '/admin/services',
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      description: 'Manage service offerings'
    },
    {
      title: 'Products',
      count: stats.products,
      href: '/admin/products',
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      description: 'Manage product catalog'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="mb-6 lg:mb-8">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1 lg:mt-2">Manage your website content</p>
      </div>

      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <div className="text-lg text-gray-600">Loading dashboard...</div>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
            {statCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-200"
              >
                <div className="p-4 lg:p-6">
                  <div className="flex items-center mb-3 lg:mb-4">
                    <div className={`${card.color} rounded-xl p-3 lg:p-4 text-white text-xl lg:text-2xl font-bold shadow-lg`}>
                      {card.title.charAt(0)}
                    </div>
                    <div className="ml-3 lg:ml-4">
                      <p className="text-xs lg:text-sm font-medium text-gray-600 uppercase tracking-wide">{card.title}</p>
                      <p className="text-2xl lg:text-3xl font-bold text-gray-900">{card.count}</p>
                    </div>
                  </div>
                  <p className="text-xs lg:text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                    {card.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6">
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-lg p-2 mr-3 font-bold text-sm lg:text-base">A</span>
                Quick Actions
              </h2>
              <div className="space-y-3 lg:space-y-4">
                <Link
                  href="/admin/articles/new"
                  className="flex items-center justify-between w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg text-sm lg:text-base"
                >
                  <span className="font-medium">Create New Article</span>
                  <span className="text-lg lg:text-xl font-bold">A</span>
                </Link>
                <Link
                  href="/admin/services/new"
                  className="flex items-center justify-between w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg text-sm lg:text-base"
                >
                  <span className="font-medium">Add New Service</span>
                  <span className="text-lg lg:text-xl font-bold">S</span>
                </Link>
                <Link
                  href="/admin/products/new"
                  className="flex items-center justify-between w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-4 rounded-lg transition-all duration-200 hover:shadow-lg text-sm lg:text-base"
                >
                  <span className="font-medium">Add New Product</span>
                  <span className="text-lg lg:text-xl font-bold">P</span>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6">
              <h2 className="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6 flex items-center">
                <span className="bg-green-100 text-green-600 rounded-lg p-2 mr-3 font-bold text-sm lg:text-base">S</span>
                System Status
              </h2>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-xs lg:text-sm font-medium text-gray-700">Database Connected</span>
                  </div>
                  <span className="text-green-600 text-xs lg:text-sm">✓ Active</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                    <span className="text-xs lg:text-sm font-medium text-gray-700">File Storage</span>
                  </div>
                  <span className="text-blue-600 text-xs lg:text-sm">✓ Ready</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                    <span className="text-xs lg:text-sm font-medium text-gray-700">Content Management</span>
                  </div>
                  <span className="text-orange-600 text-xs lg:text-sm">✓ Online</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
