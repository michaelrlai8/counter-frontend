import "./index.css";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const incr = () => {
    setCount(count + 1);
  };

  const decr = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <div className="container-count-buttons">
        <div className="wrapper-count">{count}</div>
        <div className="container-buttons">
          <button onClick={incr}>Increment</button>
          <button onClick={decr}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;
