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
      
      </section>

      
    </div>
  );
};

export default About;
