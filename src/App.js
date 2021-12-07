import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("Translation will appear here...");

  const inputChangeHandler = (event) => {
    var inputVal = event.target.value;
    setInput(inputVal);
    var food = getFood(inputVal);
    setOutput(food);
  };

  const getFood = (emoji) => {
    if (foodDict[emoji]) {
      return foodDict[emoji];
    } else {
      return "Unavailable in dictionary!";
    }
  };

  const selectEmoji = (event) => {
    var selectedEmoji = event.target.value;
    setInput(selectedEmoji);
    var food = getFood(selectedEmoji);
    setOutput(food);
  };

  var foodDict = {
    "🍎": "Apple",
    "🥭": "Mango",
    "🍕": "Pizza",
    "☕️": "Coffee",
    "🍩": "Donut",
    "🍪": "Cookie"
  };

  var options = Object.keys(foodDict).map((k, i) => {
    return (
      <button value={k} onClick={selectEmoji} className="emojiButton" key={i}>
        {k}
      </button>
    );
  });

  return (
    <div className="App">
      <h1>Foood Interpreter</h1>
      <input
        value={input}
        id="userInput"
        placeholder="Enter Food Emoji or choose from below"
        onChange={inputChangeHandler}
      />
      <div id="output">{output}</div>
      <div>{options}</div>
    </div>
  );
}
