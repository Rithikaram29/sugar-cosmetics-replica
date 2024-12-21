import { useEffect, useState } from "react";
import './styling/normalCarousel.css'

const NormalCarouselElement = ({ array, no }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = no;
  const slideLength = array.length;
  

  const nextSlide = () => {
    if (currentIndex + imagesPerSlide < slideLength) {
      setCurrentIndex(currentIndex + imagesPerSlide);
    } else {
      setCurrentIndex(0); 
    }
  };

  const prevSlide = () => {
    if (currentIndex - imagesPerSlide >= 0) {
      setCurrentIndex(currentIndex - imagesPerSlide);
    } else {
      setCurrentIndex(slideLength - imagesPerSlide); 
    }
  };


  return (
    <div className="">
      <div className=" relative overflow-hidden w-full h-full">
        {/* Previous Button */}
        <div className="">
          <button
            className={`sidebutton absolute top-1/2 left-3 opacity-50 hover:opacity-100 hover:text-white`}
            onClick={prevSlide}
          >
            &lt;
          </button>
        </div>

        {/* Carousel Images */}
        <div className="cardbox flex justify-center transition-transform duration-500 ease-in-out">
          {array
            .slice(currentIndex, currentIndex + imagesPerSlide)
            .map((image, index) => (
              <div key={image.name + index} className="carddiv">
                <img
                  src={image.img}
                  alt={image.name}
                  className="cardimg"
                />
              </div>
            ))}
        </div>

        {/* Next Button */}
        <div className="">
          <button
            className={`sidebutton absolute top-1/2 right-3 opacity-50 hover:opacity-100 hover:text-white`}
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

export default NormalCarouselElement;