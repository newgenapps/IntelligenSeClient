import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

import SignHeader from '../../components/signHeader/signHeader.component';

import './signIn.styles.css';

class SignInPage extends Component {
    render() {
        return (
            <div className="dashboard-body login">
                <Container fluid>
                    <SignHeader />
                </Container>
            </div>
        )
    }
}

export default SignInPage
