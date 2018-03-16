import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import Build from 'material-ui-icons/Build';
import * as userActions from '../../actions/userActions';
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

class SlideDialogWorkUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            institution:'',
            description:'',
            startDate:'',
            endDate:'',
            object : {
                institution:this.props.element.institution,
                description:this.props.element.description,
                startDate:this.props.element.startDate,
                endDate:this.props.element.endDate,

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


    initWorkUpdate = () => {
        let body = {
            userId: '',
            description: '',
            institution: '',
            startDate: '',
            endDate: '',

        }
        body.userId = this.props.getInfo.id;
        body.institution = this.state.institution;
        body.description = this.state.description;
        body.startDate = this.state.startDate;
        body.endDate = this.state.endDate;
        this.props.updateTheWork(this.props.element.id,body);
    }
    render() {

        return (
            <div style={styles.inlineDiv}>
                <Button style={styles.floatingPoint} onClick={this.handleClickOpen}><Build/></Button>
                <Dialog
                    open={this.state.open}
                    transition={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Update"}
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            id="institution"
                            label="Institution"
                            style={styles.textField}
                            margin="normal"
                            defaultValue={this.state.object.institution}
                            onChange={(event) => {
                                this.setState({institution: event.target.value})
                            }}
                        />
                        <TextField
                            label="Description"
                            style={styles.textField}
                            margin="normal"
                            defaultValue={this.state.object.description}
                            onChange={(event) => {
                                this.setState({description: event.target.value})
                            }}
                        />
                        <TextField
                            id="date1"
                            label="Start Date"
                            type="date"
                            style={styles.textField}
                            defaultValue={this.state.object.startDate}
                            onChange={(event) => {
                                this.setState({startDate:event.target.value})
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="date2"
                            label="End Date"
                            style={styles.textField}
                            type="date"
                            defaultValue={this.state.object.endDate}
                            onChange={(event) => {
                                this.setState({endDate:event.target.value})
                            }}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.initWorkUpdate.bind(this)} color="primary">
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
        updateTheWork: (value,body) => {
            dispatch(userActions.updateWork(value,body))
        },

    };
};
const mapStateToProps = (state) => ({
    getInfo : state.auth.loggedInUserInfo
})
const withConnect = connect(mapStateToProps,mapDispatchToProps)(SlideDialogWorkUpdate);

export default withConnect;