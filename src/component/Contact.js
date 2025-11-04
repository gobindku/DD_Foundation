// ...existing code...
import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const backend = 'https://dd-foundation-backend.vercel.app';
    try {
      const response = await fetch(`${backend}/api/form/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('Failed to send message.');
      }
    } catch (err) {
      setError('Error: ' + err.message);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2 style={{ textAlign: 'center' }}>Support Us</h2>
      {submitted ? (
        <div style={{ color: 'green', textAlign: 'center' }}>Thank you for contacting us!</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label>Name:</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Email:</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Phone:</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Message:</label>
            <textarea name="message" value={form.message} onChange={handleChange} required style={{ width: '100%', padding: '8px' }} />
          </div>
          <button type="submit" style={{ width: '100%', padding: '10px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px' }}>Send</button>
          {error && <div style={{ color: 'red', marginTop: '10px' }}>{error}</div>}
        </form>
      )}
    </div>
  );
};

export default Contact;
