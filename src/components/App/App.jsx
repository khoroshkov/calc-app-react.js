import React, { useState } from "react";
import Button from "../Button/Button";
import { numbers, operations } from "../../helpers/model";
import * as math from "mathjs";

function App() {
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [currentResult, setCurrentResult] = useState("");

  function addToInput(e) {
    setInput((prevstate) => (prevstate += e));

    if (e === "=") {
      setInput(math.evaluate(input));
      setResult(math.evaluate(input));
      setInput("");
      // setCurrentResult("");
    }
  }

  function handleReset() {
    setInput("");
    setResult("");
  }

  function handleBackspace() {
    setInput(input.substr(0, input.length - 1));
  }

  function handlePercent(e) {}

  function percentage(num, per) {
    return (num / 100) * per;
  }

  return (
    <div className="App">
      <div className="result-container">
        <p className="result">
          {input}
          {result}
        </p>
        <p className="current-result">{currentResult}</p>
      </div>

      <div className="keypad-container">
        <div className="left-section">
          <div className="upper-row">
            <Button value="ac" handleClick={handleReset} name="AC" />
            <Button
              value="backspace"
              handleClick={handleBackspace}
              name="<=="
            />
            <Button value="%" name="%" handleClick={addToInput} />
          </div>
          <div className="numbers">
            {numbers?.map((item) => (
              <Button
                value={item.value}
                name={item.name}
                handleClick={addToInput}
                key={item.value}
              />
            ))}
          </div>
        </div>

        <div className="right-section">
          {operations?.map((item) => (
            <Button
              value={item.value}
              name={item.name}
              handleClick={addToInput}
              key={item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
