import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/tailwind.css";
// import { Provider } from "react-redux";
import Demo from "./demo.jsx";
import Login from "./pages/login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Provider> */}
      <App />
      {/* <Login /> */}
    {/* </Provider> */}
    {/* <Demo /> */}
  </React.StrictMode>
);
