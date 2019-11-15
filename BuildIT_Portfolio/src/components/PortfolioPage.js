import React, {Fragment} from 'react';

const PortfolioPage = (props) => (
    <Fragment>
        <h1>Portfolio Page</h1>
        <p>
            This is portfolio id: {props.match.params.id}
        </p>
    </Fragment>
);

export { PortfolioPage };
