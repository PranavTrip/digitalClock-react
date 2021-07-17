import React from "react";
import Slot from "./Slot";
import "./index.css";

const App = () => {
  return (
    <>
      <h1 className="primaryHeading">
        Welcome to 🎰<span> Slot Machine Game </span> 🎰
      </h1>
      <div className="slot_machine">
        <Slot x="😃" y="😃" z="😃" />
        <hr />
        <Slot x="😃" y="😆" z="😃" />
        <hr />
        <Slot x="👨‍🦳" y="😂" z="🎅" />
        <hr />
        <Slot x="🍌" y="🍎" z="🍎" />
        <hr />
        <Slot x="🎏" y="🎏" z="🎏" />
        <hr />
      </div>
      <footer>Developed by "wiki._.ped.ia"</footer>
    </>
  );
};

export default App;
