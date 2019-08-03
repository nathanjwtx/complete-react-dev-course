"use strict";

console.log("App.js is running");

// JSX - JavaScript XML
var app = {
    title: "Indecision App",
    subtitle: "What a wonderful day to learn JSX",
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};

var clearOptions = function clearOptions() {
    app.options = [];
    render();
};

var render = function render() {
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
            "p",
            null,
            app.options.length
        ),
        React.createElement(
            "button",
            { onClick: clearOptions },
            "Clear options"
        ),
        React.createElement(
            "ol",
            null,
            app.options.map(function (o) {
                return React.createElement(
                    "li",
                    { key: app.options.indexOf(o) },
                    o
                );
            })
        ),
        React.createElement(
            "form",
            { onSubmit: onFormSubmit },
            React.createElement("input", { type: "text", name: "option" }),
            React.createElement(
                "button",
                null,
                "Submit Option"
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

var numbers = [55, 101, 17, 1971, 11];
render();
