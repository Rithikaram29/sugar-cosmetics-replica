import { useEffect, useState } from "react";
import "./styling/carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const CarouselElement = ({ list, no }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesPerSlide = no;
  const slideLength = list.length;

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

  const addCartHandle = (index) => {
    let product = list[index];
    const payload = {
      img: product.img,
      name: product.name,
      price: product.price,
      quantity: 1
    };

    let cart = [];

    if(JSON.parse(localStorage.getItem("cart"))){
       cart.push(...JSON.parse(localStorage.getItem("cart")))
    }
    
    cart.push(payload);

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Updated Cart:", cart);
  };

  return (
    <>
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
          {list
            .slice(currentIndex, currentIndex + imagesPerSlide)
            .map((image, i) => (
              <div
                key={i}
                className="card flex space-y-2 flex-col items-start w-full m-7 "
              >
                <img
                  src={image.img}
                  alt={image.name}
                  className=" h-404 object-fit"
                />
                {image.tags
                  ? image.tags.map((tag, i) => {
                      return (
                        <p
                          style={{
                            marginTop: "10%",
                            position: "absolute",
                            left: "0%",
                            color: "white",
                            fontSize: "small",
                            top: `${i * 8}%`,
                            backgroundColor: "rgba(229,39,48,0.5)",
                            padding: "1px 30px 1px 9px",
                          }}
                        >
                          {tag}
                        </p>
                      );
                    })
                  : null}

                <h3 className="text-sm text-center mt-2">{image.name}</h3>
                {image.shades ? (
                  <p className=" h-3 text-gray-600">{image.shades} Shades</p>
                ) : (
                  <p className="h-3 text-gray-600"></p>
                )}
                <p className="text-lg font-bold text-center mt-2">
                  ₹{image.price}
                </p>
                {image.rating ? (
                  <p className="text-xs font-semibold text-gray-600">
                    ⭐ {image.rating}({image.reviewCount})
                  </p>
                ) : null}
                <div className="empty"></div>
                <div className="buttondiv">
                  <span>
                    <button className="heart">
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </span>
                  <button
                    className="cartbutton"
                    onClick={() => addCartHandle(i)}
                  >
                    {image.button}
                  </button>
                </div>
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
    </>
  );
};

export default CarouselElement;
