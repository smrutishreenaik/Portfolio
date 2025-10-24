import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const items = [
  {
    title: "Bloom",
    description: "Fresh beginnings with elegant design",
    image: "https://via.placeholder.com/300x400/FF9999/fff?text=Bloom",
  },
  {
    title: "Vivid",
    description: "Bright and vibrant experiences",
    image: "https://via.placeholder.com/300x400/9966FF/fff?text=Vivid",
  },
  {
    title: "Petaled",
    description: "Soft and smooth UI journey",
    image: "https://via.placeholder.com/300x400/FFCC66/fff?text=Petaled",
  },
  {
    title: "Elegant",
    description: "Minimal yet powerful design",
    image: "https://via.placeholder.com/300x400/66CC99/fff?text=Elegant",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStartX - touchEnd;

    if (Math.abs(distance) > 50) {
      if (distance > 0) nextSlide();
      else prevSlide();
    }

    setTouchStartX(null);
  };


  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <Container className="align-items-center">
      <div className="card-slider-container">
        <button className="slider-btn left d-none d-md-block" onClick={prevSlide}>
          <IoIosArrowBack size={22} />
        </button>

        <div
          className="card-slider"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {items.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className={`slider-card ${isActive ? "center" : "hidden"}`}
              >
                <img src={item.image} alt={item.title} />
                <div className="card-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>


        <button className="slider-btn right d-none d-md-block" onClick={nextSlide}>
          <IoIosArrowForward size={22} />
        </button>

        <div className="slider-dots">
          {items.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => setCurrentIndex(i)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
