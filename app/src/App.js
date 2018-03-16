import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';
import 'typeface-roboto';
import { BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import Layout from './Pages/Layout';
import Register from './Pages/Register';
import NotPossible from './Pages/NotFound';
import DefaultLayout from './Pages/DefaultLayout';
import AdminUsersPage from './Pages/AdminUsersPage';
import CompaniesPage from './Pages/CompaniesPage';
import JobsPage from './Pages/JobsPage';
import CompaniesHomePage from './Pages/CompanyHomePage';
import HomePage from './Pages/HomePage';
import history from "./config/store";
import JobsHomePage from './Pages/JobsHomePage';
import Profile from './Pages/Profile';
import Test from './Pages/test';
import { checkIfUserIsLoggedIn } from './actions/userActions';

const ConnectedSwitch = connect(state => ({
    location: state.routing.location
}))(Switch);

class App extends Component {
    componentDidMount() {
        this.props.IS_USER_LOGGED_IN();
    }

  render() {
        const { loggedInUserInfo } = this.props;

    return (
       <div>
           {/*<pre>{ JSON.stringify(this.state, null, 2) }</pre>*/}
           {/*<pre>{ JSON.stringify(this.props.loggedInUserInfo, null, 2) }</pre>*/}
           <ConnectedSwitch>
               <Route exact path="/" component={HomePage} />
               <Route exact path="/Login" component={Layout} />
               <Route exact path="/test" component={Test} />
               <Route path="/Register" component={Register} />
               { loggedInUserInfo && loggedInUserInfo.userRoleId == 1 ?<Route path="/AdminUsersPage" component={AdminUsersPage} /> : null }
               { loggedInUserInfo && loggedInUserInfo.userRoleId == 3 ?<Route path="/UsersPage" component={DefaultLayout} /> : null }
               { loggedInUserInfo && loggedInUserInfo.userRoleId == 2 ?<Route path="/CompaniesPage" exact component={CompaniesPage} /> : null }
               { loggedInUserInfo && loggedInUserInfo.userRoleId == 2 ? <Route path="/JobsPage" exact component={JobsPage} /> : null }
               <Route path={"/JobsPage/:id"} exact component={JobsHomePage} />
               { loggedInUserInfo && loggedInUserInfo.userRoleId == 3 ?<Route path={"/Profile"} exact component={Profile} /> : null}
               { loggedInUserInfo && loggedInUserInfo.userRoleId == 2 ?<Route path="/CompaniesPage/:id" exact component={CompaniesHomePage} /> : null }
               <Route path="*" component={NotPossible} />
               </ConnectedSwitch>
       </div>
    );
  }
}

const mapStateToProps = (state) => ({
    loggedInUserInfo: state.auth.loggedInUserInfo,
});

const mDTP = (dispatch) => ({
    IS_USER_LOGGED_IN: () => dispatch(checkIfUserIsLoggedIn())
});


export default connect(mapStateToProps, mDTP)(App);
