"use strict";

console.log("App.js is running");

// JSX - JavaScript XML
var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Does this work? This is JSX from app.js"
    ),
    React.createElement(
        "p",
        null,
        "This is some info"
    ),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item one"
        ),
        React.createElement(
            "li",
            null,
            "Item two"
        )
    )
);

var user = {
    name: "Nathan",
    age: 45,
    location: "Richardson, TX"
};

function getLocation(location) {
    if (location) {
        return location;
    } else {
        return "Unknown";
    }
}

var nathanTemplate = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Name: ",
        user.name
    ),
    React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    React.createElement(
        "p",
        null,
        "Location: ",
        getLocation(user.location)
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(nathanTemplate, appRoot);
