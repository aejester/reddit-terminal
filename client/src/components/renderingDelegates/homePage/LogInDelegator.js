import { Component } from "react";
import LogIn from "../../account/LogIn";
import SignUp from "../../account/SignUp";
import PropTypes from 'prop-types';


class LogInDelegator extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };

    }

    render() {

        if (this.props.showLogIn) {
            return (<LogIn/>);
        } else {
            return (<SignUp/>);
        }

        
    }

}

LogInDelegator.propTypes = {
    showLogIn: PropTypes.bool
}

export default LogInDelegator;