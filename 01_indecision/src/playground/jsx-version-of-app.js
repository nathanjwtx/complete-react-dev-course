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

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const render = () => {
     const template = (
         <div>
             <h1>{app.title}</h1>
             {(app.subtitle) && <p>{app.subtitle}</p>}
             <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
             <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
             <button onClick={clearOptions}>Clear options</button>
             <ol>
                 {
                     app.options.map(o => {
                         return <li key={app.options.indexOf(o)}>{o}</li>
                     })
                 }
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

const numbers = [55, 101, 17, 1971, 11];
render();