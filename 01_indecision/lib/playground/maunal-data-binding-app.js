"use strict";

console.log("App.js is running"); // JSX - JavaScript XML

var app = {
  title: "Indecision App",
  subtitle: "What a wonderful day to learn JSX",
  options: [] // options: ["One", "Two"]

};
var template = React.createElement("div", null, React.createElement("h1", null, app.title), app.subtitle && React.createElement("p", null, app.subtitle), React.createElement("p", null, app.options.length > 0 ? "Here are your options" : "No options"), React.createElement("ol", null, React.createElement("li", null, "Item one"), React.createElement("li", null, "Item two")));
var user = {
  name: "Nathan",
  age: 45,
  location: "Richardson, TX"
};

function getLocation(location) {
  if (location) {
    return React.createElement("p", null, "Location: ", location);
  }
}

var nathanTemplate = React.createElement("div", null, React.createElement("h1", null, "Name: ", user.name ? user.name : "Anonymous"), user.age && user.age >= 18 && React.createElement("p", null, "Age: ", user.age), getLocation(user.location));
var count = 0;

var addOne = function addOne() {
  count++;
  renderCounter();
};

var minusOne = function minusOne() {
  count--;
  renderCounter();
};

var reset = function reset() {
  count = 0;
  renderCounter();
};

var appRoot = document.getElementById("app"); // ReactDOM.render(template, appRoot);

var renderCounter = function renderCounter() {
  var nathanTemplate2 = React.createElement("div", null, React.createElement("h1", null, "Count: ", count), React.createElement("button", {
    onClick: addOne
  }, "+1"), React.createElement("button", {
    onClick: minusOne
  }, "-1"), React.createElement("p", null), React.createElement("button", {
    onClick: reset
  }, "Reset"));
  ReactDOM.render(nathanTemplate2, appRoot);
};

renderCounter();