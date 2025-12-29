import React from "react";
import  ReactDOM from "react-dom/client";

const heading1 = React.createElement("h1", { id: "heading1",key:"h1" }, "Heading one!");
const heading2 = React.createElement("h2", { id: "heading2", key:"h2" }, "Heading two!");
const container = React.createElement(
  "div",
  { id: "container", className: "fontsize" },
  [heading1, heading2]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
