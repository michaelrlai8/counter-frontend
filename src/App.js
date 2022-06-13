import "./index.css";
import React from "react";
import axios from "axios";

const App = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const getCount = async () => {
      try {
        const response = await axios.get("/api");
        setCount(response.data.rows[0].count);
      } catch (error) {
        console.log(error);
      }
    };
    getCount();
  }, []);

  const incr = async () => {
    const newCount = count + 1;
    setCount(newCount);
    try {
      const response = await axios({
        method: "put",
        url: "/api/change",
        data: {
          count: newCount,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const decr = async () => {
    const newCount = count - 1;
    setCount(newCount);
    try {
      const response = await axios({
        method: "put",
        url: "/api/change",
        data: {
          count: newCount,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const reset = async () => {
    const newCount = 0;
    setCount(newCount);
    try {
      const response = await axios({
        method: "put",
        url: "/api/change",
        data: {
          count: newCount,
        },
      });
    } catch (error) {
      console.log(error);
    }
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
