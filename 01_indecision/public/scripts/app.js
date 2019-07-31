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

var nathanTemplate = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Nathan"
    ),
    React.createElement(
        "p",
        null,
        "Age: 47"
    ),
    React.createElement(
        "p",
        null,
        "Location: Richardson, TX"
    )
);

var appRoot = document.getElementById("app");

ReactDOM.render(nathanTemplate, appRoot);
