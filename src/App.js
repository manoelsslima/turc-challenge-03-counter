import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const today = new Date();
  today.setDate(today.getDate() + count);

  function decrementStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function incrementStep() {
    setStep((s) => s + 1);
  }

  return (
    <div>
      <button onClick={decrementStep}>-</button>
      Step: {step}
      <button onClick={incrementStep}>+</button>
      <br />
      <button onClick={() => setCount((c) => c - step)}>-</button>
      Count: {count}
      <button onClick={() => setCount((c) => c + step)}>+</button>
      <br />
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{today.toDateString()}</span>
      </p>
    </div>
  );
}
