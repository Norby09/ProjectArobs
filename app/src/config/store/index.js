import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import thunk from 'redux-thunk';
import authReducer from '../../reducers/authReducer';
import usersReducer from '../../reducers/userReducer';
import companiesReducer from '../../reducers/companyReducer';
import jobsReducer from '../../reducers/jobsReducer';
export const history = createHistory();

const rootReducer = combineReducers({
     auth: authReducer,
     users: usersReducer,
     companies: companiesReducer,
     jobs: jobsReducer,
    routing: routerReducer
});

const middleware = [
    thunk,
    routerMiddleware(history)
];

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancers = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);

const store = createStore(rootReducer, enhancers);

export default store;