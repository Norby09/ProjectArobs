import React,{Component} from 'react'
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import * as jobActions from '../../actions/jobActions'
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Alarm from 'material-ui-icons/Alarm';
import moment from 'moment'
import {browserHistory} from 'react-router';
import { withRouter , Redirect } from "react-router-dom";
import * as userActions from '../../actions/userActions';
const styles = {
    formatedGridItem : {
        padding : '50px !important',
        margin : '0 auto',
    },
    blocks : {
        display:'inline-block'
    },
    blocks1 : {
        display:'inline-block',
        verticalAlign:'top',
    },
    spanned : {
        fontSize: '21px',
        verticalAlign: 'top',
        marginLeft: '6px',
    },
    img : {
        width: '85%',
    },
    font : {
        fontSize : '25px',
    },
    bottom : {
        verticalAlign: 'bottom',
    },
    fontDimension : {
        fontSize: '24px',
        padding: '0',
    }

};
let id = window.localStorage.getItem('id');
class jobListForUsers extends Component {
    constructor(props){
        super(props);
    }
    list_jobs_homepage = (the_id) => {
        this.props.history.push('/JobsPage/' + the_id);
    };
    render() {
        const {classes} = this.props;
        console.log(this.props.listOfAllJobs);
        return (

            <div className={classes.elem}>
                <Grid container spacing={40}>
                    {
                        this.props.listOfAllJobs ?
                            this.props.listOfAllJobs.map((n) => (
                                <Grid item lg={6} className={classes.formatedGridItem}>
                                    <div>
                                        <Paper>
                                            <Grid item lg={3} className={classes.blocks}>
                                                <img src={require('../../Images/jobIcon.jpg')} className={classes.img} />
                                            </Grid>
                                            <Grid item lg={9} className={classes.blocks1}>
                                                <Alarm />
                                                <span className={classes.spanned}>{moment(n.createdAt,"YYYYMMDD").add(12,'hours').fromNow()}</span>
                                                <Typography className={classes.font}><Button className={classes.fontDimension} onClick={this.list_jobs_homepage.bind(this,n.id)}>{n.name}</Button></Typography>
                                                <br />
                                                <br />
                                                <Typography className={classes.bottom}/>Modificat in : {moment(n.updatedAt,"YYYYMMDD").add(12,'hours').fromNow()}
                                            </Grid>
                                        </Paper>
                                    </div>
                                </Grid>
                    )) : <p>No data in listOfJobs</p>
                    }
                </Grid>
            </div>
        )
    }
    componentDidMount() {
        this.props.listTheJobs();
        this.props.getInfoAboutUser(id,true);

    }
}
    const mapDispatchToProps = (dispatch) => {
        return {
            listTheJobs : () => {
                dispatch(jobActions.listJobs());
            },
            getInfoAboutUser : (value,value1) => {
                dispatch(userActions.getInfoAboutUser(value,value1));
            }
        }
    };

    const mapStateToProps = (state) => ({
        listOfAllJobs : state.jobs.listOfAllJobs,
    });

const withConnect = connect(mapStateToProps, mapDispatchToProps)(jobListForUsers);
const Styles =  withStyles(styles)(withConnect);
const Router = withRouter(Styles);
export default Router;