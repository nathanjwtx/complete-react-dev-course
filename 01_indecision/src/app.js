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

const nathanTemplate = (
    <div>
        <h1>Nathan</h1>
        <p>Age: 47</p>
        <p>Location: Richardson, TX</p>
    </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(nathanTemplate, appRoot);