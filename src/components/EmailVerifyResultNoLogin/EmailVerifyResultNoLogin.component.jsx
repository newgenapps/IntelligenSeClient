import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './EmailVerifyResultNoLogin.styles.css';

function EmailVerifyResultNoLogin({result}) {
    const {EmailStatus, Format, ServerStatus, Type, Domain} = result;
    return (
        <>
            <div className="verifier-result">
                {
                    EmailStatus === 'accept all' ? (
                        <>
                        <div className="verifier-result-icon"><i className="fas fa-exclamation-triangle dark-orange"></i></div>
                        <div className="verifier-result-status">Accept all</div>
                        <div className="verifier-result-subtitle">The domain name {Domain} accepts all the email addresses.</div>
                        </>
                    ) : ('')
                }
                
            </div>
            <div className="verify-result-details">
                <Row>
                    <Col md={6}>
                        <div class="verifier-detail">
                            Format
                            <div class="pull-right" id="email-format"><div class="green">{Format}</div></div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="verifier-detail">
                            Type
                            <div class="pull-right" id="email-type"><div class="green">{Type}</div></div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <div class="verifier-detail">
                            Server Status
                            <div class="pull-right" id="email-format"><div class="green">{ServerStatus}</div></div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div class="verifier-detail">
                            Email status 
                            <div class="pull-right" id="email-type"><div class="red">{EmailStatus}</div></div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default EmailVerifyResultNoLogin;
