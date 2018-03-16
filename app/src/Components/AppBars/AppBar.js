import React from 'react';

import AppBar from 'material-ui/AppBar';
import 'typeface-roboto';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import DonutLarge from 'material-ui-icons/DonutLarge';
import { Link } from 'react-router-dom';
const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    colorWhite: {
        color:'white',
    }
};

const SimpleAppBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Project Arobs
                    </Typography>
                    <Link to="/Login"><Button color="inherit"><DonutLarge className={classes.colorWhite}/><span className={classes.colorWhite}>Login</span></Button></Link>
                    <Link to="/Register"><Button color="inherit"><DonutLarge className={classes.colorWhite}/><span className={classes.colorWhite}>Register</span></Button></Link>
                </Toolbar>
            </AppBar>
        </div>
);
};
SimpleAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SimpleAppBar);