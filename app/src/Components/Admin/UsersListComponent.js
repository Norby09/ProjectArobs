import React , {Component} from 'react';
import 'typeface-roboto';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Delete from 'material-ui-icons/Delete'
import SlideDialogUsersUpdate from './SlideDialogUsersUpdate'
import { connect } from 'react-redux';
import * as adminActions from "../../actions/adminActions";

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        display:'block',
    },
    inlineDiv : {
        display: 'inline-block',
        margin:'1%',
    },
};

class UsersListComponent extends Component {
    render(){
        return (
            <div style={styles.inlineDiv}>
                <div >
                    <Paper>
                        <Table className="table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Option</TableCell>
                                    <TableCell>ID</TableCell>
                                    <TableCell>Username</TableCell>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Created At</TableCell>
                                    <TableCell>Updated At</TableCell>
                                    <TableCell>User Role Id</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/*map the list of users*/}
                                {
                                    this.props.listOfUsers ?
                                        this.props.listOfUsers.map((n) => (
                                        <TableRow key={n.id}>
                                            <TableCell><div style={styles.inlineDiv}><Button
                                                ><Delete onClick={this.props.deleteTheUsers.bind(this,n.id)}/></Button></div>
                                                <SlideDialogUsersUpdate userId={n.id} element={n} /*showUsers={props.showUsers}*/ /></TableCell>
                                            <TableCell>{n.id}</TableCell>
                                            <TableCell>{n.username}</TableCell>
                                            <TableCell>{n.firstName}</TableCell>
                                            <TableCell>{n.lastName}</TableCell>
                                            <TableCell>{n.createdAt}</TableCell>
                                            <TableCell>{n.updatedAt}</TableCell>
                                            <TableCell>{n.userRoleId}</TableCell>
                                        </TableRow>
                                    )) : <p>Loading...</p>
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>

        );
    }
    // re-renders the list of users
    componentDidMount()
    {
        this.props.showUsers();
    }
}
    //send functions to props
const mapDispatchToProps = (dispatch) => {
    return {
        listTheUsers: () => {
            dispatch(adminActions.listUsers());
        },
        deleteTheUsers: (value) => {
            dispatch(adminActions.deleteUser( value ))
        }
    }
};
    //send list of users to props
const mapStateToProps = (state) => ({
    listOfUsers : state.users.listOfAllUsers,
});
    //connect mapStateToProps and mapDispatchToProps with the component
const withConnect = connect(mapStateToProps, mapDispatchToProps)(UsersListComponent);

export default withConnect;