import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "bootstrap/scss/bootstrap.scss";
//import "bootstrap";  bu import eger boostrap static olarak kullanilacaksa js etkinlestirmke icin kullanilir.
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
