
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
                <p></p>
                <OptionForm options={options}/>
                <p></p>
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
    handlePick() {
        console.log("hello");
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.handlePick}
                    className="btn btn-primary"
                >What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    removeAll() {
        console.log("removed");
    }

    render() {
        return (
            <div>
                <p></p>
                <button
                    onClick={this.removeAll}
                    className={"btn btn-danger"}
                >Remove All</button>
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

class OptionForm extends React.Component {
    addNewOption(e) {
        e.preventDefault();
        //use .trim() to avoid an empty string with just spaces
        const option = e.target.elements.option.value.trim();
        if (option) {
            console.log(option);
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.addNewOption}>
                    <div className={"col-4"}>
                        <div className={"container border border-primary"}>
                            <div className={"row align-items-start"}>
                                <div className={"col-8"}>
                                    <div className={"form-group"}>
                                        {/*<div className={"col-sm"}>*/}
                                            <input type="text" name={"option"} className={"form-control"}/>
                                        {/*</div>*/}
                                        {/*<div className={"col-sm"}>*/}
                                        <small className={"form-text text-muted"}>Add a new option</small>
                                        {/*</div>*/}
                                    </div>
                                    <button className={"btn btn-success"}>Add new option</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
