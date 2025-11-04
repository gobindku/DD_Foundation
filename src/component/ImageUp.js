// ...existing code...
import React, { useState } from 'react';

const ImageUp = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // revoke previous preview to avoid memory leak
      if (preview) URL.revokeObjectURL(preview);
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
      setMessage('');
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setMessage('No file selected');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedFile);

    const backend = 'https://dd-foundation-backend.vercel.app';

    try {
      const res = await fetch(`${backend}/api/images/upload`, {
        method: 'POST',
        body: formData,
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(data.error || data.message || 'Upload failed');
      }

      setMessage('Image uploaded successfully!');
      // cleanup
      if (preview) {
        URL.revokeObjectURL(preview);
        setPreview(null);
      }
      setSelectedFile(null);
      console.log('Upload response:', data);
    } catch (err) {
      console.error(err);
      setMessage('Upload failed: ' + err.message);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && (
        <div style={{ marginTop: '20px' }}>
          <img src={preview} alt="Preview" style={{ maxWidth: '300px', maxHeight: '300px' }} />
          <div>
            <button onClick={handleUpload} style={{ marginTop: '10px' }}>
              Upload
            </button>
            <button
              onClick={() => {
                if (preview) URL.revokeObjectURL(preview);
                setPreview(null);
                setSelectedFile(null);
                setMessage('');
              }}
              style={{ marginLeft: '10px' }}
            >
              Cancel
            </button>
          </div>
          {message && <div style={{ marginTop: '10px', color: message.startsWith('Upload failed') ? 'red' : 'green' }}>{message}</div>}
        </div>
      )}
      {!preview && message && <div style={{ marginTop: '10px', color: message.startsWith('Upload failed') ? 'red' : 'green' }}>{message}</div>}
    </div>
  );
};

export default ImageUp;
