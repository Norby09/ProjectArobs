import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import * as adminActions from "../../actions/adminActions"
import { connect } from 'react-redux';
function Transition(props) {
    return <Slide direction="up" {...props} />;
}
const styles = {
    inlineDiv : {
        display:'inline-block',
    },
    textField : {
        display:'block',
        margin:'auto',
    }
};


class SlideDialogUsersUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open : false,
            object : {
                username : '',
                firstName : '',
            }
        }
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    setUsername = () => {
        console.log(this.props);
        // this.setState({object: {
        //     ...this.state.object,
        //     username: this.props.userInfo.username,
        // }});
    };
    render() {

        return (

            <div style={styles.inlineDiv}>
                <Button onClick={this.handleClickOpen}>Acceseaza profilul</Button>
                <Dialog
                    open={this.state.open}
                    keepMounted
                    onClose={this.handleClose}
                    style={{backgroundColor: 'red !important'}}
                    fullScreen={true}
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Update an existing user information"}
                    </DialogTitle>
                    <DialogContent>
                        {/*<DialogContentText id="alert-dialog-slide-description">*/}
                        {/*Let Google help apps determine location. This means sending anonymous location data to*/}
                        {/*Google, even when no apps are running.*/}
                        {/*</DialogContentText>*/}
                        <TextField
                            name="username"
                            label="UserName"
                            style={styles.textField}
                            margin="normal"
                            defaultValue={this.state.object.username}
                            onChange={(event) => {
                                // body.lastName = event.target.value
                                this.setState({object: {
                                    ...this.state.object,
                                    username: event.target.value,
                                }});
                            }}
                        />
                        <TextField
                            label="First Name"
                            style={styles.textField}
                            margin="normal"
                            defaultValue={this.state.object.firstName}
                            onChange={(event) => {
                                // body.firstName = event.target.value
                                this.setState({object: {
                                    ...this.state.object,
                                    firstName: event.target.value,
                                }});
                            }}
                        />
                        <TextField
                            label="Last Name"
                            style={styles.textField}
                            margin="normal"
                            defaultValue={this.state.object.lastName}
                            onChange={(event) => {
                                // body.lastName = event.target.value
                                this.setState({object: {
                                    ...this.state.object,
                                    lastName: event.target.value,
                                }});
                            }}
                        />
                        <TextField
                            label="Password"
                            style={styles.textField}
                            margin="normal"
                            onChange={(event) => {
                                // body.password = event.target.value
                                this.setState({object: {
                                    ...this.state.object,
                                    password: event.target.value,
                                }});
                            }}
                        />
                        <TextField
                            label="User Role Id"
                            style={styles.textField}
                            margin="normal"
                            defaultValue={this.state.object.userRoleId}
                            onChange={(event) => {
                                // body.userRoleId = event.target.value
                                this.setState({object: {
                                    ...this.state.object,
                                    userRoleId: event.target.value,
                                }});
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.updateUsers.bind(this,this.props.userId,this.state.object)} color="primary">
                            Update
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        );
    }
    componentWillMount() {
        this.setUsername();
        console.log(this.props.element)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateUsers: (value,body) => {
            dispatch(adminActions.updateUsers(value,body));
        }
    }
};
const mapStateToProps = (state) => ({
    DialogOpen : state.users.open,
    userInfo : state.users.userDetailedInfo
});
const withConnect = connect(mapStateToProps, mapDispatchToProps)(SlideDialogUsersUpdate);

const withStyle = withStyles(styles)(withConnect);

export default withStyle;