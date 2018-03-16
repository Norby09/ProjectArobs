import React , {Component} from 'react';
import SimpleAppBar from "../Components/AppBars/AppBar";
import RegisterBar from "../Components/LoginRegister/RegisterBar";
import PositionedSnackBar from "../Components/LoginRegister/PositionedSnackBar"
import Background from "../Images/jobsearch.jpg";
import { connect } from 'react-redux';
import RegisterSuccessfull from '../Components/LoginRegister/RegisterSuccessfull';

const styles = {
    elem : {
        minHeight:'123vh',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
    },
}
class Register extends Component {
    render() {
        return (
            <div style={styles.elem}>
                <SimpleAppBar/>
                <RegisterBar/>
                {
                    this.props.userRegister!==null?
                        <RegisterSuccessfull/> : null
                }
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    userRegister : state.users.userRegister
})
const withConnect = connect(mapStateToProps, null)(Register);

export default withConnect;