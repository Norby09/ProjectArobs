import React, { Component } from 'react';
import 'typeface-roboto';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider'
import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Add from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';
import JobApply from '../../Components/Jobs/JobApply';
import AddBox from 'material-ui-icons/AddBox';
import RemoveCircle from 'material-ui-icons/RemoveCircle';
import Undo from 'material-ui-icons/Undo';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import * as jobActions from "../../actions/jobActions";
import SlideDialogBenefitUpdate from '../Users/SlideDialogBenefitUpdate';
import SlideDialogRequirementUpdate from '../Users/SlideDialogRequirementUpdate';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = {
    image : {
        width:'30%',
        marginLeft:'35%',
    },
    padding : {
        padding : '20px',
        display: 'inline-block',
        borderRight: '1px dashed grey',
    },
    inline : {
        display: 'inline-block',
    },
    paddingLeftie : {
        paddingLeft : '15px',
    },
    bordered : {
      borderBottom : '1px solid lightgrey',
    },
    inlined : {
      display:'inline-block',
    },
    p20 : {
        paddingBottom : '20px',
    },
    floating : {
        float: 'right',
    },
    textFieldBlock : {
        display:'block',
    },
    marginedLeft : {
      marginLeft : '100%',
    },
    tablehead : {
      backgroundColor : '#3f51b5',
    },
    tableMargin : {
        marginLeft : '9%',
    }
};
class JobFront extends Component {

