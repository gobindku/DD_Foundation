import React, { useEffect, useState } from 'react';

const Service = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch('https://dd-foundation-backendp.vercel.app/api/images/all');
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`HTTP ${res.status} ${res.statusText} - ${text}`);
        }
        const data = await res.json();

        // Normalize different backend response shapes into an array of image sources/objects
        let imgs = [];
        if (!data) imgs = [];
        else if (Array.isArray(data)) imgs = data;
        else if (typeof data === 'object') imgs = [data];

        // Helper to produce a usable src string for an entry
        const makeSrc = (entry) => {
          if (!entry) return null;
          if (typeof entry === 'string') {
            // full URL or filename
            return entry.startsWith('http') ? entry : `https://dd-foundation-backendp.vercel.app/uploads/${entry}`;
          }
          if (entry.url) return entry.url;
          if (entry.filename) return `https://dd-foundation-backendp.vercel.app/uploads/${entry.filename}`;
          // fallback: try to stringify
          return null;
        };

        const normalized = imgs.map((it) => ({ raw: it, src: makeSrc(it) })).filter(i => i.src);
        if (normalized.length === 0) {
          setError('No images found');
        }
        // Log resolved URLs for debugging
        normalized.forEach(i => console.log('image src ->', i.src));
        setImages(normalized);
      } catch (err) {
        console.error('fetch images error', err);
        setError(err.message || 'Failed to fetch images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h2 style={{ width: "18rem", display:"flex", justifyContent:"centre", alignItems:"center"}}>All OUR WORKS </h2>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {images.length === 0 && !loading && !error && <div>No images to display</div>}
        {images.map((imgObj, idx) => (
          <img
            key={idx}
            src={imgObj.src}
            alt={(imgObj.raw && imgObj.raw.alt) || `Image ${idx + 1}`}
            style={{ maxWidth: '200px', maxHeight: '200px', objectFit: 'cover' }}
            onError={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; console.warn('image load error', imgObj.src); }}
          />
        ))}
      </div>
    </div>
  );
}

export default Service;
