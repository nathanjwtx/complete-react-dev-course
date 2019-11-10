import React from 'react';

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePickOption}
                className="btn btn-primary"
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

export { Action };
