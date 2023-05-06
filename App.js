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

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

//React element
const title = <h1>Rohit Kumar Sanaka 🚀</h1>;

//React functional component
const MainComponent = () => {
  return (
    // <> </> is nothing but <React.Fragement></React.Fragement>
    // We can wrap multiple elements with out using div.
    <>
      <header>{title}</header>
      <main>
        <h2>This is the main secion</h2>
        <div>
          <p>This a p tag inside div which is inside main</p>
        </div>
      </main>
    </>
  );
};

root.render(<MainComponent />);
