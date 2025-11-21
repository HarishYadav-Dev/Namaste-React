import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement("h1", {id: "title"}, "Hello World from React!");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);