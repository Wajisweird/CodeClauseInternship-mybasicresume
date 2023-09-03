import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import Body from "./Components/Body";
import Second from "./Components/Second";

export default function App() {
  return (
    <div>
      <>
        <Navbar />
        <Body />
        <Second />
      </>
    </div>
  );
}
