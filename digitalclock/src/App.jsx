import React, { useState } from "react";
import "./index.css";
const App = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, updateTime] = useState(time);
  const incrementTime = () => {
    time = new Date().toLocaleTimeString();
    updateTime(time);
  };

  setTimeout(incrementTime, 1000);
  return (
    <div>
      <h1> {currentTime}</h1>
    </div>
  );
};

export default App;
