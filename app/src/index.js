import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Register from "./Pages/Register";
import CompaniesPage from "./Pages/CompaniesPage";
import AdminUsersPage from "./Pages/AdminUsersPage";
import CompaniesHomePage from "./Pages/CompanyHomePage";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import JobsPage from "./Pages/JobsPage";
import NotPossible from "./Pages/NotFound";
import {connect} from 'react-redux';
import { Provider } from 'react-redux'
import store, { history } from './config/store/index';
import {ConnectedRouter} from 'react-router-redux';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
        <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
