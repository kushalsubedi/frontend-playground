
import { useState } from "react";
function CounterApp() {

    const [count, setCount] = useState(0)

   function Add() {
        setCount(count + 1)
    }
    function Sub() {
        setCount(count - 1)
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h2>Count: {count}</h2>
            <button onClick= {Add}>Increase</button>{" "}
            <button onClick={Sub}>Decrease</button>{" "}
        </div>
    )
}

export default CounterApp;
