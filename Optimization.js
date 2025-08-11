import React, { memo, useState, useMemo } from "react";

// Simple memoized component
const HelloComponent = memo(({ name }) => {
  console.log("Hello component rendered");
  return <h1>Hello, {name}!</h1>;
});

function cubeOfNumber(num) {
  console.log("Calculation Done..!");
  return Math.pow(num, 3);
}

function App() {
  const [name, setName] = useState("Nilesh");
  const [count, setCount] = useState(0);

  const [myNumber, setNumber] = useState(0);
  const result = useMemo(() => cubeOfNumber(myNumber), [myNumber]);

  return (
    <div>
      <h1>memo Example</h1>
      <HelloComponent name={name} /> <br />
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>&nbsp;
      <button onClick={() => setName(name === "Sahil" ? "Nil" : "Nikhil")}>
        Change Name
      </button>
      <hr />
      <h2>useMemo Example</h2>
      <input
        type="number"
        value={myNumber}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <h1>Cube of Number: {result}</h1>
    </div>
  );
}

export default App;
