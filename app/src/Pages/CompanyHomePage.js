import React , {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import AppBarForCompanyPage from '../Components/AppBars/AppBarForCompanyPage'
import { withRouter , Redirect } from "react-router-dom";
import Grid from 'material-ui/Grid';
import CompanyFront from '../Components/Company/CompanyFront'
import ListJobsOfACompany from '../Components/Jobs/ListJobsOfACompany'
import * as jobActions from "../actions/jobActions";
import { connect } from 'react-redux';
const styles = {
    elem : {
        display:'block',
        backgroundColor: 'white',
        minHeight:'100vh',
        flexGrow: '1',
    }
};

class CompaniesHomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            jobInfoList : [],
            nameOfCompany : '',
        }
    }
    onAppInit = () =>
    {
        const companyId = this.props.match.params.id;
        const booleanvalue = true;
        this.props.listJobsForACompany(companyId,booleanvalue);
    }
    render() {
        const { classes} = this.props;
        return (
            <div className={classes.elem}>
                <Grid container spacing={40}>
                    <Grid item lg={12}>
                        <AppBarForCompanyPage/>
                    </Grid>
                    <Grid item lg={12}>
                        <CompanyFront companyName={this.state.nameOfCompany} jobList={this.props.listOfJobs}/>
                    </Grid>
                    <Grid item lg={12}>
                        <ListJobsOfACompany jobList={this.props.listOfJobs}/>
                    </Grid>
                </Grid>
            </div>
        );
    }

    componentDidMount(){
        this.onAppInit();
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        listJobsForACompany : (value,value1) => {
            dispatch(jobActions.listJobsForCompanyUser(value,value1))
        }
    }
};
//send list of users to props
const mapStateToProps = (state) => ({
    listOfJobs : state.jobs.listOfJobsForCompany,
});
const withConnect = connect(mapStateToProps, mapDispatchToProps)(CompaniesHomePage);
const styler = withStyles(styles)(withConnect);
const router = withRouter(styler);
export default router