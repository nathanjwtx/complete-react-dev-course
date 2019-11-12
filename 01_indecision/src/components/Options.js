import React from 'react';
import {Option} from "./Option";
import { Button } from "semantic-ui-react";

const Options = (props) => (
    <div>
        <p></p>
        <Button
            onClick={props.handleDeleteOptions}
            color={'red'}
        >
            Remove All
        </Button>
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

export { Options };
