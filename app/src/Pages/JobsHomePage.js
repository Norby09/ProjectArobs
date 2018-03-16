import React , {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import AppBarForCompanyPage from '../Components/AppBars/AppBarForCompanyPage'
import { withRouter } from "react-router-dom";
import Grid from 'material-ui/Grid';
import JobFront from '../Components/Jobs/JobFront'
import * as jobActions from '../actions/jobActions';
import * as adminActions from "../actions/adminActions";
import { connect } from 'react-redux';
const styles = {
    elem : {
        display:'block',
        backgroundColor: '#f3efef',
        minHeight:'100vh',
        flexGrow: '1',
    },
    margin : {
      margin: '0 auto',
    }
};
let id = localStorage.getItem('id');
class JobsHomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            jobId : this.props.match.params.id,
            benefitList : [],
            requirementList : [],
        }
    }
    onChangeBenefit = (event, index) => {
        const newValue = event.target.value;
        const propertyToChange = event.target.name;
        const benefitList = [...this.state.benefitList];

        const elementToChange = benefitList[index];

        elementToChange[propertyToChange] = newValue;

        this.setState({ benefitList });
    };
    onAddBenefit = () => {
        this.setState((prevState) => ({
            ...prevState,
            benefitList: prevState.benefitList.concat({

            }),
        }))
    };
    onChangeRequirement = (event, index) => {
        const newValue = event.target.value;
        const propertyToChange = event.target.name;
        const requirementList = [...this.state.requirementList];

        const elementToChange = requirementList[index];

        elementToChange[propertyToChange] = newValue;

        this.setState({ requirementList });
    };
    onAddRequirement = () => {
        this.setState((prevState) => ({
            ...prevState,
            requirementList: prevState.requirementList.concat({

            }),
        }))
    };
    render() {
        const { classes, loggedInUserInfo} = this.props;

        return (
            <div className={classes.elem}>
                {/*<pre>{JSON.stringify(this.state,null,2)}</pre>*/}
                <Grid container spacing={40}>
                            <Grid item lg={12}>
                                <AppBarForCompanyPage/>
                            </Grid>
                            <Grid item lg={10} className={classes.margin}>
                                <JobFront
                                    onChangeBenefit={this.onChangeBenefit}
                                    onAddBenefit={this.onAddBenefit}
                                    benefitList={this.state.benefitList}
                                    jobId = {this.state.jobId}
                                    listOfDetails={this.props.jobInformationList}
                                    jobApplications={this.props.jobApplications}
                                    userId={loggedInUserInfo && loggedInUserInfo.id}
                                    onChangeRequirement={this.onChangeRequirement}
                                    onAddRequirement={this.onAddRequirement}
                                    requirementList={this.state.requirementList}
                                    listOfSkills={this.props.listOfSkills}
                                    jobApplicationsList={this.props.jobApplicationsList}/>
                            </Grid>
                </Grid>
            </div>
        );
    }

    componentDidMount(){
        this.props.getUserInfo(this.state.jobId);
        this.props.getJobApplication(id);
        this.props.getJobApplications(this.state.jobId);
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
        },
        getUserInfo : (value) => {
            dispatch(jobActions.getInfo(value))
        },
        getJobApplication : (value) => {
            dispatch(jobActions.getJobApplicationsForAUser(value))
        },
        getSkills : () => {
            dispatch(jobActions.getSkills());
        },
        getJobApplications : (value) => {
            dispatch(jobActions.getJobApplicationsForAJob(value))
        }
    }
};
const mapStateToProps = (state) => ({
    loggedInUserInfo: state.auth.loggedInUserInfo,
    jobInformationList : state.jobs.jobInformation,
    jobApplications : state.jobs.jobApplications,
    listOfSkills : state.jobs.listOfSkills,
    jobApplicationsList : state.jobs.applicationsAtAJob,
});
const withConnect = connect(mapStateToProps, mapDispatchToProps)(JobsHomePage);
const Style = withStyles(styles)(withConnect);
const Router = withRouter((Style));
export default Router;