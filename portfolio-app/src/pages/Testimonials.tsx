import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProfileImg from "../assets/profilePic.jpeg"

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
            <div className="img-card">
              <img src={ProfileImg} alt={item.title} className="profile-img" />
              <div className="card-title-name">{item.title}</div>
              <div className="card-title-designation">{item.title}</div>
            </div>
            <div className="slider-divider"></div>
            <div className="description">{item.description}</div>
            <h3>{item.title}</h3>
          </div>
        ))}
        <div className="slider-btn">
          <button className="slider-btn-left" onClick={prevSlide}>
            <IoIosArrowBack size={22} />
          </button>
          <button className="slider-btn-right" onClick={nextSlide}>
            <IoIosArrowForward size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
