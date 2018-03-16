import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import TextField from 'material-ui/TextField';
import * as jobActions from '../../actions/jobActions';
import { connect } from 'react-redux';
import Undo from 'material-ui-icons/Undo';
function Transition(props) {
    return <Slide direction="up" {...props} />;
}
const styles = {
    inlineDiv : {
        display:'inline-block',
        float: 'right',
    },
    textField : {
        display:'block',
        margin:'auto',
    },
    floatingPoint : {
        float:'right',
    }
};

class SlideDialogEducationUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            jobId : this.props.jobId,
            name : this.props.element.name,
            object : {
                // institution:this.props.element.institution,
                // description:this.props.element.description,
                // startDate:this.props.element.startDate,
                // endDate:this.props.element.endDate,

            }
        };
    }
    handleChange = name => event => {
        this.setState({[name]: event.target.value});
    }
    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };


    initBenefitUpdate = () => {
        let body = {
            jobId : '',
            name : '',

        }
        body.jobId = this.state.jobId;
        body.name = this.state.name;

        this.props.updateTheBenefit(this.props.element.id,body,this.state.jobId);
    }
    render() {

        return (
            <div style={styles.inlineDiv}>
                <Button style={styles.floatingPoint} onClick={this.handleClickOpen}><Undo/></Button>
                <Dialog
                    open={this.state.open}
                    transition={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Update an existing Benefit"}
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            name="name"
                            id="name"
                            label="Name"
                            style={styles.textField}
                            margin="normal"
                            defaultValue={this.state.name}
                            onChange={(event) => {
                                this.setState({name: event.target.value})
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.initBenefitUpdate.bind(this)} color="primary">
                            Update
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
        updateTheBenefit: (value,body,jobidentifier) => {
            dispatch(jobActions.updateBenefit(value,body,jobidentifier))
        },
    };
};
const mapStateToProps = (state) => ({
    getInfo : state.auth.loggedInUserInfo
})
const withConnect = connect(mapStateToProps,mapDispatchToProps)(SlideDialogEducationUpdate);

export default withConnect;