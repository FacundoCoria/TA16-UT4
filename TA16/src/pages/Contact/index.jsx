import React from "react";
import { useNavigate } from "react-router";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Esta es la pagina de mi contacto</h1>
      <p>pepito123@gmail.com</p>
      <button
        style={{ marginRight: "1rem" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Volver al Home
      </button>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Informacion sobre mi
      </button>
    </>
  );
};

export default Contact;
