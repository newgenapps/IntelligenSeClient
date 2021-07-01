import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'

import SignHeader from '../../components/signHeader/signHeader.component';

import './signIn.styles.css';

class SignInPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: undefined,
            userPassword: undefined,
            inputEmpty: false
        }
    }

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    onLoginHandle = (event) => {
        const { userId, userPassword } = this.state;
        const validateEmail = this.validateEmail;
        if (userPassword && userPassword !== '' && validateEmail(userId)) {
            console.log('loggedIn')
        } else {
            this.setState({ inputEmpty: true })
            console.error("invalid userid or password")
        }
        event.preventDefault();
    }

    onInputChange = (e) => {
        const { value, name } = e.target;
        this.setState({ inputEmpty: false });
        switch (name) {
            case 'userId':
                this.setState({ userId: value })
                break;

            case 'userPassword':
                this.setState({ userPassword: value })
                break;

            default:
                break;
        }

    }

    render() {
        const { userId, userPassword, inputEmpty } = this.state,
            onLoginHandle = this.onLoginHandle,
            onInputChange = this.onInputChange;
        return (
            <div className="dashboard-body login">
                <Container fluid>
                    <SignHeader goToPage='up'/>
                    <div className="login-container">
                        <h1>Welcome back</h1>
                        <form className="simple_form new_user">
                            <div className="board-box">
                                <div className="form-group">
                                    <label htmlFor="email-field">Email address</label>
                                    <input autoFocus="autofocus" className="form-control input-lg" id="email-field" name="userId" placeholder="you@company.com" required="required" type="email" value={userId} onChange={onInputChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password-field">Password</label>
                                    <input className="form-control input-lg" id="password-field" name="userPassword" placeholder="password" required="required" type="password" value={userPassword} onChange={onInputChange} />
                                </div>
                                <button className="btn-lg btn-orange" data-loading="Signing you in..." type="submit" onClick={onLoginHandle}>Sign in</button>
                                {
                                    inputEmpty ?
                                        <Alert variant={'danger'}>
                                            Please check email id and password fields
                                        </Alert> : ''
                                }
                            </div>
                            <p className="grey">
                                <Link to="/users/password/new">Forgot your password?</Link>
                            </p>
                        </form>
                    </div>
                </Container>
            </div>
        )
    }
}

export default SignInPage
