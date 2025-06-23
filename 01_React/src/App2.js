import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const js = () => {
  return React.createElement("div", { class: "js_div" }, [
    "JavaScript Frameworks",
    React.createElement("li", {}, "React"),
    React.createElement("li", {}, "Vue"),
    React.createElement("li", {}, "Angular"),
  ]);
};
const python = () => {
  return React.createElement("h1", { class: "code_heading" }, "Python");
};

const App = () => {
  return React.createElement("div", { class: "main_div" }, [
    React.createElement(js),
    React.createElement(python),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
