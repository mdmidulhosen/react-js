import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import "./css/global.css"

function App() {
  return (
    <section className="bg-[#F7FAFC] h-screen">
      <div className="w-[1240px] mx-auto">
        <Header />
        <Body />
      </div>
    </section>
  );
}

export default App;
