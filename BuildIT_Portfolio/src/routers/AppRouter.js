import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import { NotFoundPage } from "../components/NotFoundPage";
import { Header } from "../components/Header";
import { PortfolioPage } from "../components/PortfolioPage";

const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header/>
            <Switch>
                <Route componet={PortfolioPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Fragment>
    </BrowserRouter>
);

export { AppRouter };
