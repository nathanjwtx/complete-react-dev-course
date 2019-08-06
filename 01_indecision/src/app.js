
class Header extends React.Component {
    render() {
        return (
            <div>
                <h2>this is from header</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <button>What should I do?</button>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <p>I am a placeholder</p>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <button>Add a new option</button>
        );
    }
}

const jsx = (
    <div>
        <h1>Title</h1>
        <Header />
        <Options />
        <AddOption />
        <Action />
    </div>
);

ReactDOM.render(jsx, document.getElementById("app"));
