import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

// Get the root element
const rootElement = document.getElementById("root");

// Throw an error if the element isn't found
if (!rootElement) {
  throw new Error("Root element with id 'root' not found");
}

// Create root and render app
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
