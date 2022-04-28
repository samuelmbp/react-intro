import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="The chosen" animal="Lion" breed="White Lion" />
      <Pet name="Dolphy" animal="Dolphin" breed="Amazon River Dolphin" />
      <Pet name="Siso" animal="Husky" breed="Siberian Husky" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
