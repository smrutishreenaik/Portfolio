import React, { useState } from "react";
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

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) =>
    setTouchStartX(e.touches[0].clientX);

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const distance = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(distance) > 40) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    setTouchStartX(null);
  };

  return (
    <div className="slider-container">

      <button className="slider-btn left d-none d-md-block" onClick={prevSlide}>
        <IoIosArrowBack size={22} />
      </button>

      <div
        className="slider-wrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className={`slide ${i === currentIndex ? "active" : "hidden"}`}
          >
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <button className="slider-btn right d-none d-md-block" onClick={nextSlide}>
        <IoIosArrowForward size={22} />
      </button>

    </div>
  );
};

export default Testimonials;
