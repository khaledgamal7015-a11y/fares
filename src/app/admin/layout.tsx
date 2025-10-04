'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-2 mr-3 font-bold text-sm lg:text-base">A</span>
              <span className="hidden sm:block">Admin Panel</span>
            </h1>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <p className="text-xs lg:text-sm text-gray-600 mt-2 hidden sm:block">Content Management System</p>
        </div>
        
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/admin" 
                className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors group"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="text-lg lg:text-xl mr-3 group-hover:scale-110 transition-transform font-bold">D</span>
                <span className="font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/articles" 
                className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors group"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="text-lg lg:text-xl mr-3 group-hover:scale-110 transition-transform font-bold">A</span>
                <span className="font-medium">Articles</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/services" 
                className="flex items-center py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors group"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="text-lg lg:text-xl mr-3 group-hover:scale-110 transition-transform font-bold">S</span>
                <span className="font-medium">Services</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/products" 
                className="flex items-center py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors group"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="text-lg lg:text-xl mr-3 group-hover:scale-110 transition-transform font-bold">P</span>
                <span className="font-medium">Products</span>
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/photos" 
                className="flex items-center py-3 px-4 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors group"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="text-lg lg:text-xl mr-3 group-hover:scale-110 transition-transform font-bold">P</span>
                <span className="font-medium">Photos</span>
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center text-xs lg:text-sm text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            System Online
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-0">
        {/* Mobile header */}
        <header className="lg:hidden bg-white shadow-sm border-b border-gray-200 px-4 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-500 hover:text-gray-700"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Admin Panel</h1>
            <div className="w-6"></div> {/* Spacer for centering */}
          </div>
        </header>

        {/* Main content area */}
        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
