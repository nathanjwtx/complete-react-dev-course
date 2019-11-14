import React, { Fragment } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import { ExpenseDashboardPage } from "../components/ExpenseDashboardPage";
import { CreateExpensePage } from "../components/CreateExpensePage";
import { EditExpensePage } from "../components/EditExpensePage";
import { HelpPage } from "../components/HelpPage";
import { NotFoundPage } from "../components/NotFoundPage";
import { Header } from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header/>
            {/*Header won't pass props as it is not used in a route*/}
            <Switch>
                <Route path={"/"} component={ExpenseDashboardPage} exact={true}/>
                <Route path={"/create"} component={CreateExpensePage} />
                {/*dynamic route*/}
                <Route path={"/edit/:id"} component={EditExpensePage} />
                <Route path={"/help"} component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Fragment>
    </BrowserRouter>
);

export { AppRouter };
