import "./index.css";
import Button from "./Components/Button";
import Display from "./Components/Display";

const App = () => {
  return (
    <div className="App">
      <div className="container-count-buttons">
        <div className="wrapper-count">
          <Display></Display>
        </div>
        <div className="container-buttons">
          <Button name="Increment"></Button>
          <Button name="Decrement"></Button>
          <Button name="Reset"></Button>
        </div>
      </div>
    </div>
  );
};

export default App;
