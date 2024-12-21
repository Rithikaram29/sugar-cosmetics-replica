import { useEffect, useState } from "react";
import "./styling/radioCarousel.css";

const RadioCarouselElement = ({ array, no }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = no;
  const slideLength = array.length;
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  const nextSlide = () => {
    setIsAutoSliding(false); // Stop auto-sliding on user interaction
    if (currentIndex + imagesPerSlide < slideLength) {
      setCurrentIndex(currentIndex + imagesPerSlide);
    } else {
      setCurrentIndex(0); // Loop back to the start
    }
  };

  const prevSlide = () => {
    setIsAutoSliding(false); // Stop auto-sliding on user interaction
    if (currentIndex - imagesPerSlide >= 0) {
      setCurrentIndex(currentIndex - imagesPerSlide);
    } else {
      setCurrentIndex(slideLength - imagesPerSlide); // Jump to the last slide
    }
  };

  useEffect(() => {
    if (isAutoSliding) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex + imagesPerSlide < slideLength
            ? prevIndex + imagesPerSlide
            : 0
        );
      }, 2000);

      return () => clearInterval(timer); // Cleanup on unmount or dependency change
    }
  }, [isAutoSliding, currentIndex, imagesPerSlide, slideLength]);

  return (
    <div className="carousel-container">
      <div className="main relative overflow-hidden w-full h-full">
        {/* Previous Button */}
        <div className="sidebuttondiv">
          <button
            className={`sidebutton absolute top-1/2 left-2 opacity-50 hover:opacity-100 hover:text-white`}
            onClick={prevSlide}
          >
            &lt;
          </button>
        </div>

        {/* Carousel Images */}
        <div className="card-button flex justify-center transition-transform duration-500 ease-in-out">
          {array
            .slice(currentIndex, currentIndex + imagesPerSlide)
            .map((image, index) => (
              <div key={image.name + index} className="slide">
                <img
                  src={image.img}
                  alt={image.name}
                  className="bannerimg"
                />
              </div>
            ))}
        </div>

        {/* Next Button */}
        <div className="sidebuttondiv">
          <button
            className={`sidebutton absolute top-1/2 right-2 opacity-50 hover:opacity-100 hover:text-white`}
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Radio Buttons */}
      <div className="radio">
        {Array.from({ length: Math.ceil(slideLength / imagesPerSlide) }).map(
          (_, i) => (
            <div
              key={`radio-${i}`}
              className={
                Math.floor(currentIndex / imagesPerSlide) === i
                  ? "radio-selected"
                  : "radio-button"
              }
              onClick={() => {
                setIsAutoSliding(false); // Stop auto-sliding when user interacts
                setCurrentIndex(i * imagesPerSlide);
              }}
            ></div>
          )
        )}
      </div>
    </div>
  );
};

export default RadioCarouselElement;
