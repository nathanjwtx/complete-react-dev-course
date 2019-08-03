console.log("App.js is running");

// JSX - JavaScript XML
const app = {
    title: "Indecision App",
    subtitle: "What a wonderful day to learn JSX",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};

const clearOptions = () => {
    app.options = [];
    render();
};

const render = () => {
     const template = (
         <div>
             <h1>{app.title}</h1>
             {(app.subtitle) && <p>{app.subtitle}</p>}
             <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
             <p>{app.options.length}</p>
             <button onClick={clearOptions}>Clear options</button>
             <ol>
                 <li>Item one</li>
                 <li>Item two</li>
             </ol>
             <form onSubmit={onFormSubmit}>
                 <input type="text" name={"option"}/>
                 <button>Submit Option</button>
             </form>
         </div>
     );

     ReactDOM.render(template, appRoot);
 };

const appRoot = document.getElementById("app");
render();