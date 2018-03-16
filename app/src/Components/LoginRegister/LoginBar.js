import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import 'typeface-roboto';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {browserHistory} from 'react-router';

const styles = {
    mainLogin : {
        position: 'absolute',
        width: '82vh',
        height: '57vh',
        backgroundColor: '#f5f5f5',
        top: '36%',
        marginLeft: '31%',
    },
    topSideBar : {
        borderBottom : '1px solid white',
        height: '9vh',
    },
    loginFont : {
        paddingTop: '3vh',
        textAlign: 'center',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '88%',
        margin: '4vh auto',
    },
    button: {
        marginLeft: '77%',
        marginBottom: '2vh'
    },
    botDiv: {
        height:'84%',
    },
    alert : {
        padding: '20px',
        backgroundColor: '#f44336',
        color: 'white',
    }
};
class LoginBar extends Component {
    state = {
        username: '',
        password: '',
    }
    onInputChange = (event) => {
        const propName = event.target.name;
        const propValue = event.target.value;
        const oldState = { ...this.state };

        oldState[ propName ] = propValue;

        this.setState({  ...oldState });
    };
    onLoginSubmit = (event) => {
        // this.props.initLoginFlowVLAD(this.state);
        this.props.initLoginApp(this.state);
    };
    render(){
        return (
            <div style={styles.mainLogin}>
                <div style={styles.topSideBar}>
                    <Typography variant="title" color="inherit" style={styles.loginFont}>
                        Login
                    </Typography>
                </div>
                <div style={styles.botDiv}>
                    <form onSubmit={this.onLoginSubmit} style={styles.container} noValidate autoComplete="off">
                        {/*mai trebuie adaugate proprietati la textfield pt functionare*/}
                        <TextField
                            label="Username"
                            name="username"
                            type="username"
                            style={styles.textField}
                            value={this.state.username}
                            margin="normal"
                            onChange={(event)=> {
                                this.onInputChange(event);
                            }}
                        />
                        <TextField
                            label="Password"
                            style={styles.textField}
                            margin="normal"
                            name="password"
                            value={this.state.password}
                            type="password"
                            onChange={(event)=> {
                                this.onInputChange(event);
                            }}
                        />
                        <Button variant="raised" onClick={this.onLoginSubmit} color="primary" style={styles.button}>
                            Login
                        </Button>
                    </form>
                </div>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        initLoginApp: (value) => {
            dispatch(userActions.initLogin(value))
        },
    };
};

const withConnect = connect(null,mapDispatchToProps)(LoginBar)

export default withConnect;