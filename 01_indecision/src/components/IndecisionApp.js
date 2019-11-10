import React from 'react';

import {Header} from "./Header";
import {Action} from "./Action";
import {Options} from "./Options";
import {OptionForm} from "./OptionForm";

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
        const subTitle = "Indecision App";

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
};

IndecisionApp.defaultProps = {
    options: []
};

export { IndecisionApp };
