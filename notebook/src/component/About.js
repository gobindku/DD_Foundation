import React from 'react';

const About = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: 900, margin: '2rem auto', padding: '0 1rem' }}>
      <header style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: '#2c3e50' }}>DD Foundation</h1>
        <p style={{ fontSize: '1.25rem', color: '#34495e', fontStyle: 'italic' }}>
          Committed to making a difference in our community
        </p>
      </header>

      <section style={{ marginBottom: '2rem', lineHeight: 1.6, color: '#555' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#2980b9' }}>Our Mission</h2>
        <p>
          we are dedicated to empowering underprivileged communities through education, healthcare, and sustainable development initiatives.
          We believe in transparency, compassion, and collaboration to create lasting positive change.
        </p>
      </section>

      <section style={{ marginBottom: '2rem', lineHeight: 1.6, color: '#555' }}>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: '#2980b9' }}>What We Do</h2>
        <ul style={{ paddingLeft: '1.25rem' }}>
          <li>Provide books and educational resources to children in need</li>
          <li>Organize different compition for mind growth  and awareness programs</li>
          <li>Support women’s empowerment and vocational training</li>
          <li>Promote environmental sustainability projects</li>
        </ul>
      </section>

      <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#27ae60' }}>
          Join us in our journey to build a better tomorrow. Connect with us on social media!
        </p>
        <div style={{ display: 'inline-flex', gap: '1.5rem' }}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: '#3b5998' }}>
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 10-11.5 9.87v-6.98h-2.3v-2.9h2.3v-2.2c0-2.27 1.35-3.53 3.42-3.53.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.7-1.47 1.42v1.9h2.5l-.4 2.9h-2.1v6.98A10 10 0 0022 12z" />
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: '#1da1f2' }}>
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14.86 5.48 5.48 0 002.4-3.02 10.9 10.9 0 01-3.47 1.33 5.44 5.44 0 00-9.3 4.96A15.44 15.44 0 012 4.16a5.44 5.44 0 001.68 7.26 5.4 5.4 0 01-2.46-.68v.07a5.44 5.44 0 004.36 5.33 5.5 5.5 0 01-2.45.09 5.44 5.44 0 005.07 3.77A10.9 10.9 0 012 19.54 15.4 15.4 0 008.29 21c9.05 0 14-7.5 14-14v-.64A10.06 10.06 0 0023 3z" />
            </svg>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: '#e4405f' }}>
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: '#0077b5' }}>
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 9h4v12H3V9zm7 0h3.6v1.71h.05c.5-.95 1.72-1.95 3.55-1.95 3.8 0 4.5 2.5 4.5 5.75V21H17v-5.5c0-1.3-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H10V9z" />
            </svg>
          </a>
        </div>
      </section>

      <section style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
        <p>© 2024 Helping Hands Trust. All rights reserved.</p>
      </section>
    </div>
  );
};

export default About;
