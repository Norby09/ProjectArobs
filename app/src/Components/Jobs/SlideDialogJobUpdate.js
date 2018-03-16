import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import Alert from 'material-ui-icons/AddAlert';
import TextField from 'material-ui/TextField';
import * as jobActions from '../../actions/jobActions';
import { connect } from 'react-redux';
import Select from 'material-ui/Select';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
function Transition(props) {
    return <Slide direction="up" {...props} />;
}
const styles = {
    inlineDiv : {
        display:'inline-block',
    },
    textField : {
        display:'block',
        margin:'auto',
    }
};

class SlideDialogJobUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name:'',
            jobId:'',
            description:'',
            isAvailable:'',
            object : {
                name : this.props.element.name,
                description : this.props.element.description,
                isAvailable : this.props.element.isAvailable,

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


    initJobUpdate = () => {
        let body = {
            name: '',
            id: '',
            description: '',
            isAvailable: '',
            companyId: '',

        }
        body.name = this.state.name;
        body.id = this.props.jobId;
        body.description = this.state.description;
        body.isAvailable = this.state.isAvailable;
        console.log(this.props);
        body.companyId = this.props.companyId;
        this.props.updateTheJob(this.props.jobId,body);
    }
    render() {

        return (
            <div style={styles.inlineDiv}>
                <Button onClick={this.handleClickOpen}><Alert/></Button>
                <Dialog
                    open={this.state.open}
                    transition={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title">
                        {"Update an existing job"}
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            id="name"
                            label="Name of the Job"
                            style={styles.textField}
                            margin="normal"
                            defaultValue={this.state.object.name}
                            onChange={(event) => {
                                this.setState({name: event.target.value})
                            }}
                        />
                        <TextField
                            label="Description of the job"
                            style={styles.textField}
                            margin="normal"
                            defaultValue={this.state.object.description}
                            onChange={(event) => {
                                this.setState({description: event.target.value})
                            }}
                        />
                        {/*<TextField*/}
                            {/*label="Availability of job"*/}
                            {/*style={styles.textField}*/}
                            {/*margin="normal"*/}
                            {/*defaultValue={this.state.object.isAvailable}*/}
                            {/*onChange={(event) => {*/}
                                {/*this.setState({isAvailable: event.target.value})*/}
                            {/*}}*/}
                        {/*/>*/}
                        <FormControl style={styles.textFieldBlock} >
                            <InputLabel htmlFor="age-native-simple">Availability</InputLabel>
                            <Select
                                native
                                onChange={(event) => {
                                    this.setState({isAvailable: event.target.value})
                                }}
                            >
                                <option value="" />
                                <option value={true}>True</option>
                                <option value={false}>False</option>


                            </Select>
                        </FormControl>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.initJobUpdate.bind(this)} color="primary">
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
        updateTheJob: (value,body) => {
            dispatch(jobActions.updateJob(value,body))
        },
    };
};
const withConnect = connect(null,mapDispatchToProps)(SlideDialogJobUpdate);

export default withConnect;