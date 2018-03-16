import React from 'react';
import 'typeface-roboto';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import http from '../../config/http';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import * as userActions from "../../actions/userActions";
import { connect } from 'react-redux';

const styles = {
    mainLogin : {
        position: 'absolute',
        width: '82vh',
        backgroundColor: '#f5f5f5',
        top: '36%',
        marginLeft: '20%',
        marginBottom: '5vh',
        height: '79vh'
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
    },
    botDiv: {
        height:'84%',
    },
    firstDiv: {
        top: '36%',
        width: '82vh',
        position: 'absolute',
        marginLeft: '24%',
    }
};
let body = {
    username : '',
    firstName : '',
    lastName : '',
    password : '',
    userRoleId : 3,
}
let password2 = '';
const RegisterBar = (props) => {
    const { classes } = props;
    const onInitRegister = () => {
        props.registerTheUser(body)
    }
    return (
        <div className={classes.firstDiv}>
        <div className={classes.mainLogin}>
            <div className={classes.topSideBar}>
                <Typography variant="title" color="white" className={classes.loginFont}>
                    Register
                </Typography>
            </div>
            <div className={classes.botDiv}>
                <form className={classes.container} noValidate autoComplete="off">
                    {/*mai trebuie adaugate proprietati la textfield pt functionare*/}
                    <TextField
                        label="Username"
                        className={classes.textField}
                        margin="normal"
                        onChange={(event)=> {
                            body.username = event.target.value;
                        }}
                    />
                    <TextField
                        label="FirstName"
                        className={classes.textField}
                        margin="normal"
                        onChange={(event)=> {
                            body.firstName = event.target.value;
                        }}
                    />
                    <TextField
                        label="LastName"
                        className={classes.textField}
                        margin="normal"
                        onChange={(event)=> {
                            body.lastName = event.target.value;
                        }}
                    />
                    <TextField
                        label="Password"
                        className={classes.textField}
                        margin="normal"
                        onChange={(event)=> {
                            body.password = event.target.value;
                        }}
                    />
                    <Button variant="raised" color="primary"  onClick={onInitRegister.bind(this)} className={classes.button}>
                        Register
                    </Button>
                </form>
            </div>
        </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => {
    return {
        registerTheUser : (value) => {
            dispatch(userActions.register(value));
        }
    }
}



RegisterBar.propTypes = {
    classes: PropTypes.object.isRequired
};
const withConnect = connect(null, mapDispatchToProps)(RegisterBar);
const Styled = withStyles(styles)(withConnect);
export default Styled;