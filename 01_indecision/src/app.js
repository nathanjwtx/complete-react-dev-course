// import "@babel/polyfill";
// import { Button } from "react-bootstrap";

class IndecisionApp extends React.Component {
    render() {
        const title = "Indecision App";
        const subTitle = "Subtitle prop";
        const options = ["One", "Two", "Three"];

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h3>{this.props.subTitle}</h3>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button className="btn btn-primary">What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
            {
                this.props.options.map((option) => <Option key={option} optionText={option}/>)
            }
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
            <div>
                {this.props.optionText}
            </div>
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
