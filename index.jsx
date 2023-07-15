import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import "./src/styles.css";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <App />
    </StyledEngineProvider>
  </StrictMode>
);
