console.log("App.js is running");

// JSX - JavaScript XML

const app = {
    title: "Indecision App",
    subtitle: "What a wonderful day to learn JSX",
    options: []
    // options: ["One", "Two"]
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {(app.subtitle) && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
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
        return <p>Location: {location}</p>
    }
}

const nathanTemplate = (
    <div>
        <h1>Name: {user.name ? user.name : "Anonymous"}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById("app");

// ReactDOM.render(nathanTemplate, appRoot);
ReactDOM.render(template, appRoot);