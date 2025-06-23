// Children is a special property in React it could be Array, React.createElement, could be anything
import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client"; //Write /client

const App = () => {
  return React.createElement(
    "div",
    { class: "div_ele" },
    React.createElement("h1", { class: "p_ele" }, "This is React")
  );
};

const container = document.querySelector("#root"); // Get the root
const root = ReactDOM.createRoot(container); // ReactDOM takes over and creates a virtual DOM
root.render(React.createElement(App)); // Renders the Virtual DOM

// In React 19 we dont need to add the script tag with the CDN
// We just have to import in in this file & also dont forget to write type="module" in script tag

// For React 18
//<script src="https://unpkg.com/react@18.3.1/umd/react.development.js"></script>
//   <script src="https://unpkg.com/react-dom@18.3.1/umd/react-dom.development.js"></script>
