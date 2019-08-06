
class IndecisionApp extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

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
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <Option />
                <Option />
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <button>Add a new option</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>An option</div>
        );
    }
}

// const jsx = (
//     <div>
//         <h1>Title</h1>
//         <Header />
//         <Options />
//         <AddOption />
//         <Action />
//     </div>
// );

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
