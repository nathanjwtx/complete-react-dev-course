import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const PortfolioMainPage = () => (
    <Fragment>
        <h1>Portfolios</h1>
        <p>Welcome to my portfolio home page</p>
        <Link to={"/portfolio/1"}>Portfolio 1</Link>
        <Link to={"/portfolio/2"}>Portfolio 2</Link>
    </Fragment>
);

export { PortfolioMainPage };
