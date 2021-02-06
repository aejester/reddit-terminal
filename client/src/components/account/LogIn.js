import { Component } from "react";
import { FormGroup, FormInput, Form, Button, Container } from "shards-react";
import './Account.css';

class LogIn extends Component {

    constructor(props) {

        super(props);

        this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
        this.handlePasswordInputChange = this.handlePasswordInputChange.bind(this);

        this.state = {
            username: "",
            password: ""
        };

    }

    handleUsernameInputChange(username) {
        
        this.setState({...this.state, username: username});

    }

    handlePasswordInputChange(password) {

        this.setState({...this.state, password: password});

    }

    handleButtonClickedLogIn() {

        

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

                    <Button onClick={this.handleButtonClickedLogIn} className="login-button" outline theme="secondary">log in</Button>
                </Form>
            </Container>
        );

    }

}

export default LogIn;