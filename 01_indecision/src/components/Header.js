import React from 'react';

const Header = (props) => (
    <div>
        <h2>{props.title}</h2>
        {props.subTitle && <h3>{props.subTitle}</h3>}
    </div>
);

export { Header };
