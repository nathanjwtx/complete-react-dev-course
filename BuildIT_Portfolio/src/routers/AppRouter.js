import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import { NotFoundPage } from "../components/NotFoundPage";
import { Header } from "../components/Header";
import { PortfolioMainPage } from "../components/PortfolioMainPage";
import { PortfolioPage } from "../components/PortfolioPage";
import { HomePage } from "../components/HomePage";
import { ContactPage } from "../components/ContactPage";

const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header/>
            <Switch>
                <Route path={"/"} component={HomePage} exact={true} />
                <Route path={"/portfolio"} component={PortfolioMainPage} exact={true}/>
                <Route path={"/portfolio/:id"} component={PortfolioPage} />
                <Route path={"/contact"} component={ContactPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Fragment>
    </BrowserRouter>
);

export { AppRouter };
