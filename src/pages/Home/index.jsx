import React from "react";
import callback from "./callback";

import { store } from "../../store";

const Home = () => {
  if (window.location.search.includes("code=")) {
    callback();
    // window.location.href = "http://localhost:3000";
  }
  //   store.print();
  return <div>Hello World!</div>;
};

export default Home;
