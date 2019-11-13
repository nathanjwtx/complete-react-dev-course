import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
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
        404 Not found! <Link to={"/"}>Go home</Link>
    </div>
);

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to={"/"} activeClassName={"is-active"} exact={true}>Home</NavLink>
        <NavLink to={"/create"} activeClassName={"is-active"}>Create</NavLink>
        <NavLink to={"/edit"} activeClassName={"is-active"}>Edit</NavLink>
        <NavLink to={"/help"} activeClassName={"is-active"}>Help</NavLink>
    </header>
);

const routes = (
    <BrowserRouter>
        <Fragment>
            <Header/>
            <Switch>
                <Route path={"/"} component={ExpenseDashboardPage} exact={true}/>
                <Route path={"/create"} component={CreateExpensePage} />
                <Route path={"/edit"} component={EditExpensePage} />
                <Route path={"/help"} component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Fragment>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
