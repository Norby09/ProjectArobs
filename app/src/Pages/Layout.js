import React , {Component} from 'react';
import LoginBar from "../Components/LoginRegister/LoginBar";
import SimpleAppBar from "../Components/AppBars/AppBar";
import Background from "../Images/jobsearch.jpg";
import PositionedSnackBar from "../Components/LoginRegister/PositionedSnackBar";
import { connect } from 'react-redux';
import LowerAppBar from '../Components/AppBars/LowerAppBar';
const styles = {
    elem : {
        minHeight:'100vh',
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
    },
    alert : {
        padding: '20',
        height: '40',
        backgroundColor: '#f44336',
        color: 'white',
        textAlign: 'center',
    },
    closebtn : {
        marginLeft: '15px',
        color: 'white',
        fontWeight: 'bold',
        float: 'right',
        fontSize: '22px',
        lineHeight: '20px',
        cursor: 'pointer',
        transition: '0.3s',
    }
}
class Layout extends Component {
    constructor(props){
        super(props);
        this.state = {
            userRole : localStorage.getItem('userRoleId'),
            setToTrue : null,
            notLoggedIn : null,
            open : false,
        }
    }
    setToTrue = () => {
        this.setState({setToTrue: true});
    }

    failedToLogIn = () => {
        this.setState({notLoggedIn : true})
    }

    render() {
        const {classes} = this.props;
        return (
            <div className="majorDiv" style={styles.elem}>
                <LoginBar theUserRoleId={this.state.userRole} setToTrue={this.setToTrue} failToLog={this.failedToLogIn}/>
                {/*{this.state.setToTrue ? <div className="alert-delete" style={styles.alert}><Button style={styles.closebtn}>&times;</Button>The password or username are incorrect</div> : null }*/}
                {this.props.isLoggedIn ? null : <PositionedSnackBar/>}
                <SimpleAppBar/>
            </div>
        );
    }

}
const mapStateToProps = (state) => ({
    isLoggedIn : state.auth.isLoggedIn,
})
const withConnect = connect(mapStateToProps, null)(Layout);
export default withConnect;