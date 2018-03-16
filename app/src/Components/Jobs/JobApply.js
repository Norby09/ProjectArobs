import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import * as jobActions from '../../actions/jobActions';
function Transition(props) {
    return <Slide direction="up" {...props} />;
}
const styles = {
    inlineDiv : {
        display:'inline-block',
        marginLeft:'63%',
    },
    textField : {
        display:'block',
        margin:'auto',
    },
    marginedImage : {
        marginLeft: '14%',
    }
};

let body = {
    username:'',
    firstName: '',
    lastName: '',
    password: '',
    userRoleId: '',
}
class JobApply extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open : false,
        }
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    initApplyForJob = () => {
        let body = {
            jobId : parseInt(this.props.jobId),
            userId : this.props.userId,
            isAccepted : false,
        }
        this.props.applyForTheJob(body);
    }
    render() {
        let isApplyButtonDisabled = false;
        const { listOfDetails } = this.props;
        console.log(listOfDetails);
        const userJobApplicationInfoList = listOfDetails && listOfDetails.userJobApplicationInfoList;

        if (userJobApplicationInfoList) {
            const isApplied = userJobApplicationInfoList.findIndex((application) => application.userId === this.props.userId);

            isApplyButtonDisabled = isApplied > -1;
        }

        return (

            <div style={styles.inlineDiv}>
                <Button onClick={this.handleClickOpen} disabled={isApplyButtonDisabled}>Apply For Job</Button>
                <Dialog
                    open={this.state.open}
                    keepMounted
                    onClose={this.handleClose}
                    style={{backgroundColor: 'red !important'}}
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Apply for the job"}
                    </DialogTitle>
                    <DialogContent>
                        <Button onClick={this.initApplyForJob.bind(this)} color="primary">
                            <img style={styles.marginedImage} src={require('../../Images/Apply-for-Job.png')} />
                        </Button>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.initApplyForJob.bind(this)} color="primary">
                            Apply
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        );
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        applyForTheJob : (value) => {
            dispatch(jobActions.applyForJob(value));
        }
    }
};
const mapStateToProps = (state) => ({
    DialogOpen : state.users.open,
});
const withConnect = connect(mapStateToProps, mapDispatchToProps)(JobApply);

const withStyle = withStyles(styles)(withConnect);

export default withStyle;