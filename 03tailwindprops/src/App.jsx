import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "tanya",
    age: 23
  }

  let newArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl">Tailwind Test</h1>
      <Card username="chaiaurcode" someObj={myObj} someObj2={newArr} btnText="click me" />
      <Card username="hitesh" />

      
    </>
  );
}

export default App;
