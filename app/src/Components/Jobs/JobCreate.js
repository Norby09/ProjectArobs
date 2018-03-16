import React, {Component} from 'react';
import 'typeface-roboto';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import {browserHistory} from 'react-router';
import Select from 'material-ui/Select';
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Paper from 'material-ui/Paper';
const styles = {
    mainDiv : {

    },
    textFieldBlock : {
        display:'block',
        width:'50%',
        margin:'0 auto',
    },
    buttonCreate : {
        margin: '2% 0',
        marginLeft:'65%',
    },
    textAligned : {
        width: '20%',
        margin : '0 auto',
    },
    formControl : {
        width: '75%',
        margin: '0 auto',
    },
    textAligned1 : {
        width: '28%',
        margin : '0 auto',
    },

};


class JobCreate  extends Component {
    constructor(props) {
        super(props);
    }
    initCall = () => {
        let body = {
            name : this.props.name,
            description : this.props.description,
            companyId : this.props.companyId,
            jobBenefitInfoList : this.props.jobBenefitInfoList,
            jobRequirementInfoList : this.props.jobRequirement,
            jobSkillInfoList : this.props.skillList,
            availability : this.props.jobAvailability,
        }
        this.props.createJob(body);
    }

    render() {
        return (
            <div style={styles.mainDiv}>
                <Paper shadow20>
                    <Typography variant="display2" align="center" gutterBottom>
                        Create a new Job
                    </Typography>
                    <form noValidate autoComplete="off">
                        <TextField
                            label="Name of the job"
                            margin="normal"
                            style={styles.textFieldBlock}
                            onChange={this.props.handleChange('name')}
                        />
                        <TextField
                            label="Description"
                            margin="normal"
                            style={styles.textFieldBlock}
                            onChange={this.props.handleChange('description')}
                        />
                        <FormControl style={styles.textFieldBlock} >
                            <InputLabel htmlFor="age-native-simple">Availability</InputLabel>
                            <Select
                                native
                                value = {this.props.jobAvailability}
                                onChange={this.props.handleChange('jobAvailability')}
                            >
                                <option value="" />
                                <option value={true}>True</option>
                                <option value={false}>False</option>


                            </Select>
                        </FormControl>
                        <FormControl style={styles.textFieldBlock} >
                            <InputLabel htmlFor="age-native-simple">Company</InputLabel>
                            <Select
                                native
                                defaultValue = {this.props.companyId}
                                onChange={this.props.handleChange('selectedCompany')}
                            >
                                <option value="" />
                                {
                                    this.props.companyItems ?
                                        this.props.companyItems.map((n) => (

                                            <option value={n.id}>{n.name}</option>
                                        )) : <p>No Options</p>}
                            </Select>
                        </FormControl>

                        <br />
                        <br />
                        <div style={styles.textAligned}>Benefits</div>
                        <div style={styles.formControl}>
                            <TextField
                                label="Name of the benefit"
                                margin="normal"
                                onChange={(event) => this.props.handleStateForBenefits(event)}
                            />
                            <Button onClick={this.props.addToState.bind(this)}>Adauga la lista</Button>
                        </div>
                        <div>


                            { this.props.jobBenefits ?
                                this.props.jobBenefits.map((n) => (
                                    <div style={styles.formControl}>
                                        <TextField
                                            label="Name of the Benefit"
                                            margin="normal"
                                            onChange={(event) => this.props.handleStateForBenefits(event)}
                                        />
                                        <Button onClick={this.props.addToState.bind(this)}>Adauga la lista</Button>
                                    </div>
                                )) : null}
                        </div>
                        <div style={styles.textAligned1}>Requirements</div>
                        <div style={styles.formControl}>
                            <TextField
                                label="Name of the requirement"
                                margin="normal"
                                onChange={(event) => this.props.handleStateForRequirements(event)}
                            />
                            <Button onClick={this.props.addToStateForRequirement.bind(this)}>Adauga la lista</Button>
                        </div>
                        <div>

                            {
                                this.props.jobRequirement ?
                                    this.props.jobRequirement.map((n) => (
                                        <div style={styles.formControl}>
                                            <TextField
                                                label="Name of the requirement"
                                                margin="normal"
                                                onChange={(event) => this.props.handleStateForRequirements(event)}
                                            />
                                            <Button onClick={this.props.addToStateForRequirement.bind(this)}>Adauga la lista</Button>
                                        </div>
                                    )) : null
                            }
                        </div>


                        <Button variant="fab" onClick={this.initCall.bind(this)} color="primary" style={styles.buttonCreate}>
                            +
                        </Button>
                    </form>
                </Paper>
            </div>
        );
    };

}

export default withStyles(styles)(JobCreate);

