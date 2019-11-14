import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            This is the edit page: the params value is {props.match.params.id}
        </div>
    );
};

export { EditExpensePage };
