import { useState,useMemo } from "react";

const UseMemoLearn = () => {

  const [count, setCount] = useState(0);

    const result = useMemo(() => {

    console.log("Calculation running...");

    return 10 * 20;

  },[]);
  // const result = calculate()
  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default UseMemoLearn;