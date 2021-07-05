import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import SignHeader from '../../components/signHeader/signHeader.component';

import {login} from './../../redux/User/user.actions';
import { validateEmail } from '../../assets/utils/inputCheck.utils';
import config from '../../config/config';

import './signIn.styles.css';

class SignInPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userId: '',
            userPassword: '',
            inputEmpty: false,
            loaderVisible: false,
            loginError: false
        }
    }

    onLoginHandle = (event) => {
        const { userId, userPassword } = this.state;
        if (userPassword && userPassword !== '' && validateEmail(userId)) {
            fetch(`${config.prod_server_api}/register-user/login`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify({
                    "details": {
                        "email": `${userId}`,
                        "password": `${userPassword}`
                    }
                })
            }).then(response => response.json())
            .then( data =>{
              console.log(data)
              if( data.status === 200 ){
                
                
                this.setState({loaderVisible: false})
    
                localStorage.setItem('uijt', data.token);
    
                this.props.login(data.user);
              }else{
                
              }
              this.setState({ loaderVisible: false }) 
              
            })
            .catch( err => { 
                
                console.log("Something Went wrong")
                this.setState({ loaderVisible: false })  
            })
        } else {
            this.setState({ inputEmpty: true })
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
const mapDispatchToProps = dispatch => {
    return {
      login: user => dispatch(login(user))
    }
  }

export default connect(null, mapDispatchToProps)(SignInPage)
