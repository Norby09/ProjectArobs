import React , {Component} from 'react';
import UserCreate from '../Components/Admin/UserCreate';
import UsersListComponent from '../Components/Admin/UsersListComponent';
import AppBarForAdmin from '../Components/AppBars/AppBarForAdmin';
import Grid from 'material-ui/Grid';
import * as adminActions from "../actions/adminActions";
import { connect } from 'react-redux';
const styles = {
    elem : {
        backgroundColor: '#f3efef',
        minHeight:'100vh',
        flexGrow: '1',

    },
    inlineDiv : {
        display:'inline-block',
    }
};



class AdminPage extends Component {
    constructor(props)
    {
        super(props);
        this.data = [];
        this.state = { UserInfoList : [],
            open:false};

    }
    render() {
        // const { classes} = this.props;
        return (

            <div style={styles.elem}>
                <Grid container spacing={40}>
                    <Grid item lg={12} sm={12}>
                        <AppBarForAdmin/>
                    </Grid>
                    <Grid item lg={2} sm={12}>
                        <UserCreate showUsers={this.props.listTheUsers}/>
                    </Grid>
                    <Grid item lg={10} sm={12}>
                        <UsersListComponent userList={this.state.UserInfoList}  showUsers={this.props.listTheUsers} open = {this.state.open}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
    componentDidMount() {
        this.props.listTheUsers();
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        listTheUsers: () => {
            dispatch(adminActions.listUsers());
        },
    }
};
const withConnect = connect(null, mapDispatchToProps)(AdminPage);
export default withConnect;
