'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [secret, setSecret] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    document.cookie = `secret=${secret}`;
    router.push('/admin');
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Admin Login</h1>
        <div className="mb-4">
          <label htmlFor="secret" className="block mb-2">Secret Key</label>
          <input
            type="password"
            id="secret"
            value={secret}
            onChange={e => setSecret(e.target.value)}
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}
