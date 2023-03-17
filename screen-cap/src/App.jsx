import React, { useState } from "react";
const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

import "./App.css";

function App() {
  const [inputs, setInpust] = useState({
    url: "",
    format: "",
    no_ads: "",
    no_cookie_banners: "",
    width: "",
    height: "",
  });

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
