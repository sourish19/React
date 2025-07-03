import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

const heading = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.heading),
    React.createElement(list, { concept1: "Array", concept2: "String" }),
  ]);
};

const list = (props) => {
  return React.createElement("ul", {}, [
    React.createElement("li", {}, props.concept1),
    React.createElement("li", {}, props.concept2),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Coding Concepts"),
    React.createElement(heading, { heading: "JavaScript" }),
    React.createElement(heading, { heading: "Python" }),
    React.createElement(heading, { heading: "C++" }),
    React.createElement(heading, { heading: "Java" }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
