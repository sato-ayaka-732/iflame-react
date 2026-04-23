import { useState } from "react";
import "./Count.css";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <button
      type="button"
      className="counter"
      onClick={() => setCount((count) => count + 1)}
    >
      Count is {count}
    </button>
  );
}