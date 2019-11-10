import React from 'react';
import { Button } from "semantic-ui-react";

const Action = (props) => {
    return (
        <div>
            <Button
                color={'blue'}
                onClick={props.handlePickOption}
                className="btn btn-primary"
                disabled={!props.hasOptions}
            >
                What should I do?
            </Button>
        </div>
    );
};

export { Action };
