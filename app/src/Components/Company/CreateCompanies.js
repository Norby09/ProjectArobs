import React, {Component} from 'react';
import 'typeface-roboto';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {browserHistory} from 'react-router';
import Paper from 'material-ui/Paper';
import * as companyActions from '../../actions/companyActions';
import { connect } from 'react-redux';

const styles = {
    LayoutOfUsers : {
        margin:'0 auto'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        display:'block',
        width: '14%',
        margin:'0 auto',
    },
    button: {
        marginLeft:'61%',
    },
};

let id = window.localStorage.getItem("id");
class CreateCompanies extends Component {
    state = {
        name: '',
        userId : window.localStorage.getItem("id"),
    };
    onInputChange = (event) => {
        const propName = event.target.name;
        const propValue = event.target.value;
        const oldState = {...this.state};

        oldState[propName] = propValue;

        this.setState({...oldState});
    };
    onInitialiseCompanyCreate = (event) => {
        this.props.initCompanyCreate(this.state);
    }
    render() {
        return (
            <div style={styles.LayoutOfUsers}>
                <Paper shadow20>
                    <Typography variant="display2" align='center' gutterBottom>
                        Create a new Company
                    </Typography>
                    <form onSubmit={this.onInitialiseCompanyCreate} noValidate autoComplete="off">
                        {/*mai trebuie adaugate proprietati la textfield pt functionare*/}
                        <TextField
                            label="Name"
                            style={styles.textField}
                            name="name"
                            type="text"
                            value={this.state.name}
                            margin="normal"
                            inputStyle={{textAlign: 'center'}}
                            onChange={(event) => {
                                this.onInputChange(event);
                            }}
                        />
                        <Button variant="fab" onClick={this.onInitialiseCompanyCreate} color="primary"
                                style={styles.button}>
                            +
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    }
};


CreateCompanies.propTypes = {
    classes: PropTypes.object.isRequired
};
const mapDispatchToProps = (dispatch) => {
    return {
        initCompanyCreate: (value) => {
            dispatch(companyActions.createCompany(value))
        },
    };
};

const withConnect = connect(null,mapDispatchToProps)(CreateCompanies);

export default withConnect

