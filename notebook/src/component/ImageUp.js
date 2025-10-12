import React, { useState } from 'react';

const ImageUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append('image', selectedFile); // selectedFile is your File object

    fetch('http://localhost:5000/api/images/upload', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        setMessage('Image uploaded successfully!');
        console.log(data);
      })
      .catch(err => {
        setMessage('Upload failed.');
        console.error(err);
      });
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <div style={{ marginTop: '20px' }}>
          <img src={preview} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />
          <button onClick={handleUpload} style={{ marginTop: '10px' }}>
            Upload
          </button>
          {message && <div style={{ marginTop: '10px', color: 'green' }}>{message}</div>}
        </div>
      )}
    </div>
  );
}

export default ImageUp;
