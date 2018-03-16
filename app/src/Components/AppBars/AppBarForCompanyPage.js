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
import {withRouter} from "react-router-dom";
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
        color: 'white',
    }
};

const AppBarForCompanyPage = (props) => {
    const { classes } = props;
    const logOut = () => {
        localStorage.removeItem('id');
        localStorage.removeItem('userRoleId');
        props.history.push('/');
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Project Arobs
                    </Typography>
                    <Link to="/JobsPage"><Button color="inherit"><DonutLarge className={classes.colorWhite}/><span className={classes.colorWhite}>JobsPage</span></Button></Link>
                    <Button color="inherit" onClick={logOut.bind(this)}><DonutLarge/>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};
AppBarForCompanyPage.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(withRouter(AppBarForCompanyPage));