    onChangeBenefit = (event, elemIndex) => {
        this.props.onChangeBenefit(event, elemIndex);
    };
    onChangeRequirement = (event, elemIndex) => {
        this.props.onChangeRequirement(event, elemIndex);
    };
    onInitCreateBenefit = () => {
        let body = this.props.benefitList;
        for(let i=0;i < body.length;i++){
            body[i].jobId = this.props.jobId;
        }
        this.props.createJobBenefit(body,this.props.jobId);
    }
    onInitCreateRequirement = () => {
        let body = this.props.requirementList;
        for(let i=0;i < body.length;i++){
            body[i].jobId = this.props.jobId;
        }
        this.props.createJobRequirement(body,this.props.jobId);
    }
    render() {
        const { classes } = this.props;
        let nameOfCompany = this.props.companyName;
        return (
            <div className={classes.firstDiv}>
                <Grid container spacing={0}>
                    <Grid item lg={12}>
                        <Paper>
                            <Grid item lg={12}>
                                <Typography variant="display2">
                                    <span className={classes.paddingLeftie}>JobInformation</span>
                                    {
                                        this.props.userInfo && this.props.userInfo.userRoleId===3?
                                        <span><JobApply userId={this.props.userId} jobId={this.props.jobId} listOfDetails={this.props.listOfDetails} jobApplications={this.props.jobApplications}/></span>:null
                                    }
                                    </Typography>
                            <Divider/>
                                <Grid item lg={12}>
                                    <Paper >

                                {
                                    this.props.listOfDetails ?
                                        <Grid item lg={12}>
                                            <Grid item lg={2} className={classes.padding}>
                                                <Typography variant="headline">Id</Typography>
                                                <Typography variant="headline">Company Id</Typography>
                                                <Typography variant="headline">Name</Typography>
                                                <Typography variant="headline">Description</Typography>
                                                <Typography variant="headline">Created at</Typography>
                                                <Typography variant="headline">Updated at</Typography>
                                            </Grid>
                                            <Grid item lg={10} className={classes.inline}>
                                                <Typography variant="headline" className={classes.paddingLeftie}>{this.props.listOfDetails.id}</Typography>
                                                <Typography variant="headline" className={classes.paddingLeftie}>{this.props.listOfDetails.companyId}</Typography>
                                                <Typography variant="headline" className={classes.paddingLeftie}>{this.props.listOfDetails.name}</Typography>
                                                <Typography variant="headline" className={classes.paddingLeftie}>{this.props.listOfDetails.description}</Typography>
                                                <Typography variant="headline" className={classes.paddingLeftie}>{this.props.listOfDetails.createdAt}</Typography>
                                                <Typography variant="headline" className={classes.paddingLeftie}>{this.props.listOfDetails.updatedAt}</Typography>
                                            </Grid>
                                        </Grid> : null
                                }
                                     </Paper>
                                </Grid>
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<Add/>} className={classes.bordered}>
                                    <Typography variant="display2" className={classes.heading}>Benefits</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>

                                    <Grid container spacing={0}>

                                        {
                                            this.props.listOfDetails ?
                                                console.log(this.props.listOfDetails.jobBenefitInfoList) : null
                                        }
                                        <Grid item lg={10}>
                                            {
                                                this.props.listOfDetails ?
                                                    this.props.listOfDetails.jobBenefitInfoList.map((n) => (
                                                        <div className={classes.p20}>
                                                            <Grid item lg={2} className={classes.padding}>
                                                                <Typography variant="headline">Job Id</Typography>
                                                                <Typography variant="headline">Id</Typography>
                                                                <Typography variant="headline">Name</Typography>
                                                                <Typography variant="headline">Created at</Typography>
                                                                <Typography variant="headline">Updated at</Typography>
                                                            </Grid>
                                                            <Grid item lg={10} className={classes.inlined}>
                                                                <Typography variant="headline" className={classes.paddingLeftie}>{n.jobId}</Typography>
                                                                <Typography variant="headline" className={classes.paddingLeftie}>{n.id}</Typography>
                                                                <Typography variant="headline" className={classes.paddingLeftie}>{n.name}</Typography>
                                                                <Typography variant="headline" className={classes.paddingLeftie}>{n.createdAt}</Typography>
                                                                <Typography variant="headline" className={classes.paddingLeftie}>{n.updatedAt}</Typography>
                                                                {
                                                                    this.props.userInfo && this.props.userInfo.userRoleId === 2 ?
                                                                        <div>
                                                                            <Button onClick={this.props.onAddBenefit.bind(this)} className={classes.floating}><AddBox/></Button>
                                                                            <Button onClick={this.props.deleteJobBenefit.bind(this,n.id,n.jobId)} className={classes.floating}><RemoveCircle /></Button>
                                                                            <SlideDialogBenefitUpdate element={n} jobId={this.props.jobId}/>
                                                                        </div> : null

                                                                }

                                                            </Grid>
                                                        </div>
                                                    )) : null
                                            }
                                            {
                                                this.props.userInfo && this.props.userInfo.userRoleId === 2 ?
                                                <Button onClick={this.props.onAddBenefit.bind(this)}
                                                        className={classes.floating}><AddBox/></Button> : null
                                            }
                                            {
                                                this.props.benefitList && this.props.benefitList.length!==0 ?
                                                <Button className={classes.marginedLeft}
                                                        onClick={this.onInitCreateBenefit.bind(this)}>Create
                                                    benefit</Button> : null
                                            }
                                            {
                                                this.props.benefitList ?
                                                    this.props.benefitList.map((n,index) => (
                                                        <div>

                                                            <TextField
                                                                name="name"
                                                                label="Name of benefit"
                                                                value={index.name}
                                                                margin="normal"
                                                                style={styles.textFieldBlock}
                                                                onChange={(event) => this.onChangeBenefit(event, index)}
                                                            />

                                                        </div>
                                                    )) : null
                                            }
                                        </Grid>
                                    </Grid>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<Add/>} className={classes.bordered}>
                                        <Typography variant="display2" className={classes.heading}>Requirement</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Grid container spacing={0}>
                                            {
                                                this.props.listOfDetails ?
                                                    console.log(this.props.listOfDetails) : null
                                            }
                                            <Grid item lg={10}>
                                                {
                                                    this.props.listOfDetails ?
                                                        this.props.listOfDetails.jobRequirementInfoList.map((n) => (
                                                            <div className={classes.p20}>
                                                                <Grid item lg={2} className={classes.padding}>
                                                                    <Typography variant="headline">Job Id</Typography>
                                                                    <Typography variant="headline">Id</Typography>
                                                                    <Typography variant="headline">Name</Typography>
                                                                    <Typography variant="headline">Created at</Typography>
                                                                    <Typography variant="headline">Updated at</Typography>
                                                                </Grid>
                                                                <Grid item lg={10} className={classes.inlined}>
                                                                    <Typography variant="headline" className={classes.paddingLeftie}>{n.jobId}</Typography>
                                                                    <Typography variant="headline" className={classes.paddingLeftie}>{n.id}</Typography>
                                                                    <Typography variant="headline" className={classes.paddingLeftie}>{n.name}</Typography>
                                                                    <Typography variant="headline" className={classes.paddingLeftie}>{n.createdAt}</Typography>
                                                                    <Typography variant="headline" className={classes.paddingLeftie}>{n.updatedAt}</Typography>
                                                                    {
                                                                        this.props.userInfo && this.props.userInfo.userRoleId === 2 ?
                                                                            <div>
                                                                                <Button onClick={this.props.onAddRequirement.bind(this)} className={classes.floating}><AddBox/></Button>
                                                                                <Button onClick={this.props.deleteJobRequirement.bind(this,n.id,n.jobId)} className={classes.floating}><RemoveCircle /></Button>
                                                                                <SlideDialogRequirementUpdate element={n} jobId={this.props.jobId}/>
                                                                            </div> : null

                                                                    }
                                                                </Grid>
                                                            </div>
                                                        )) : null
                                                }
                                                {
                                                    this.props.userInfo && this.props.userInfo.userRoleId === 2 ?
                                                    <Button onClick={this.props.onAddRequirement.bind(this)}
                                                            className={classes.floating}><AddBox/></Button> : null
                                                }
                                                {
                                                    this.props.requirementList && this.props.requirementList.length!==0 ?
                                                        <Button className={classes.marginedLeft}
                                                                onClick={this.onInitCreateRequirement.bind(this)}>Create
                                                            requirement</Button> : null
                                                }
                                                {
                                                    this.props.requirementList ?
                                                        this.props.requirementList.map((n,index) => (
                                                            <div>

                                                                <TextField
                                                                    name="name"
                                                                    label="Name of requirement"
                                                                    value={index.name}
                                                                    margin="normal"
                                                                    style={styles.textFieldBlock}
                                                                    onChange={(event) => this.onChangeRequirement(event, index)}
                                                                />

                                                            </div>
                                                        )) : null
                                                }
                                            </Grid>
                                        </Grid>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                <ExpansionPanel>
                                    <ExpansionPanelSummary expandIcon={<Add/>} className={classes.bordered}>
                                        <Typography variant="display2" className={classes.heading}>Skills</Typography>
                                    </ExpansionPanelSummary>
                                    <ExpansionPanelDetails>
                                        <Grid container spacing={0}>
                                            <Grid item lg={10}>
                                                {
                                                    this.props.listOfDetails ?
                                                        this.props.listOfDetails.jobSkillInfoList.map((n) => (
                                                            <div className={classes.p20}>
                                                                <Grid item lg={2} className={classes.padding}>
                                                                    <Typography variant="headline">Job Id</Typography>
                                                                    <Typography variant="headline">Id</Typography>
                                                                    <Typography variant="headline">Skill id</Typography>
                                                                    <Typography variant="headline">Name</Typography>
                                                                    <Typography variant="headline">Rating</Typography>
                                                                    <Typography variant="headline">Created at</Typography>
                                                                    <Typography variant="headline">Updated at</Typography>
                                                                </Grid>
                                                                <Grid item lg={10} className={classes.inlined}>
                                                                    <Typography variant="headline" className={classes.paddingLeftie}>{n.jobId}</Typography>
                                                                    <Typography variant="headline" className={classes.paddingLeftie}>{n.id}</Typography>
                                                                    <Typography variant="headline" className={classes.paddingLeftie}>{n.skillId}</Typography>
                                                                    <Typography variant="headline" className={classes.paddingLeftie}>{n.skillInfo.name}</Typography>
                                                                    <Typography variant="headline" className={classes.paddingLeftie}>{n.rating}</Typography>
                                                                    <Typography variant="headline" className={classes.paddingLeftie}>{n.createdAt}</Typography>
                                                                    <Typography variant="headline" className={classes.paddingLeftie}>{n.updatedAt}</Typography>
                                                                </Grid>
                                                            </div>
                                                        )) : null
                                                }
                                                {
                                                    this.props.listOfSkills ? console.log(this.props.listOfSkills) : null
                                                }
                                            </Grid>
                                        </Grid>
                                    </ExpansionPanelDetails>
                                </ExpansionPanel>
                                {
                                    this.props.userInfo && this.props.userInfo.userRoleId === 2 ?
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary expandIcon={<Add/>} className={classes.bordered}>
                                            <Typography variant="display2" className={classes.heading}>Job
                                                Applications</Typography>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <Grid container spacing={0}>
                                                <Grid item lg={10}>
                                                    <Table className={classes.tableMargin}>
                                                        <TableHead className={classes.tablehead}>
                                                            <TableRow>
                                                                <TableCell>ID</TableCell>
                                                                <TableCell>User Id</TableCell>
                                                                <TableCell>Job Id</TableCell>
                                                                <TableCell>Username</TableCell>
                                                                <TableCell>Created At</TableCell>
                                                                <TableCell>Updated At</TableCell>
                                                            </TableRow>
                                                        </TableHead>
                                                        <TableBody>
                                                            {
                                                                this.props.jobApplicationsList ?
                                                                    // this.props.jobApplicationsList.map((n) => (
                                                                    //     <div className={classes.p20}>
                                                                    //         <Grid item lg={2} className={classes.padding}>
                                                                    //             <Typography variant="headline">Job Id</Typography>
                                                                    //             <Typography variant="headline">Id</Typography>
                                                                    //             <Typography variant="headline">Skill id</Typography>
                                                                    //             <Typography variant="headline">Name</Typography>
                                                                    //             <Typography variant="headline">Rating</Typography>
                                                                    //             <Typography variant="headline">Created at</Typography>
                                                                    //             <Typography variant="headline">Updated at</Typography>
                                                                    //         </Grid>
                                                                    //         <Grid item lg={10} className={classes.inlined}>
                                                                    //             <Typography variant="headline" className={classes.paddingLeftie}>{n.jobId}</Typography>
                                                                    //             <Typography variant="headline" className={classes.paddingLeftie}>{n.id}</Typography>
                                                                    //             <Typography variant="headline" className={classes.paddingLeftie}>{n.skillId}</Typography>
                                                                    //             <Typography variant="headline" className={classes.paddingLeftie}>{n.skillInfo.name}</Typography>
                                                                    //             <Typography variant="headline" className={classes.paddingLeftie}>{n.rating}</Typography>
                                                                    //             <Typography variant="headline" className={classes.paddingLeftie}>{n.createdAt}</Typography>
                                                                    //             <Typography variant="headline" className={classes.paddingLeftie}>{n.updatedAt}</Typography>
                                                                    //         </Grid>
                                                                    //     </div>
                                                                    // )) : null
                                                                    this.props.jobApplicationsList.map((n) => (
                                                                        <TableRow key={n.id}>
                                                                            <TableCell>{n.id}</TableCell>
                                                                            <TableCell>{n.userId}</TableCell>
                                                                            <TableCell>{n.jobId}</TableCell>
                                                                            <TableCell>{n.userInfo.username}</TableCell>
                                                                            <TableCell>{n.createdAt}</TableCell>
                                                                            <TableCell>{n.updatedAt}</TableCell>
                                                                        </TableRow>
                                                                    )) : <p>Loading...</p>
                                                            }
                                                        </TableBody>
                                                    </Table>
                                                    {
                                                        this.props.listOfSkills ? console.log(this.props.listOfSkills) : null
                                                    }
                                                </Grid>
                                            </Grid>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel> : null
                                }
                            </Grid>

                        </Paper>
                    </Grid>
                </Grid>
            </div>

        );
    }
}
const mapStateToProps = (state) => ({
    userInfo : state.auth.loggedInUserInfo,
});
const mapDispatchToProps = (dispatch) => {
    return {
        deleteJobBenefit : (value,value1) => {
            dispatch(jobActions.deleteJobBenefit(value,value1))
        },
        createJobBenefit : (value,value1) => {
            dispatch(jobActions.createBenefit(value,value1));
        },
        createJobRequirement : (value,value1) => {
            dispatch(jobActions.createRequirement(value,value1));
        },
        deleteJobRequirement : (value,value1) => {
            dispatch(jobActions.deleteJobRequirement(value,value1))
        }
    };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps)(JobFront);
const Styled = withStyles(styles)(withConnect);
export default Styled;