import React, { useEffect, useState, useRef } from 'react';
import './Carousel.css';
import img0 from '../Asset/team.jpg';
import img1 from '../Asset/event1.jpg';
import img2 from '../Asset/uki.jpg';
import img3 from '../Asset/foodd.jpg';
import img4 from '../Asset/Books.jpg';

const slides = [
  {
    img: img0,
    author: 'DD Foundation',
    title: 'TRANSFORMING LIVES',
    topic: ' OUR TEAM',
    description: 'DD Foundation is dedicated to transforming lives through education, empowerment, and community support. Our team works tirelessly to create a positive impact in the lives of those we serve.'
  },
  {
    img: img1,
    author: 'DD Foundation',
    title: 'Transform Lives',
    topic: 'G.K. EVENTS',
    description: 'WE are committed to creating a better future through our various initiatives and events. Join us in making a difference in the community.'
  },
  {
    img: img2,
    author: 'DD Foundation',
    title: 'BE A PART OF CHANGE',
    topic: 'ACTIVITIES',
    description: 'JUSTICE FOR ALL. We believe in the power of community and collective action to bring about meaningful change. Join us in our mission to uplift and empower those in need.'
  },
  {
    img: img3,
    author: 'DD Foundation',
    title: 'Transform Lives',
    topic: 'FOOD DONATION',
    description: 'Please support our cause by donating or volunteering. Together, we can make a difference in the lives of those who need it most.'
  },
    {
    img: img4,
    author: 'DD Foundation',
    title: 'Transform Lives',
    topic: 'BOOK DONATION',
    description: 'We believe in the power of education and knowledge sharing. Your book donations can help us provide resources to those who need them most.'
  },

];

 const Carousel1=()=> {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const timeoutRef = useRef(null);
  const autoDelay = 7000;
  const animDuration = 3000;

  const next = () => {
    setDirection('next');
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setDirection('prev');
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto slide
  useEffect(() => {
    timeoutRef.current = setTimeout(next, autoDelay);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  // Clear animation class
  useEffect(() => {
    if (!direction) return;
    const timer = setTimeout(() => {
      setDirection('');
    }, animDuration);
    return () => clearTimeout(timer);
  }, [direction]);

  return (
    <div className={`carousel ${direction}`}>
      <div className="list">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="item"
            style={{ display: i === index ? 'block' : 'none' }}
          >
            <img src={slide.img} alt={`Slide ${i + 1}`} />
            <div className="content">
              <div className="author">{slide.author}</div>
              <div className="title">{slide.title}</div>
              <div className="topic">{slide.topic}</div>
              <div className="des">{slide.description}</div>
              <div className="buttons">
                  <a href="/contact" target="_blank" rel="noopener noreferrer">
                    <button type="button">Contact</button>
                  </a>
                  <a href="/donate" target="_blank" rel="noopener noreferrer">
                    <button type="button" href ="/donate">Donate</button>
                  </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`item ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          >
            <img src={slide.img} alt={`Thumbnail ${i + 1}`} />
            <div className="content">
              <div className="title">Name Slider</div>
              <div className="description">Description</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button onClick={prev}>{'<'}</button>
        <button onClick={next}>{'>'}</button>
      </div>

      <div className="time"></div>
    </div>
  );
}

export default Carousel1;