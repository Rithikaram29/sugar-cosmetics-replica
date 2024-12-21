import { useState } from "react";
import { readMore } from "../utils/allData";
import "./styling/readmore.css"

const ReadMore = () => {
  const [isClicked, setIsClicked] = useState(false);

  const clickHandle = (e) => {
    e.preventDefault();

    setIsClicked((prev) => !prev);
  };

  return (
    <>
    <div style={{margin:"2%"}} >
      <div
        style={{
          width: "100%",
          backgroundColor: `${isClicked ? "grey" : "white"}`,
          color: `${isClicked ? "white" : "black"}`,
          padding:"1%"
        }}
      >
        <button onClick={(e) => clickHandle(e)}>READ MORE ABOUT SUGAR COSTMETICS  <span className="mx-3 text-pink-600 font-bold text-lg">&gt;</span> </button>
      </div>

      <div>{isClicked ? <p className="text-gray-400 my-5"> {readMore}</p> : null}</div>
    </div>
    <div className="stayinTouch">
        <h2>LET'S STAY IN TOUCH</h2>
        <p>Get the latest beauty tips straight to your inbox. Can't wait to connect!</p>
       <div className="subscribe">
        <input type="email" placeholder="Enter email" />
        <button type="submit" >SUBSCRIBE</button>
       </div>
    </div>
    </>
  );
};

export default ReadMore;
