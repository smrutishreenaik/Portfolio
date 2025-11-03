import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProfileImg from "../assets/profilePic.jpeg";
import {TestimonialItems as items} from "../constants/TestimonialItems";


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
            <div className="slider-title">{item.title}</div>
            <div className="img-card">
              <img src={ProfileImg} alt={item.title} className="profile-img" />
              <div className="card-title-name">{item.title}</div>
              <div className="card-title-designation">{item.title}</div>
            </div>
            <div className="slider-divider"></div>
            <div className="slider-desc">{item.description}</div>
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
