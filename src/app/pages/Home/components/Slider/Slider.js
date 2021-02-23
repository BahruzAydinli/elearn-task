import { useState } from "react";
import image from "./images/images_8.png";

const Slider = ({ data }) => {
  console.log(data);
  let [selectedSlide, setSelectedSlide] = useState(0);

  const handleSlideChange = (index) => {
    setSelectedSlide(index);
  };

  return (
    <>
      {/* <button className="changeBtn" onClick={() => handleSlideChange()}>
        Change
      </button> */}
      <div id="slider">
        {data.map((d, index) => {
          return (
            <div
              key={index}
              className={`slider-item ${
                selectedSlide === index ? "active" : "non-active"
              }`}
            >
              <div className="slider-content">
                <img src={image} />
                <div className="text-content">
                  <h2>{d.title}</h2>
                  <p>{d.text}</p>
                  <button>Learn how</button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="slide-dots">
          {data.map((d, index) => {
            return (
              <div
                onClick={() => handleSlideChange(index)}
                className={`slide-dot ${
                  index === selectedSlide ? "active" : ""
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Slider;
