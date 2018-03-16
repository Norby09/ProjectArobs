import React, { Component } from 'react';
import 'typeface-roboto';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import { connect } from 'react-redux';
import * as adminActions from "../../actions/adminActions";

const styles = {
    LayoutOfUsers : {
        margin: '5%',
        display:'inline-block',
        verticalAlign: 'top',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        display:'block',
        width:'70%',
        textAlign:'center',
        marginLeft:'12%',
    },
    button: {
        marginLeft:'73%',
    },

};

class UserCreate extends Component {
    state = {
        id : 0,
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        userRoleId: '',
        contactInfo : {},
    };

    onInputChange = (event) => {
        const propName = event.target.name;
        const propValue = event.target.value;
        const oldState = {...this.state};

        oldState[propName] = propValue;

        this.setState({...oldState});
    };

    onUserCreateSubmit = (event) => {
        this.props.initUserCreate(this.state);
    };

    render() {
        return (
            <div style={styles.LayoutOfUsers}>
                <Paper shadow20>
                    <Typography variant="display2" align="center" gutterBottom>
                        Create a new User
                    </Typography>
                    <form onSubmit={this.onUserCreateSubmit} noValidate autoComplete="off">
                        {/*mai trebuie adaugate proprietati la textfield pt functionare*/}
                        <div>
                            <TextField
                                label="Username"
                                style={styles.textField}
                                name="username"
                                type="text"
                                value={this.state.username}
                                margin="normal"
                                inputStyle={{textAlign: 'center'}}
                                onChange={(event) => {
                                    this.onInputChange(event);
                                }}
                            />

                            <TextField
                                label="FirstName"
                                name="firstName"
                                type="text"
                                value={this.state.firstName}
                                style={styles.textField}
                                margin="normal"
                                onChange={(event) => {
                                    this.onInputChange(event);
                                }}
                            />
                            <TextField
                                label="LastName"
                                name="lastName"
                                type="text"
                                value={this.state.lastName}
                                style={styles.textField}
                                margin="normal"
                                onChange={(event) => {
                                    this.onInputChange(event);
                                }}
                            />
                            <TextField
                                label="Password"
                                name="password"
                                type="text"
                                value={this.state.password}
                                style={styles.textField}
                                margin="normal"
                                onChange={(event) => {
                                    this.onInputChange(event);
                                }}
                            />
                            <TextField
                                label="UserRoleId"
                                name="userRoleId"
                                type="text"
                                value={this.state.userRoleId}
                                style={styles.textField}
                                margin="normal"
                                onChange={(event) => {
                                    this.onInputChange(event);
                                }}
                            />
                            <Button variant="fab" onClick={this.onUserCreateSubmit.bind(this)} color="primary" style={styles.button}>
                                +
                            </Button>
                        </div>
                    </form>
                </Paper>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        initUserCreate: (value) => {
            dispatch(adminActions.createUser(value))
        },
    };
};
const mapStateToProps = (state) => ({
    listOfUsers : state.users.listOfAllUsers,
});
const withConnect = connect(mapStateToProps,mapDispatchToProps)(UserCreate);

export default withConnect;
