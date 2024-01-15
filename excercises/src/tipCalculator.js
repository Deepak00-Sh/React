import { useState } from "react";

export default function TipCalculator() {
  const [billTotal, setBillTotal] = useState(0);
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);
  const tip = (billTotal * ((percentage1 + percentage2) / 2)) / 100;
  const total = billTotal + tip;

  function handleReset() {
    setBillTotal(0);
    setPercentage1(0);
    setPercentage2(0);
  }
  return (
    <div className="Tip">
      <Bill billTotal={billTotal} setBillTotal={setBillTotal} />
      <Service percentage1={percentage1} onSelect={setPercentage1}>
        How did you like the service ?
      </Service>
      <Service percentage2={percentage2} onSelect={setPercentage2}>
        How did your friend like the service ?
      </Service>
      <TotalBill billTotal={billTotal} total={total} tip={tip} />
      <Reset reset={handleReset} />
    </div>
  );
}

function Bill({ billTotal, setBillTotal }) {
  return (
    <div>
      <p>
        How much was the bill?{" "}
        <input
          type="text"
          value={billTotal}
          onChange={(e) => setBillTotal(Number(e.target.value))}
        />
      </p>
    </div>
  );
}
function Service({ percentage, onSelect, children }) {
  return (
    <div className="serviceDiv">
      {children}
      <select
        className="serviceSelect"
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function TotalBill({ billTotal, total, tip }) {
  return (
    <div className="bill">
      <h2>
        You pay {total}(${billTotal} + ${tip} tip)
      </h2>
    </div>
  );
}

function Reset({ reset }) {
  return (
    <div className="resetDiv">
      <button onClick={reset}>Reset</button>
    </div>
  );
}
