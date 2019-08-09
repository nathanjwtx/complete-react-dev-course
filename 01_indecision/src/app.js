
class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.state = {
            options: ["one", "two", "three"]
        };
    }

    handleDeleteOptions() {
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePickOption() {
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            console.log(option);
        });
    }
    render() {
        const title = "Indecision App";
        const subTitle = "Subtitle prop";

        return (
            <div className={"col-2"}>
                <Header title={title} subTitle={subTitle}/>
                
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <p></p>
                <OptionForm
                    options={this.state.options}
                />
                <p></p>
                {/*<AddOption />*/}
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
                <button
                    onClick={this.props.handlePickOption}
                    className="btn btn-primary"
                    disabled={!this.props.hasOptions}
                >
                    What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
        render() {
        return (
            <div>
                <p></p>
                <button
                    onClick={this.props.handleDeleteOptions}
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
                    <div className={"col-12"}>
                        <div className={"container border border-primary"}>
                            <div className={"row align-items-start"}>
                                <div className={"col-12"}>
                                    <div className={"form-group"}>
                                        <input type="text" name={"option"} className={"form-control"}/>
                                        <small className={"form-text text-muted"}>Add a new option</small>
                                    </div>
                                    <button
                                        className={"btn btn-success"}
                                    >Add new option</button>
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
