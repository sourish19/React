import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

const Main = () => (
  <StrictMode>
    <App />
  </StrictMode>
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Main />);
