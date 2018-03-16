import React, {Component} from 'react';
import Button from 'material-ui/Button';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import Alert from 'material-ui-icons/AddAlert';
import TextField from 'material-ui/TextField';
import * as companyActions from "../../actions/companyActions";
import { connect } from 'react-redux';

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
let body = {
    name: '',
    userId : localStorage.getItem('id'),
}

class SlideDialogCompanyUpdate extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            name:'',
            userId:'',
            object: {
                name : this.props.element.name,
                userId : localStorage.getItem('id'),
            }
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

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
                        {"Update an existing company"}
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            label="Name of the company"
                            style={styles.textField}
                            margin="normal"
                            defaultValue={this.state.object.name}
                            onChange={(event) => {
                                this.setState({object: {
                                    ...this.state.object,
                                    name: event.target.value,
                                }});
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.updateTheCompany.bind(this,this.props.id,this.state.object)} color="primary">
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
        updateTheCompany: (value,body) => {
            dispatch(companyActions.updateCompany(value,body));
        },
    }
};
const withConnect = connect(null, mapDispatchToProps)(SlideDialogCompanyUpdate);
export default withConnect;