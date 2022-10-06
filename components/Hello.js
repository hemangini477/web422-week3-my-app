import { useState, useEffect } from "react";

export default function Hello() {
  const [number, setNumber] = useState(1);

  function counter() {
    console.log(number);
    setNumber(number + 1);
  }

  return (
    <div>
      <div>
        Hello {props.fname} {props.lname}
      </div>
      <div>
        <button onClick={counter}>Click me</button>
      </div>
      <div>You clicked me: {number}</div>
    </div>
  );
}
