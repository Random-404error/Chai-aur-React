import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card } from "./Component/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Random</h1>
      <Card userName= "Chai aur react" />

    </>
  );
}

export default App;
