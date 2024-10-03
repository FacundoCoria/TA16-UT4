import React from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Info general</h1>
      <p> Algo sobre mi </p>
      <button
        style={{ width: "120px" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Volver al Home
      </button>
      <button
        style={{ width: "120px" }}
        onClick={() => {
          navigate("/contact");
        }}
      >
        Ver contacto
      </button>
    </div>
  );
};

export default About;
