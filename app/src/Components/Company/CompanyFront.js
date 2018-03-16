import React from 'react';
import 'typeface-roboto';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

const styles = {
    image : {
        width:'30%',
        marginLeft:'35%',
    }
}
const CompanyFront = (props) => {
    const { classes } = props;
    let nameOfCompany = props.companyName;

    return (
        <div className={classes.firstDiv}>
            <div>
                <img  className={classes.image} src={require("../../Images/company_image.png")} />
            </div>
            <Typography variant="title" align="center" color="inherit">
                {nameOfCompany}
            </Typography>
        </div>

    );
};

CompanyFront.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CompanyFront);