import { useState } from 'react';
import './gallery.css';

import g1 from '../../assets/gallery/IMG5524.jpg';
import g2 from '../../assets/gallery/IMG7914.jpg';
import g3 from '../../assets/gallery/IMG1700.jpg';
import g4 from '../../assets/gallery/IMG5141.jpg';
import g5 from '../../assets/gallery/IMG6109.jpg';
import g6 from '../../assets/gallery/IMG3651.jpg';
import g7 from '../../assets/gallery/IMG0086.jpg';
import g8 from '../../assets/gallery/IMG6423.jpg';
import g9 from '../../assets/gallery/IMG5163.jpg';

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="gallery">
      <div className="gallery-text">
        <h2>View on my work</h2>
        <p>You can see all the work I've done</p>
        <p>Hope you enjoy!</p>
      </div>

      <div className="gallery-grid">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gunpla gallery image ${i + 1}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>

      {currentIndex !== null && (
        <div className="modal" onClick={() => setCurrentIndex(null)}>
          <button className="nav-btn prev" onClick={prevImage}>
            &lt;
          </button>

          <img
            className="modal-img"
            src={images[currentIndex]}
            alt={`Gunpla full view ${currentIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />

          <button className="nav-btn next" onClick={nextImage}>
            &gt;
          </button>
        </div>
      )}
    </section>
  );
}
