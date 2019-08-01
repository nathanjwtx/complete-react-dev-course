console.log("App.js is running");

// JSX - JavaScript XML
var template = (
    <div>
        <h1>Does this work? This is JSX from app.js</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: "Nathan",
    age: 45,
    location: "Richardson, TX"
};

function getLocation(location) {
    if (location) {
        return location
    } else {
        return "Unknown";
    }
}

const nathanTemplate = (
    <div>
        <h1>Name: {user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {getLocation(user.location)}</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(nathanTemplate, appRoot);