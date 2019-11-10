import React from "react-dom";
import {Button} from "semantic-ui-react";

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <Button color={'green'}>Add a new option</Button>
            </div>
        );
    }
}

export { AddOption };
