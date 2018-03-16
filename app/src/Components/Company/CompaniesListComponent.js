import React,{Component} from 'react';
import 'typeface-roboto';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Delete from 'material-ui-icons/Delete'
import SlideDialogCompanyUpdate from './SlideDialogCompanyUpdate';
import {browserHistory} from 'react-router';
import { withRouter , Redirect } from "react-router-dom";
import * as companyActions from "../../actions/companyActions";
import { connect } from 'react-redux';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import moment from 'moment'
import Divider from 'material-ui/Divider';
const styles = {
    root: {
        flexGrow: 1,
        adding:'50px'
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
    marginImage : {
        marginLeft: '15%',
    },
    buttonCompany : {
        marginLeft: '35%'
    },
    center : {
        textAlign:'center'
    },
    padding : {
        padding: '50px'
    },
    marginedButton : {
        marginLeft:'65px'
    }
}

class CompaniesListComponent extends Component {

    list_deep_companies = (the_id) => {
        this.props.history.push('/CompaniesPage/' + the_id);
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={40}>
                    {
                        this.props.listOfCompanies ?
                            this.props.listOfCompanies.map((n)=> (
                                <Grid item lg={4} key={n.id} className={classes.padding}>
                                    <Card className={classes.card}>
                                        <CardMedia
                                            className={classes.media}
                                            title="Company Icon"
                                            image=""
                                        >
                                            <img className={classes.marginImage} src={require("../../Images/company-icon.png")}/>
                                        </CardMedia>
                                        <Divider/>
                                        <CardContent>
                                            <Button className={classes.buttonCompany} onClick={this.list_deep_companies.bind(this, n.id)}>{n.name}</Button>
                                            <Typography component="p" className={classes.center}>Id of company : {n.id}</Typography>
                                            <Typography component="p" className={classes.center}>Id of creator : {n.userId}</Typography>
                                            <Typography component="p" className={classes.center}>Created at : {moment(n.createdAt,"YYYYMMDD").add(12,'hours').fromNow()}</Typography>
                                            <Typography component="p" className={classes.center}>Updated at : {moment(n.updatedAt,"YYYYMMDD").add(12,'hours').fromNow()}</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                <Button onClick={this.props.deleteTheUser.bind(this, n.id)} className={classes.marginedButton}>
                                                    <Delete/>
                                                </Button>
                                            </Button>
                                            <SlideDialogCompanyUpdate element={n} companyList={this.props.listCompany} id={n.id}/>

                                        </CardActions>

                                    </Card>
                                </Grid>
                            )) : <p>Loading items</p>}
                </Grid>
            </div>
        )
    }
    componentDidMount()
    {
        this.props.listCompany(this.props.userInfo.id);
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTheUser: (value) => {
            dispatch(companyActions.deleteCompany(value));
        },
    }
};
const mapStateToProps = (state) => ({
    userInfo : state.auth.loggedInUserInfo,
    listOfCompanies : state.companies.listOfAllCompanies,
})
const withConnect = connect(mapStateToProps, mapDispatchToProps)(CompaniesListComponent);
const Styles = withStyles(styles)(withConnect);
const Router = withRouter(Styles);
export default Router;