import React , {Component} from 'react';
import AppBarForUsers from '../Components/AppBars/AppBarForUsers'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import ProfileUsers from '../Components/Users/ProfileUsers';
import ProfileInfo from '../Components/Users/ProfileInfo';
import * as userActions from '../actions/userActions';
import { connect } from 'react-redux';
import LowerAppBar from '../Components/AppBars/LowerAppBar';
const styles = {
    elem : {
        minHeight:'100vh',
        flexGrow: '1',
        backgroundColor: 'white',
    },
    margin : {
        margin:'0 auto',
        marginTop: '5%',
    },
    margined : {
        margin:'0 auto',
        marginBottom : '5%',
    }
}
let id = window.localStorage.getItem('id');
class Profile extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            institutionForEducation : '',
            descriptionForEducation : '',
            startDateForEducation : '',
            endDateForEducation : '',
            institutionForWork : '',
            descriptionForWork : '',
            startDateForWork : '',
            endDateForWork : '',
            education : [],
            experience : [],
        }
    }
    onChange = (event, index) => {
        const newValue = event.target.value;
        const propertyToChange = event.target.name;
        const education = [...this.state.education];

        const elementToChange = education[index];

        elementToChange[propertyToChange] = newValue;

        this.setState({ education });
    };
    onAdd = () => {
        this.setState((prevState) => ({
            ...prevState,
            education: prevState.education.concat({

            }),
        }))
    };
    onChangeWork = (event, index) => {
        const newValue = event.target.value;
        const propertyToChange = event.target.name;
        const experience = [...this.state.experience];

        const elementToChange = experience[index];

        elementToChange[propertyToChange] = newValue;

        this.setState({ experience });
    };
    onAddWork = () => {
        this.setState((prevState) => ({
            ...prevState,
            experience: prevState.experience.concat({

            }),
        }))
    };
    render() {
        const { classes} = this.props;
        console.log(this.props.userDetailedInfo);
        return (
            <div className={classes.elem}>
                {/*<pre>{ JSON.stringify(this.state, null, 2) }</pre>*/}
                <Grid container spacing={0}>
                    <Grid item lg={12}>
                        <AppBarForUsers/>

                    </Grid>
                    <Grid item lg={10} className={classes.margin}>
                        <ProfileInfo
                            getInfo={this.props.getInfoAboutUser}
                            element={this.props.userDetailedInfo}
                        />
                    </Grid>
                    <Grid item lg={10} className={classes.margined}>
                        <ProfileUsers userEducation={this.props.userEducationList}
                                      userExperience={this.props.userExperienceList}
                                      education={this.state.education}
                                      experience={this.state.experience}
                                      onInputChange={this.onChange}
                                      addToList={this.onAdd}
                                      onInputChangeWork={this.onChangeWork}
                                      addToListWork={this.onAddWork} />


                    </Grid>
                    <Grid item lg={12}>
                        <LowerAppBar/>
                    </Grid>
                </Grid>
            </div>
        );
    }
    componentDidMount(){
        this.props.getInfoAboutUser(id,true);
        this.props.getUserEducation(id);
        this.props.getUserExperience(id);
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        getInfoAboutUser : (value,value1) => {
            dispatch(userActions.getInfoAboutUser(value,value1));
        },
        getUserEducation : (value) => {
            dispatch(userActions.getUserEducation(value));
        },
        getUserExperience : (value) => {
            dispatch(userActions.getUserWorkExperience(value));
        },

    }
};
const mapStateToProps = (state) => ({
    userInfo : state.auth.loggedInUserInfo,
    userDetailedInfo: state.users.userDetailedInfo,
    userEducationList : state.users.userEducationList,
    userExperienceList : state.users.userExperience,

});
const withConnect = connect(mapStateToProps,mapDispatchToProps)(Profile);
const styled = withStyles(styles)(withConnect);
export default styled;