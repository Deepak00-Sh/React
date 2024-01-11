import React, { useState } from "react";
import "./index.css";

export default function Main() {
  return (
    <>
      <Counter />
    </>
  );
}
function ComponentDiv(props) {
  return (
    <div className="componentDiv">
      <button className="">-</button>
      <p className="componentPara">{props.name}:</p>
      <button>+</button>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const date = new Date("january 11 2024");
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <span>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days today is`
          : `${Math.abs(count)} days ago was}`}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  );
}
