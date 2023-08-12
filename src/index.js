import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { InventoryProvider } from "./context/inventoryContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <InventoryProvider>
        {" "}
        <App />
      </InventoryProvider>
    </Router>
  </React.StrictMode>
);
