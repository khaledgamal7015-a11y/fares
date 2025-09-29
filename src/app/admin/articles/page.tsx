'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

interface Article {
  _id: string;
  title: string;
  content: string;
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    async function fetchArticles() {
      const res = await fetch('/api/articles');
      const data = await res.json();
      setArticles(data);
    }
    fetchArticles();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      await fetch(`/api/articles/${id}`, { method: 'DELETE' });
      setArticles(articles.filter(article => article._id !== id));
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Articles</h1>
        <Link href="/admin/articles/new" className="bg-blue-500 text-white px-4 py-2 rounded">
          New Article
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Title</th>
            <th className="text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.map(article => (
            <tr key={article._id}>
              <td>{article.title}</td>
              <td className="text-right">
                <Link href={`/admin/articles/${article._id}/edit`} className="text-blue-500 hover:underline mr-4">
                  Edit
                </Link>
                <button onClick={() => handleDelete(article._id)} className="text-red-500 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
