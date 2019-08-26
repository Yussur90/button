import React, { useState } from "react";
import Button from "./button";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const onClick = () => {
    setLoading(true);
    setTimeout(function() {
      setLoading(false);
    }, 9000);
  };

  return (
    <div className="App">
      <Button
        loading={loading}
        onClick={() => onClick()}
        type="submit"
        disabled={false}
        progress={30}
        theme="#504de5"
        style={{ color: "white" }}
      >
        Login
      </Button>
    </div>
  );
}

export default App;
