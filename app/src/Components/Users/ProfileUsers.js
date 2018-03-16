import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Accessibility from 'material-ui-icons/Accessibility';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import DeleteForever from 'material-ui-icons/DeleteForever'
import Build from 'material-ui-icons/Build';
import Send from 'material-ui-icons/Send';
import SlideDialogEducationUpdate from '../Users/SlideDialogEducationUpdate';
import SlideDialogWorkUpdate from '../Users/SlideDialogWorkUpdate';
const styles = {
    root : {
        margin: '0 auto',
    },
    textFieldBlock : {
        display:'block',
        width:'35%',
        marginLeft : '4%',

    },
    aligned : {
        textAlign: 'center',
    },
    floating : {
        marginLeft:'87%',
    },
    button : {
        marginLeft:'69%',
        marginBottom : '2%',
    },
    textCentered : {
        textAlign: 'center',
    },
    blocked : {
        display: 'block',
    },
    padding : {
        padding :'20px',
    },
    floatingPoint :  {
        float : 'right',
    },
    text : {

    }

}
let id=window.localStorage.getItem('id');
class ProfileUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val : 1,
            boolean : false,
            institution : '',
            description : '',
            startDate : '',
            endDate : '',
            createdAt : '',
            updatedAt : '',
            institutionForUserWork : '',
            descriptionForUserWork : '',
            startDateForUserWork: '',
            endDateForUserWork: '',
            institutionForEducation : '',
            descriptionForEducation : '',
            startDateForEducation: '',
            endDateForEducation: '',
            workExperienceList : '',
            educationList : [],
        }
    }
    onInitCreateProfile = () => {
        let body = this.props.education;
        for(let i=0;i < body.length;i++){
            body[i].userId = JSON.parse(id);
        }
        this.props.createUserEducation(body);
        // let body1 = {
        //     institution : this.state.institutionForUserWork,
        //     description : this.state.descriptionForUserWork,
        //     startDate : this.state.startDateForUserWork,
        //     endDate : this.state.endDateForUserWork,
        //     userId : this.props.userID.id,
        // }
        // this.props.createUserWorkExperience(body1);
    }
    onInitCreateWork = () => {
        let body = this.props.experience;
        for(let i=0;i < body.length;i++){
            body[i].userId = JSON.parse(id);
        }
        this.props.createUserWorkExperience(body);
    }
    onUpdate = () => {
        this.setState({boolean: !this.state.boolean});
    }
    handleChanger = name => event => {
        this.setState({[name]: event.target.value});
    }
    onInputChange = (event, elemIndex) => {
        this.props.onInputChange(event, elemIndex);
    };
    onInputChangeWork = (event,elemIndex) => {
        this.props.onInputChangeWork(event,elemIndex);
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Paper className={classes.root}>
                    <Typography variant="display3">Add user work experience and user education</Typography>
                    <Divider/>
                    <form noValidate autocomplete="off">
                        <Typography variant="display2"><span>View your work experience</span></Typography>
                        <Divider/>
                        {
                            this.props.userExperience ?
                                this.props.userExperience.map((n) => (
                                    <div>
                                        <Grid container spacing={0}>
                                            <Grid item lg={2} className={classes.padding}>
                                                <Paper>
                                                    <Typography style={styles.blocked}>Institution</Typography>
                                                    <Typography style={styles.blocked}>Description</Typography>
                                                    <Typography style={styles.blocked}>Start Date</Typography>
                                                    <Typography style={styles.blocked}>End Date</Typography>
                                                    <Typography style={styles.blocked}>Created At</Typography>
                                                    <Typography style={styles.blocked}>Updated At</Typography>
                                                </Paper>
                                            </Grid>
                                            <Grid item lg={10} className={classes.padding}>
                                                <Paper>
                                                    <div>
                                                        <Typography style={styles.blocked}>{n.institution}<Button className={classes.floatingPoint} onClick={this.props.deleteeUserWork.bind(this,n.id)}><DeleteForever/></Button><SlideDialogWorkUpdate element={n}/></Typography>
                                                        <Typography style={styles.blocked}>{n.description}</Typography>
                                                        <Typography style={styles.blocked}>{n.startDate}</Typography>
                                                        <Typography style={styles.blocked}>{n.endDate} </Typography>
                                                        <Typography style={styles.blocked}>{n.createdAt} </Typography>
                                                        <Typography style={styles.blocked}>{n.updatedAt}</Typography>
                                                    </div>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </div>))
                                : <p>Loading</p>
                        }
                        <Typography variant="display2"><span className={classes.aligned}>Add your work experience</span>
                        </Typography>
                        <Divider/>
                        <Button onClick={this.props.addToListWork} className={classes.floating}>Add another</Button>
                        {
                            this.props.experience ?
                                this.props.experience.map((n,index) => (
                                    <div>
                                        <TextField
                                            name="institution"
                                            label="The name of the institution"
                                            value={index.institution}
                                            margin="normal"
                                            style={styles.textFieldBlock}
                                            onChange={(event) => this.onInputChangeWork(event, index)}
                                        />
                                        <TextField
                                            name="description"
                                            label="Description"
                                            margin="normal"
                                            value={index.description}
                                            style={styles.textFieldBlock}
                                            onChange={(event) => this.onInputChangeWork(event, index)}
                                        />
                                        <TextField
                                            name="startDate"
                                            label="Start Date"
                                            margin="normal"
                                            type="date"
                                            value={index.startDate}
                                            style={styles.textFieldBlock}
                                            onChange={(event) => this.onInputChangeWork(event, index)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            name="endDate"
                                            label="End Date"
                                            margin="normal"
                                            type="date"
                                            value={index.endDate}
                                            style={styles.textFieldBlock}
                                            onChange={(event) => this.onInputChangeWork(event, index)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>
                                )) : null
                        }
                        {
                            this.props.experience.length!==0 ?
                            <Button onClick={this.onInitCreateWork.bind(this)} variant="raised" color="primary" className={classes.button}>Creeaza profil</Button>:console.log(this.state)

                        }
                        <Typography variant="display2"><span className={classes.aligned}>View your education</span></Typography>
                        <Divider/>
                        {
                            this.props.userEducation ?
                                this.props.userEducation.map((n) =>(
                                    <div>
                                        <Grid container spacing={0}>
                                            <Grid item lg={2} className={classes.padding}>
                                                <Paper>
                                                    <Typography style={styles.blocked}>Institution</Typography>
                                                    <Typography style={styles.blocked}>Description</Typography>
                                                    <Typography style={styles.blocked}>Start Date</Typography>
                                                    <Typography style={styles.blocked}>End Date</Typography>
                                                    <Typography style={styles.blocked}>Created At</Typography>
                                                    <Typography style={styles.blocked}>Updated At</Typography>
                                                </Paper>
                                            </Grid>
                                            <Grid item lg={10} className={classes.padding}>
                                                <Paper>
                                                    <div>
                                                        <Typography style={styles.blocked}>{n.institution}<Button className={classes.floatingPoint} onClick={this.props.deleteUserEducation.bind(this,n.id)}><DeleteForever/></Button><SlideDialogEducationUpdate element={n}/></Typography>
                                                        <Typography style={styles.blocked}>{n.description}</Typography>
                                                        <Typography style={styles.blocked}>{n.startDate}</Typography>
                                                        <Typography style={styles.blocked}>{n.endDate} </Typography>
                                                        <Typography style={styles.blocked}>{n.createdAt} </Typography>
                                                        <Typography style={styles.blocked}>{n.updatedAt}</Typography>
                                                    </div>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </div>))
                                : <p>Loading</p>
                        }
                        <Typography variant="display2"><span className={classes.aligned}>Add your education</span>
                        </Typography>
                        <Divider/>
                        <Button onClick={this.props.addToList} className={classes.floating}>Add another</Button>
                        {
                            this.props.education ?
                                this.props.education.map((n,index) => (
                                    <div>
                                        <TextField
                                            name="institution"
                                            label="The name of the institution"
                                            margin="normal"
                                            value={index.institution}
                                            style={styles.textFieldBlock}
                                            onChange={(event) => this.onInputChange(event, index)}
                                        />
                                        <TextField
                                            name="description"
                                            label="Description"
                                            margin="normal"
                                            style={styles.textFieldBlock}
                                            onChange={(event) => this.onInputChange(event, index)}
                                        />
                                        <TextField
                                            name="startDate"
                                            label="Start Date"
                                            margin="normal"
                                            type="date"
                                            style={styles.textFieldBlock}
                                            onChange={(event) => this.onInputChange(event, index)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            name="endDate"
                                            label="End Date"
                                            margin="normal"
                                            type="date"
                                            style={styles.textFieldBlock}
                                            onChange={(event) => this.onInputChange(event, index)}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>
                                )) : null
                        }
                        {
                            this.props.education.length!==0 ?
                            <Button onClick={this.onInitCreateProfile.bind(this)} variant="raised" color="primary"
                                    className={classes.button}>Creeaza profil</Button> : console.log(this.props.education)
                        }
                    </form>
                </Paper>
            </div>
        )
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        createUserEducation : (value) => {
            dispatch(userActions.createUserEducation(value));
        },
        createUserWorkExperience : (value) => {
            dispatch(userActions.createUserWorkExperience(value));
        },
        deleteUserEducation : (value) => {
          dispatch(userActions.deleteUserEducation(value));
        },
        deleteeUserWork : (value) => {
            dispatch(userActions.deleteUserWork(value));
        }
    }
}
const mapStateToProps = (state) => ({
    userID : state.auth.loggedInUserInfo,
})
const withConnect = connect(mapStateToProps, mapDispatchToProps)(ProfileUsers);
const styled = withStyles(styles)(withConnect);
export default styled;