import React from 'react';
import ReactDom from 'react-dom';

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteSingleOption = this.handleDeleteSingleOption.bind(this);
        this.handlePickOption = this.handlePickOption.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);

        this.state = {
            options: []
        };
    }
    
    // Lifecycle only available in a Class based component
    componentDidMount() {
      try {
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
        if (options) {
          this.setState(() => ({ options }));
        }
      } catch (e) {
        // Do nothing
      }
    }

    //doesn't fire on initial load/mount
    componentDidUpdate(prevState) {
      if (prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
      };
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteSingleOption(optionToRemove) {
      // passed down to Options and then from Options onto Option
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => {
            return optionToRemove !== option;
          })
        }));
    }

    handlePickOption() {
        this.setState(() => {
            const randomNum = Math.floor(Math.random() * this.state.options.length);
            const option = this.state.options[randomNum];
            alert(option);
        });
    }

    handleAddOption(option) {
        if (!option) {
            return "enter valid value item to add";
        } else if (this.state.options.indexOf(option) > -1) {
            return "entry already exists";
        }
        // implicitly returning from the arrow function rather than explicity with return
        this.setState((prevState) => ({ options: prevState.options.concat([option])}));
    }

    render() {
        const subTitle = "Subtitle prop";

        return (
            <div className={"col-2"}>
                <Header subTitle={subTitle}/>

                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePickOption={this.handlePickOption}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteSingleOption={this.handleDeleteSingleOption}
                />
                <p></p>
                <OptionForm
                    options={this.state.options}
                    handleAddOption={this.handleAddOption}
                />
                <p></p>
                {/*<AddOption />*/}
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.subTitle && <h3>{props.subTitle}</h3>}
        </div>
    );
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePickOption}
                className="btn btn-primary"
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <p></p>
            <button
                onClick={props.handleDeleteOptions}
                className={"btn btn-danger"}
            >
                Remove All
            </button>
        {
            props.options.map((option) => (
                <Option
                    key={option}
                    optionText={option}
                    handleDeleteSingleOption={props.handleDeleteSingleOption}
                />
            ))
        }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                  props.handleDeleteSingleOption(props.optionText)
              }}
            >
                Remove
            </button>
        </div>
    );
};

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
    constructor(props) {
        super(props);
        this.addNewOption = this.addNewOption.bind(this);
        this.state = {
            error: undefined
        };
    }

    addNewOption(e) {
        e.preventDefault();
        //use .trim() to avoid an empty string with just spaces
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error: error }));
        e.target.reset();
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
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

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
