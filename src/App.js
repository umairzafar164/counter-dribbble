import { useState } from "react";
import "./App.css";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
function Counter() {
  const [number, setNumber] = useState({ currentNumber: 0, animation: "none" });
  const previous = () => {
    setNumber({
      currentNumber: number.currentNumber - 1,
      animation: "animate-left",
    });
  };
  const next = () => {
    setNumber({
      currentNumber: number.currentNumber + 1,
      animation: "animate-right",
    });
  };
  const resetAnimation = () => {
    setNumber({
      currentNumber: number.currentNumber,
      animation: "none",
    });
  };

  return (
    <div className="main-div">
      <div className="small-div">
        <button
          onClick={previous}
          style={{ cursor: "pointer" }}
          disabled={number.currentNumber === 0}
          className="button"
        >
          <MdKeyboardArrowLeft className="arrow" />
        </button>
        <span className={`span ${number.animation}`} onAnimationEnd={resetAnimation}>
          <h1 className="heading">{number.currentNumber}</h1>
        </span>
        <button onClick={next} className="button" style={{ cursor: "pointer" }}>
          
          <MdKeyboardArrowRight className="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Counter;

