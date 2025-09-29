import React from 'react';
import Link from 'next/link';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-72 bg-white shadow-xl border-r border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-2 mr-3 font-bold">A</span>
            Admin Panel
          </h1>
          <p className="text-sm text-gray-600 mt-2">Content Management System</p>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/admin" className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors group">
                <span className="text-xl mr-3 group-hover:scale-110 transition-transform font-bold">D</span>
                <span className="font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/articles" className="flex items-center py-3 px-4 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors group">
                <span className="text-xl mr-3 group-hover:scale-110 transition-transform font-bold">A</span>
                <span className="font-medium">Articles</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/services" className="flex items-center py-3 px-4 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors group">
                <span className="text-xl mr-3 group-hover:scale-110 transition-transform font-bold">S</span>
                <span className="font-medium">Services</span>
              </Link>
            </li>
            <li>
              <Link href="/admin/products" className="flex items-center py-3 px-4 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors group">
                <span className="text-xl mr-3 group-hover:scale-110 transition-transform font-bold">P</span>
                <span className="font-medium">Products</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center text-sm text-gray-500">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            System Online
          </div>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
