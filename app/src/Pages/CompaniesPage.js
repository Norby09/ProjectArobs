import React , {Component} from 'react';
import CompaniesListComponent from '../Components/Company/CompaniesListComponent'
import CreateCompanies from '../Components/Company/CreateCompanies';
import AppBarForCompanyPage from '../Components/AppBars/AppBarForCompanyPage'
import Grid from 'material-ui/Grid';
import * as companyActions from "../actions/companyActions";
import store from '../config/store/index'
import { connect } from 'react-redux';
import LowerAppBar from '../Components/AppBars/LowerAppBar';
const styles ={
    elem : {
        display:'block',

        flexGrow: '1',
        backgroundColor: '#e0e1e2',
        // backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',

    },
    thise : {
        margin: '0 auto',
        marginTop : '40px',
    },
    paddedItem : {
        padding: '80px'
    },
    padding : {
      paddingBottom : '0 !important',
    }


};
// let id = window.localStorage.getItem("id");
console.log('SUNTEM AICI');
class CompaniesPage extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            CompaniesInfoList : [],
            JobInfoListFromCompany : [],
        }
    }

    render() {
        const { classes} = this.props;

        return (

            <div style={styles.elem}>
                <Grid container spacing={0}>
                    <Grid item lg={12}>
                        <AppBarForCompanyPage/>
                    </Grid>
                    <Grid item lg={4} style={styles.thise}>
                        <CreateCompanies listCompany={this.props.listTheCompanies}/>
                    </Grid>
                    <Grid item lg={12} style={styles.paddedItem}>
                        <CompaniesListComponent companyList={this.props.listOfCompanies} listCompany={this.props.listTheCompanies}/>
                    </Grid>
                    <Grid item lg={12} style={styles.padding}>
                        <LowerAppBar/>
                    </Grid>
                </Grid>
            </div>
        );
}

    componentDidMount(){
        // console.log(this.props.userInfo)
        this.props.listTheCompanies(this.props.userInfo.id);
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        listTheCompanies: (id) => {
            dispatch(companyActions.listCompanies(id));
        },
    }
};
const mapStateToProps = (state) => ({
    listOfCompanies : state.companies.listOfAllCompanies,
    userInfo : state.auth.loggedInUserInfo,
})
const withConnect = connect(mapStateToProps, mapDispatchToProps)(CompaniesPage);
export default withConnect;