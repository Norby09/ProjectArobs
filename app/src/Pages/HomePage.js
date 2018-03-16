import React , {Component} from 'react';
import { withStyles } from 'material-ui/styles';
import SimpleAppBar from '../Components/AppBars/AppBar';
import Grid from 'material-ui/Grid';
import Background from '../Images/jobsearch.jpg'
const styles = {
    elem : {
        minHeight:'100vh',
        flexGrow: '1',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
    },
    inlineDiv : {
        display:'inline-block',
    }
};



class HomePage extends Component {
    constructor(props)
    {
        super(props);
        this.data = [];


    }

    render() {
        const { classes} = this.props;
        return (

            <div className={classes.elem}>
                <Grid container spacing={40}>
                    <Grid item lg={12}>
                        <SimpleAppBar/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default withStyles(styles)(HomePage);