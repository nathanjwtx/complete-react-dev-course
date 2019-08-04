"use strict";

var appDeets = {
    title: "Build-It: Visibility Toggle",
    isVisible: false
};

var showHide = function showHide() {
    appDeets.isVisible = !appDeets.isVisible;
    render();
};

var render = function render() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            appDeets.title
        ),
        React.createElement("p", null),
        React.createElement(
            "div",
            null,
            React.createElement(
                "button",
                { onClick: showHide },
                appDeets.isVisible ? "Hide" : "Show"
            )
        ),
        appDeets.isVisible && React.createElement(
            "p",
            null,
            "Now you can see me!"
        )
    );

    ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById("app");

render();
