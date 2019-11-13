import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is dashboard comp
    </div>
);

const CreateExpensePage = () => (
    <div>
        This is create page
    </div>
);

const EditExpensePage = () => (
    <div>
        This is the edit page
    </div>
);

const HelpPage = () => (
    <div>
        This is the help page
    </div>
);

const NotFoundPage = () => (
    <div>
        404 Not found!
    </div>
);


const routes = (
    <BrowserRouter>
        <Switch>
            <Route path={"/"} component={ExpenseDashboardPage} exact={true}/>
            <Route path={"/create"} component={CreateExpensePage} />
            <Route path={"/edit"} component={EditExpensePage} />
            <Route path={"/help"} component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
