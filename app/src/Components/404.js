import React from 'react';
import 'typeface-roboto';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


const styles = {
    firstDiv : {
        width: '60%',
        margin: '0 auto',
        marginTop : '5vh',
    }
}
const NotPossible = (props) => {
    const { classes } = props;
    return (
        <div className={classes.firstDiv}>
            <img src={require("../Images/not-found.jpg")} />
        </div>
    );
};

NotPossible.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NotPossible);