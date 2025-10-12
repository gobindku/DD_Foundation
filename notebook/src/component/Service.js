import React, { useEffect, useState } from 'react';

const Service = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/api/images/all')
      .then(res => res.json())
      .then(images => {
        images.forEach(img => {
          console.log(`http://localhost:5000/uploads/${img.filename}`);
        });
        setImages(images);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch images');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 style={{ width: "18rem", display:"flex", justifyContent:"centre", alignItems:"center"}}>All OUR WORKS </h2>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {images.map((img, idx) => (
          <img key={idx} src={`http://localhost:5000/uploads/${img.filename}`} alt={`Image ${idx + 1}`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
        ))}
      </div>
    </div>
  );
}

export default Service;
