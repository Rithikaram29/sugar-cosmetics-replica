import { useEffect, useState } from "react";
import "./styling/radioCarousel.css"

const RadioCarouselElement = ({ array, no }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = no;
  const slideLength = array.length;

  const nextSlide = (e) => {
    if (currentIndex + imagesPerSlide < slideLength) {
      setCurrentIndex(currentIndex + imagesPerSlide);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = (e) => {
    if (currentIndex - imagesPerSlide >= 0) {
      setCurrentIndex(currentIndex - imagesPerSlide);
    } else {
      setCurrentIndex(slideLength - imagesPerSlide);
    }
  };

  return (
    <>
    <div className="main">
      <div className="main relative overflow-hidden w-full h-full">
        <div className="sidebuttondiv ">
          <button
            className={`sidebutton absolute top-1/2 left-2 opacity-50 hover:opacity-100 hover:text-pink-600`}
            onClick={() => prevSlide()}
            // disabled={currentIndex === 0}
          >
            &lt;
          </button>
        </div>

        <div className="card-button flex justify-center transition-transform duration-500 ease-in-out">
          {array
            .slice(currentIndex, currentIndex + imagesPerSlide)
            .map((image, index) => (
              <div
                key={index}
                className=""
              >
                <img
                  src={image.img}
                  alt={image.name}
                  className="w-full"
                />
              </div>
            ))}
        </div>
        <div className="sidebuttondiv">
          <button
            className={`sidebutton absolute top-1/2 right-2 opacity-50 hover:opacity-100 hover:text-pink-600`}
            onClick={() => nextSlide()}
            // disabled={currentIndex + imagesPerSlide >= slideLength}
          >
            &gt;
          </button>
        </div>
      </div>
      <div className="radio">{array.map((ele,i)=>{
           return <div className={i === currentIndex ? "radio-selected" : "radio-button"}> </div>
      })}</div>
      </div>
    </>
  );
};

export default RadioCarouselElement;
