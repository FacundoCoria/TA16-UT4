import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1>Este es el home de mi web</h1>
      <Link to={"../about"}>Ver sobre x</Link>
      <Link to={"../contact"}>Ver contacto</Link>
    </div>
  );
};

export default Home;
