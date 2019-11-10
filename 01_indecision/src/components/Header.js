import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            {props.subTitle && <h3>{props.subTitle}</h3>}
        </div>
    );
};

export { Header };
