import { useState } from "react";
import Dictionary from "./components/Dictionary";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Dictionary Application</h1>
      <Dictionary />
    </div>
  );
}

export default App;
