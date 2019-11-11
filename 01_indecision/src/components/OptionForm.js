import React from 'react';
import { Form, Button, Message, Grid } from "semantic-ui-react";

class OptionForm extends React.Component {
    state = {
        error: "undefined",
        value: "",
        success: false
    };

    addNewOption = (e) => {
        e.preventDefault();
        //use .trim() to avoid an empty string with just spaces
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({
            error: error,
            success: true }));
        e.target.reset();
        setTimeout(() => {
            this.setState({
                success: false
            });
        },3000);
    };

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        let message;
        if (this.state.success) {
            message =
                <Message
                    success
                    header={"Option added"}
                    content={"New option successfully added!"}/>
        }
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <Grid columns={4}>
                    <Form success onSubmit={this.addNewOption}>
                        <Form.Input label={'Add new option'}
                                   placeholder={"Add new option here"}
                                    name={'option'}
                                    />
                        {message}
                        <Button type={'submit'}
                                color={'green'}>Submit</Button>
                    </Form>
                </Grid>
            </div>
        );
    }
}

export { OptionForm };
