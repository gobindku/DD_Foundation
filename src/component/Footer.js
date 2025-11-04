import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#eee',
      padding: '2rem 1rem',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ marginBottom: '1rem' }}>
        <p style={{ fontSize: '1.2rem', margin: '0 0 0.5rem' }}>
          Connect with us on social media!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#eee' }}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
              <path d="M22 12a10 10 0 10-11.5 9.87v-6.98h-2.3v-2.9h2.3v-2.2c0-2.27 1.35-3.53 3.42-3.53.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.7-1.47 1.42v1.9h2.5l-.4 2.9h-2.1v6.98A10 10 0 0022 12z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: '#eee' }}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
              <path d="M23 3a10.9 10.9 0 01-3.14.86 5.48 5.48 0 002.4-3.02 10.9 10.9 0 01-3.47 1.33 5.44 5.44 0 00-9.3 4.96A15.44 15.44 0 012 4.16a5.44 5.44 0 001.68 7.26 5.4 5.4 0 01-2.46-.68v.07a5.44 5.44 0 004.36 5.33 5.5 5.5 0 01-2.45.09 5.44 5.44 0 005.07 3.77A10.9 10.9 0 012 19.54 15.4 15.4 0 008.29 21c9.05 0 14-7.5 14-14v-.64A10.06 10.06 0 0023 3z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#eee' }}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#eee' }}>
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" >
              <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.6v1.71h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75V21H17v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H10V9z" />
            </svg>
          </a>
        </div>
      </div>
      <div style={{ fontSize: '0.9rem', color: '#bbb' }}>
        <p>© 2024 Your Company. All rights reserved.</p>
        <p>Follow us for the latest updates and special offers!</p>
      </div>
    </footer>
  );
};

export default Footer;
