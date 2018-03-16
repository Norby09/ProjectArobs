import React , {Component} from 'react';
import 'typeface-roboto';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Delete from 'material-ui-icons/Delete';
import SlideDialogJobUpdate from "./SlideDialogJobUpdate";
import Cancel from 'material-ui-icons/Cancel';
import Done from 'material-ui-icons/Done';
import Grid from 'material-ui/Grid';
import * as jobActions from '../../actions/jobActions';
import { connect } from 'react-redux';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import moment from 'moment'
import Divider from 'material-ui/Divider';
import {browserHistory} from 'react-router';
import { withRouter , Redirect } from "react-router-dom";
const styles = {
    LayoutOfUsers : {
        margin: '0 auto',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 200,
    },
    textField: {
        display:'block',
    },
    inlineDiv: {
        display:'inline-block',
    },
    dividerMargin: {
        margin : '2% 0'
    },
    marginImage : {
        height: '100%',
        marginLeft :'20%',
    },
    center : {
        textAlign:'center',
    },
    padding : {
        padding: '50px',
    },
    fullWidth: {
        width: '100%',
    },
    marginedButton : {
        marginLeft:'65px'
    }

};
let id = window.localStorage.getItem("id");
class JobList extends Component {
    list_deep_jobs = (the_id) => {
        this.props.history.push('/JobsPage/' + the_id);
    };
    render() {
        const {classes} = this.props;

    return (
        <div style={styles.LayoutOfUsers}>
            <Grid container spacing={40}>
                {
                    this.props.jobsList ?
                        this.props.jobsList.map((n) => (
                            <Grid item lg={4} key={n.id} className={classes.padding}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.media}
                                        title="Company Icon"
                                        image="asd"
                                    >
                                        <img className={classes.marginImage} src={require("../../Images/jobImage.png")}/>
                                    </CardMedia>
                                    <Divider/>
                                    <CardContent>
                                        <Typography><Button className={classes.fullWidth} onClick={this.list_deep_jobs.bind(this,n.id)} /*onClick={this.list_deep_companies.bind(this, n.id)}*/>{n.name}</Button></Typography>
                                        <Typography component="p" className={classes.center}>Id : {n.id}</Typography>
                                        <Typography component="p" className={classes.center}>CompanyId : {n.companyId}</Typography>
                                        <Typography component="p" className={classes.center}>Is available : {n.isAvailable ? <Done /> : <Cancel />}</Typography>
                                        <Typography component="p" className={classes.center}>Created at : {moment(n.createdAt,"YYYYMMDD").add(12,'hours').fromNow()}</Typography>
                                        <Typography component="p" className={classes.center}>Updated at : {moment(n.updatedAt,"YYYYMMDD").add(12,'hours').fromNow()}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            <Button onClick={this.props.deleteTheJob.bind(this, n.id)} className={classes.marginedButton}>
                                                <Delete/>
                                            </Button>
                                        </Button>
                                        <SlideDialogJobUpdate
                                            companyId={n.companyId} jobId={n.id}
                                            showJob={this.props.showJobs}
                                            element={n}/>

                                    </CardActions>

                                </Card>
                            </Grid>
                        )) : <p> Loading items ....</p>
                }
            </Grid>
        </div>

    );
}
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteTheJob: (value) => {
            dispatch(jobActions.deleteJob(value))
        },
        listTheJobs: () => {
            dispatch(jobActions.listJobs());
        }
    };
};
const mapStateToProps = (state) => ({
    listOfJobs : state.jobs.listOfAllJobs,
    userInfo : state.auth.loggedInUserInfo,
})
const withConnect = connect(mapStateToProps,mapDispatchToProps)(JobList);
const Style = withStyles(styles)(withConnect);
const Routing = withRouter(Style);
export default Routing;