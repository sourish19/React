import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { App } from "./App";

const Main = () => (
    <App />
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Main />);
