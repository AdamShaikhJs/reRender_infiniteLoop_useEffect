import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   setCount((pre) => pre + 1);
  // });
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <h5> Render Count {count} </h5>
    </div>
  );
}
