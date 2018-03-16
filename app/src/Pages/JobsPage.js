import React, {Component} from 'react';
import { connect } from 'react-redux';
import AppBarForCompanyPage from '../Components/AppBars/AppBarForCompanyPage';
import JobCreate from '../Components/Jobs/JobCreate';
import JobList from '../Components/Jobs/JobList';
import Grid from 'material-ui/Grid';
import * as companyActions from "../actions/companyActions";
import * as jobActions from "../actions/jobActions";
import LowerAppBar from "../Components/AppBars/LowerAppBar";

const styles = {
    elem: {
        display: 'block',
    },
    mainDiv : {
        backgroundColor: '#e0e1e2',
        backgroundSize: 'cover',
        minHeight: '100vh',
    },
    margined : {
        marginLeft : '36%',
        paddingTop : '40px',
    },
    padding : {
        padding : '80px'
    }

};
// let id = window.localStorage.getItem("id");

class JobsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            array: [],
            description: '',
            availability: '',
            inputBenefit: '',
            inputSkill: '',
            inputRequirement: '',
            selectedCompany: '',
            jobBenefits: [],
            jobBenefitsInfoList : [],
            jobRequirementInfoList : [],
            jobSkillInfoList : [],
            jobAvailability : false,
        }
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    }
        handleStateForBenefits = event => {
            this.setState({inputBenefit : event.target.value});
        }
        onClickEventForBenefits = () => {
            const jobBenefitsInfoList = [...this.state.jobBenefitsInfoList];
            const value = this.state.inputBenefit;
            jobBenefitsInfoList.push({
                name : value,
            })
            this.setState({jobBenefitsInfoList});
        }
        handleStateForRequirements = event => {
            this.setState({inputRequirement: event.target.value});
        }
        onClickEventForRequirement = () => {
            const jobRequirementInfoList = [...this.state.jobRequirementInfoList];
            const value = this.state.inputRequirement;
            jobRequirementInfoList.push({
                name : value,
            })
            this.setState({jobRequirementInfoList})
        }
        handleStateForSkills = event => {
            this.setState({inputSkill: event.target.value});
        }
        onClickEventForSkill = () => {
            const jobSkillInfoList = [...this.state.jobSkillInfoList];
            const value = this.state.inputSkill;
            jobSkillInfoList.push({
                name : value,
            })
            this.setState({jobSkillInfoList})
        }

    render() {
        const { classes,loggedInUserInfo} = this.props;

        return (
            <div style={styles.mainDiv}>
                 {/*codul de mai jos e pentru a verifica ce avem pe state si a afisa*/}
                {/*<pre>{ JSON.stringify(this.state, null, 2) }</pre>*/}
                <Grid container spacing={0}>
                    <Grid item lg={12}>
                        <AppBarForCompanyPage/>
                    </Grid>
                    <Grid item lg={4} style={styles.margined}>
                        <JobCreate companyList={this.props.listTheCompanies} companyItems={this.props.listOfCompanies}
                                   handleChange={this.handleChange} createJob = {this.props.createTheJob} name={this.state.name}
                                   description={this.state.description} availability={this.state.availability}
                                   companyId={this.state.selectedCompany}
                                    jobBenefits={this.state.jobBenefitsInfoList}
                                    jobBenefitInfoList={this.state.jobRequirementInfoList}
                                    handleStateForBenefits={this.handleStateForBenefits}
                                    addToState={this.onClickEventForBenefits}
                                    array={this.state.array}
                                    handleStateForRequirements={this.handleStateForRequirements}
                                    addToStateForRequirement={this.onClickEventForRequirement}
                                    jobRequirement={this.state.jobRequirementInfoList}
                                    handleStateForSkills={this.handleStateForSkills}
                                    addToStateForSkills={this.onClickEventForSkill}
                                    skillList={this.state.jobSkillInfoList}
                                    jobAvailability={this.state.jobAvailability}
                        />
                    </Grid>
                    <Grid item lg={12} style={styles.padding}>
                        <JobList showJobs={this.props.listTheJobs} loggedInUserInfo={this.props.loggedInUserInfo} jobsList={this.props.listOfJobs} createJob={this.props.createTheJob} companyId={this.state.selectedCompany}/>
                    </Grid>
                    <Grid item lg={12}>
                        <LowerAppBar/>
                    </Grid>
                </Grid>
            </div>
        );
    }

    componentDidMount() {
        console.log(this.props);
        this.props.listTheCompanies(this.props.loggedInUserInfo.id);
        this.props.listTheJobs();

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        listTheCompanies: (value) => {
            dispatch(companyActions.listCompanies(value));
        },
        createTheJob: (value) => {
                dispatch(jobActions.createJob1(value));
            },
        listTheJobs: () => {
            dispatch(jobActions.listJobs());
        }
        }
    };

const mapStateToProps = (state) => ({
        listOfCompanies: state.companies.listOfAllCompanies,
        listOfJobs: state.jobs.listOfAllJobs,
        loggedInUserInfo: state.auth.loggedInUserInfo,
});
const withConnect = connect(mapStateToProps, mapDispatchToProps)(JobsPage);
export default withConnect;