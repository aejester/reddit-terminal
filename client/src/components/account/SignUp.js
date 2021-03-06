import { Component } from "react";
import { FormGroup, FormInput, Form, Button, Container } from "shards-react";
import './Account.css';

class SignUp extends Component {

    constructor(props) {

        super(props);

        this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);
        this.handleConfirmPasswordInputChange = this.handleConfirmPasswordInputChange(this);
        this.handleButtonClickSignUp = this.handleButtonClickSignUp(this);

        this.state = {
            username: "",
            password: "",
            confirmPasword: ""
        }

    }

    handleUsernameInputChange(username) {
        
        this.setState({...this.state, username: username});

    }

    handlePasswordInputChange(password) {

        this.setState({...this.state, password: password});

    }

    handleConfirmPasswordInputChange(password) {

        this.setState({...this.state, confirmPasword: password});

    }

    handleButtonClickSignUp() {

        

    }

    render() {

        return (
            <Container className="login-container">
            <h1 className="login-header display-6">log in</h1>
            <Form>
                <FormGroup>
                    <label htmlFor="#username">username</label>
                    <FormInput onChange={this.handleUsernameInputChange} id="#username" placeholder="username"/>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="#password">password</label>
                    <FormInput onChange={this.handlePasswordInputChange} type="password" id="#password" placeholder="password"/>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="#conf-password">confirm password</label>
                    <FormInput onChange={this.handleConfirmPasswordInputChange} type="password" id="#conf-password" placeholder="confirm password"/>
                </FormGroup>

                <Button onClick={this.handleButtonClickSignUp} className="login-button" outline theme="secondary">sign up</Button>
            </Form>
        </Container>
        );

    }

}

export default SignUp;