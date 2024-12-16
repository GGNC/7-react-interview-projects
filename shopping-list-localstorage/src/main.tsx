import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import GlobalState from "./context/GlobalState.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </StrictMode>
);
