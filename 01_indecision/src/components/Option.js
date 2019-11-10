import React from 'react';

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

export { Option };
