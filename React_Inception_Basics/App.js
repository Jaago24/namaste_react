const heading = React.createElement("div", { className: "card" }, [
  React.createElement("h1", { id: "card-title" }, "Animal Kingdom"),
  React.createElement("h2", { id: "card-subtitle" }, "Biology"),
]); //This create an object

const root = ReactDOM.createRoot(document.getElementById("root")); //This create a root and link between react dom and browser dom and convert the object into a html

root.render(heading);
