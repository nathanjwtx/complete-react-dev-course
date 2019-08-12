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
        this.setState(() => {
            return {
                error: error
            }
        });
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

export class OptionForm {}