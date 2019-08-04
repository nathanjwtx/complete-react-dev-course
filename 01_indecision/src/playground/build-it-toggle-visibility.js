const appDeets = {
    title: "Build-It: Visibility Toggle",
    isVisible: false
}

const showHide = () => {
    appDeets.isVisible = !appDeets.isVisible;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{appDeets.title}</h1>
            <p></p>
            <div>
                <button onClick={showHide}>
                    {appDeets.isVisible ? "Hide" : "Show"}
                </button>
            </div>
            {appDeets.isVisible && (
                <p>Now you can see me!</p>
            )}
        </div>
    );

    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");

render();
