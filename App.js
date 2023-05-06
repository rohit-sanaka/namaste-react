import React from "react";
import ReactDOM from "react-dom/client";

//How to actuallu write the react code with out jsx

// const parent = React.createElement("div", { class: "parent" }, [
//   React.createElement("div", { class: "child" }, [
//     React.createElement("h1", { class: "heading" }, "This is child1 h1"),
//     React.createElement("h2", { class: "heading" }, "This is child1 h2"),
//   ]),
//   React.createElement("div", { class: "child" }, [
//     React.createElement("h1", { class: "heading" }, "This is child2 h1"),
//     React.createElement("h2", { class: "heading" }, "This is child2 h2"),
//   ]),
// ]);
const parent = <h2>Rohit kumar sanaka</h2>;
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
