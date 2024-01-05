import React, { useEffect, useState, useRef } from "react";
import "./style.css";

export default function App() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const refElement = useRef(0);
  // useEffect(() => {
  //   setCount((pre) => pre + 1);
  // });
  useEffect(() => {
    refElement.current += 1;
  });
  return (
    <>
      <div>
        <h2> Render Count using useEffect And useState!</h2>
        <h5> Render Count {count} </h5>
        <p> it goes to the infinite loop</p>
        <hr />
      </div>
      <div>
        <h2> Render Count using useEffect And useRef!</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <h5> My Name is {name} </h5>
        <h5> Render Count {refElement.current} </h5>
      </div>
    </>
  );
}
