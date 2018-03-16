import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Accessibility from 'material-ui-icons/Accessibility';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import store from '../../config/store/index';
import * as userActions from '../../actions/userActions';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import AlarmAdd from 'material-ui-icons/AlarmAdd';
import Help from 'material-ui-icons/Help';
import Mail from 'material-ui-icons/Mail';
import Phone from 'material-ui-icons/Phone';
import Save from 'material-ui-icons/Save';
import * as adminActions from '../../actions/adminActions';
const styles = {
    root : {
        margin: '0 auto',
    },
    textFieldBlock : {
        display:'block',
        width:'35%',
        margin:'0 auto',
    },
    aligned : {
        textAlign: 'center',
    },
    floating : {
        float: 'right'
    },
    button : {
        marginLeft:'69%',
        marginBottom : '2%',
    },
    textCentered : {
        textAlign: 'center',
    },
    imageSpec : {
        width:'50%',
        padding: '20px'
    },
    about : {
        paddingLeft:'20px',
    },
    textFieldBlock : {
        verticalAlign: 'top',
    },
    textField : {
        display: 'block',
    },
    iconAccessible : {
        marginTop : '3%',
    },
    icons : {
        display:'block',
    },
    floater : {
        float : 'right',
    }
}
let id = window.localStorage.getItem('id');
class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            contactInfo: {
                email: '',
                phone: '',
                address: '',
                city: '',
            }
        }
        console.log(this.props);
    }

    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    }

    updateProfile = (value, value1) => {
        this.props.updateTheUser(value, value1);
    }

    render() {
        const {classes} = this.props;
        console.log(store.getState())
        console.log(this.props.element);
        return (
            <div className={classes.root}>
                <Paper className={classes.root}>
                    <Typography variant="display2"><span className={classes.about}>About me</span></Typography>
                    <Divider/>
                    <Grid container spacing={40}>
                        <Grid item lg={2}>
                            <img className={classes.imageSpec} src={require('../../Images/profilePic.JPG')}/>
                        </Grid>
                        <Grid item lg={9}>
                            <form noValidate>
                                <div>
                                    <Accessibility className={classes.iconAccessible}/>
                                    <TextField
                                        label="Name"
                                        margin="normal"
                                        style={styles.textFieldBlock}
                                        value={this.state.username}
                                        onChange={this.handleChange('username')}
                                    />
                                </div>
                                <div>
                                    <AlarmAdd/>
                                    <TextField
                                        label="First Name"
                                        margin="normal"

                                        value={this.state.firstName}
                                        onChange={this.handleChange('firstName')}
                                    />
                                </div>
                                <div>
                                    <Help/>
                                    <TextField
                                        label="Last Name"
                                        margin="normal"
                                        value={this.state.lastName}
                                        onChange={this.handleChange('lastName')}
                                    />
                                </div>
                                <div>
                                    <Mail/>
                                    {console.log(this.state)}
                                    <TextField
                                        label="email"
                                        margin="normal"
                                        value={this.state.contactInfo.email}
                                        onChange={(event) => {
                                            this.setState({
                                                contactInfo: {
                                                    ...this.state.contactInfo,
                                                    email: event.target.value,
                                                }
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <Phone/>
                                    <TextField
                                        label="phone"
                                        margin="normal"
                                        value={this.state.contactInfo.phone}
                                        onChange={(event) => {
                                            this.setState({
                                                contactInfo: {
                                                    ...this.state.contactInfo,
                                                    phone: event.target.value,
                                                }
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <Save/>
                                    <TextField
                                        label="address"
                                        margin="normal"
                                        value={this.state.contactInfo.address}
                                        onChange={(event) => {
                                            this.setState({
                                                contactInfo: {
                                                    ...this.state.contactInfo,
                                                    address: event.target.value,
                                                }
                                            });
                                        }}
                                    />
                                </div>
                                <div>
                                    <Save/>
                                    <TextField
                                        label="city"
                                        margin="normal"
                                        value={this.state.contactInfo.city}
                                        onChange={(event) => {
                                            this.setState({
                                                contactInfo: {
                                                    ...this.state.contactInfo,
                                                    city: event.target.value,
                                                }
                                            });
                                        }}
                                    />

                                </div>
                                {this.props.element ?
                                    <Button className={classes.floater}
                                            onClick={this.updateProfile.bind(this, this.props.element.id, this.state)}>Update
                                        Profile</Button> : null
                                }

                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        )
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            if (nextProps.element) {
                debugger;
                this.setState({
                    username: nextProps.element.username,
                    firstName: nextProps.element.firstName,
                    lastName: nextProps.element.lastName,
                    contactInfo: {
                        email: nextProps.element.contactInfo && nextProps.element.contactInfo.email,
                        phone: nextProps.element.contactInfo && nextProps.element.contactInfo.phone,
                        address: nextProps.element.contactInfo && nextProps.element.contactInfo.address,
                        city: nextProps.element.contactInfo && nextProps.element.contactInfo.address,
                     }
                });
            }
        }
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInfoAboutUser : (value,value1) => {
            dispatch(userActions.getInfoAboutUser(value,value1));
        },
        updateTheUser : (value,value1) => {
            dispatch(adminActions.updateUsers(value,value1));
        }
    }
}
const mapStateToProps = (state) => ({
    userDetailedInfo: state.users.userDetailedInfo,
});
const withConnect = connect(mapStateToProps, mapDispatchToProps)(ProfileInfo);
const styled = withStyles(styles)(withConnect);
export default styled;