import React from 'react';
import { Button } from "semantic-ui-react";

const Option = (props) => (
    <div>
        <Button onClick={() => {
            props.handleDeleteSingleOption(props.optionText)
        }}
                color={'orange'}>Remove</Button>
        {props.optionText}
    </div>
);

export { Option };
