import React , {Component} from 'react';
import AppBarForUsers from '../Components/AppBars/AppBarForUsers'

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import JobListForUsers from '../Components/Jobs/JobListForUsers'
import LowerAppBar from '../Components/AppBars/LowerAppBar';
const styles = {
    elem : {
        minHeight:'100vh',
        flexGrow: '1',
        backgroundColor: 'white',
    }
}
class DefaultLayout extends Component {
    constructor(props)
    {
        super(props);

    }

    render() {
        const { classes} = this.props;
        return (

            <div className={classes.elem}>
                <Grid container spacing={0}>
                    <Grid item lg={12}>
                     <AppBarForUsers/>
                        <JobListForUsers />
                        <LowerAppBar/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(DefaultLayout);