import React from 'react';

import AppBar from 'material-ui/AppBar';
import 'typeface-roboto';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';

const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
        textAlign: 'center',
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    colorWhite: {
        color:'white',
    },
    padding : {
        padding : '0 !important'
    }
};

const LowerAppBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.padding}>
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Project Arobs @ Copyright By Norbert Layis
                    </Typography>

                </Toolbar>
            </AppBar>
        </div>
    );
};
LowerAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(LowerAppBar);