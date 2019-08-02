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

let count = 0;
const addOne = () => {
  count++;
  renderCounter();
};
const minusOne = () => {
    count--;
    renderCounter();
};
const reset = () => {
    count = 0;
    renderCounter();
};

const appRoot = document.getElementById("app");

// ReactDOM.render(template, appRoot);

const renderCounter = () => {
    const nathanTemplate2 = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <p></p>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(nathanTemplate2, appRoot);
};

renderCounter();