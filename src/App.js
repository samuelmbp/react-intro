const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "The Chosen",
      animal: "Lion",
      breed: "White Lion",
    }),
    React.createElement(Pet, {
      name: "Doplhy",
      animal: "Dolphin",
      breed: "Amazon River Dolphin",
    }),
    React.createElement(Pet, {
      name: "Siso",
      animal: "Husky",
      breed: "Siberian Husky",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
