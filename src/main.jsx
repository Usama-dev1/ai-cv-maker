import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CvProvider } from "./context/cvContext.jsx";

import App from "./App.jsx";
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CvProvider>
      <App />
    </CvProvider>
  </StrictMode>
);
