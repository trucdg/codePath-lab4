import React, { useState } from "react";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;
import "./App.css";
import APIForm from "./components/APIForm";

function App() {
  const [inputs, setInputs] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });

  const submitForm = () => {};

  return (
    <div className="whole-page">
      <h1>Build Your Own Screenshot! 📸</h1>
      <APIForm
        inputs={inputs}
        handleChange={(event) => {
          setInputs((prevState) => {
            return {
              ...prevState,
              [e.target.name]: e.target.value.trim(),
            };
          });
        }}
        onSubmit={submitForm}
      />
    </div>
  );
}

export default App;
