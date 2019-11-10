import React from 'react';
import { Form, Button, Message } from "semantic-ui-react";

class OptionForm extends React.Component {
    constructor(props) {
        super(props);
        this.addNewOption = this.addNewOption.bind(this);
        this.state = {
            error: undefined,
            value: ''
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

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <Form onSubmit={this.addNewOption}>
                    <Form.Input label={'Add new option'}
                               placeholder={"Add new option here"}
                                name={'option'}
                                />
                    {/*<Message*/}
                    {/*    sucesss*/}
                    {/*    header={"Option added"}*/}
                    {/*    content={"New option successfully added!"}/>*/}
                    <Button type={'submit'}
                            color={'green'}>Submit</Button>
                </Form>
            </div>
        );
    }
}

export { OptionForm };
