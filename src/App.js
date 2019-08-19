import React from "react";
import Button from "./button";
import "./App.css";

const onClick = () => {
  console.log("clicked");
};

function App() {
  return (
    <div className="App">
      <Button onClick={() => onClick()} />
    </div>
  );
}

export default App;
