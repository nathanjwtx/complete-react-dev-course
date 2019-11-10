import React from 'react';
import {Option} from "./Option";

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

export { Options };
