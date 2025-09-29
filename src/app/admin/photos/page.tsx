'use client';

import React, { useState, useEffect } from 'react';

export const dynamic = 'force-dynamic';

interface Photo {
  _id: string;
  filename: string;
  contentType: string;
}

export default function PhotosPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    async function fetchPhotos() {
      const res = await fetch('/api/photos');
      const data = await res.json();
      setPhotos(data);
    }
    fetchPhotos();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    await fetch('/api/photos', {
      method: 'POST',
      body: formData,
    });

    // Refresh the list of photos
    const res = await fetch('/api/photos');
    const data = await res.json();
    setPhotos(data);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this photo?')) {
      await fetch(`/api/photos/${id}`, { method: 'DELETE' });
      setPhotos(photos.filter(photo => photo._id !== id));
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Photos</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input type="file" onChange={handleFileChange} className="mb-2" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Upload
        </button>
      </form>
      <div className="grid grid-cols-4 gap-4">
        {photos.map(photo => (
          <div key={photo._id} className="relative">
            <img src={`/api/photos/view/${photo.filename}`} alt={photo.filename} className="w-full h-auto" />
            <button onClick={() => handleDelete(photo._id)} className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
