import React from "react";
import { name, city } from "../data/data.js";

const h1Style = {
  color: "firebrick"
}

function Home() {
  // update the JSX being returned!
  return (
  <div id="home">
    <h1 style={h1Style}>{name} is a web developer from {city}</h1>
  </div>
  )
}

export default Home;
