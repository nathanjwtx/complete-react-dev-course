"use strict";

console.log("App.js is running");

// JSX - JavaScript XML

var app = {
    title: "Indecision App",
    subtitle: "What a wonderful day to learn JSX",
    options: []
    // options: ["One", "Two"]
};

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        "p",
        null,
        app.subtitle
    ),
    React.createElement(
        "p",
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
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
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var nathanTemplate = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Name: ",
        user.name ? user.name : "Anonymous"
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById("app");

// ReactDOM.render(nathanTemplate, appRoot);
ReactDOM.render(template, appRoot);
