const parent = React.createElement("div", { class: "parent" }, [
  React.createElement("div", { class: "child" }, [
    React.createElement("h1", { class: "heading" }, "This is child1 h1"),
    React.createElement("h2", { class: "heading" }, "This is child1 h2"),
  ]),
  React.createElement("div", { class: "child" }, [
    React.createElement("h1", { class: "heading" }, "This is child2 h1"),
    React.createElement("h2", { class: "heading" }, "This is child2 h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
