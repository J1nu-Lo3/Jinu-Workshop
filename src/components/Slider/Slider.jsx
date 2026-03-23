import { useState, useEffect } from 'react';
import './slider.css';

import img1 from '../../assets/slider/Img5093.jpg';
import img2 from '../../assets/slider/IMG5220.jpg';
import img3 from '../../assets/slider/IMG7452.jpg';
import img4 from '../../assets/slider/IMG6134.jpg';
import img5 from '../../assets/slider/IMG0135.jpg';
import img6 from '../../assets/slider/IMG6284.jpg';

const images = [img1, img2, img3, img4, img5, img6];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="slider">
      <div className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Gunpla showcase ${index + 1}`} />
          ))}
        </div>
      </div>

      <div className="preview">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Preview Gunpla ${index + 1}`}
            className={current === index ? 'active' : ''}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
