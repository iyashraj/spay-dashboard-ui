import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/tailwind.css";
// import { Provider } from "react-redux";
import Demo from "./demo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider> */}
      <App />
    {/* </Provider> */}
    {/* <Demo /> */}
  </React.StrictMode>
);
