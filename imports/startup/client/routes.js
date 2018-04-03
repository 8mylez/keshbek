import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import Layout from '/imports/ui/layout/Layout.js';
import App from '/imports/ui/App.js';
import DashboardPage from '/imports/ui/pages/DashboardPage.js';
import ProfilePage from '/imports/ui/pages/ProfilePage.js';
import CashupPage from '/imports/ui/pages/CashupPage.js';
import TransactionsPagePagination from '/imports/ui/pages/transactions/TransactionsPagePagination.js';
import NewTransaction from '/imports/ui/pages/transactions/NewTransaction.js';
import ContactsPage from '/imports/ui/pages/ContactsPage.js';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Layout>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/transactions" component={TransactionsPagePagination} />
                <Route exact path="/transactions/new" component={NewTransaction} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/cash-up" component={CashupPage} />
                <Route path="/contacts" component={ContactsPage} />
            </Layout>
        </Switch>
    </Router>
);