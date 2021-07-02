import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import './domainSearchResultNoLogin.styles.css';


function DomainSearchResultNoLogin({result, isLoggedIn}) {
    return (
        <>
            <div className="domainNoLogin result-information">
                <div className="search-pattern"><span className="hidden-xs">Most common pattern: </span><strong>
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-firstname`}>
                                <strong>first name</strong>
                            </Tooltip>
                        }
                    >
                        <span>{`{f}`}</span>
                    </OverlayTrigger>
                    .
                    <OverlayTrigger
                        placement="top"
                        overlay={
                            <Tooltip id={`tooltip-lastname`}>
                                <strong>last name</strong>
                            </Tooltip>
                        }
                    >
                        <span>{`{l}`}</span>
                    </OverlayTrigger>
                    @newgenapps.com</strong></div>

                <div className="results-number">10 email addresses</div>
            </div>
            <div className="search-results">
                {
                    result.slice(0, isLoggedIn ? result.length : 5).map( (email, idx) => (
                        <div className="result" key={idx}>
                            <div className="email-container">
                                {
                                    isLoggedIn ? 
                                    <div className="email">
                                        {
                                            email
                                        }
                                    </div>
                                    :
                                    <div className="email">
                                    {`${email[0]}`}
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={
                                            <Tooltip id={`tooltip-${idx}`}>
                                                Please log in to see the entire email addresses.
                                            </Tooltip>
                                        }
                                    >
                                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="Please log in to see the entire email addresses.">{`${email[1]+email[2]}`}</span>
                                    </OverlayTrigger>
                                    
                                    {`${email.slice(3, )}`}
                                </div>
                                }
                            </div>
                        </div>
                        )
                    )
                }
                <p className={`grey search-see-all ${isLoggedIn ? 'd-none' : ''}`}>{`${result.length - 5}`} more results for "newgenapps.com"</p>
            </div>
            <div className={`domain-search-cta ${isLoggedIn ? 'd-none' : ''}`} >
                <p>
                    Sign up to uncover the email addresses, get the full results, search
                    filters, CSV downloads and more. Get <strong>25 free
                        searches/month</strong>.
                </p>
                <Link className="blue-link" to="/users/sign-up">
                    Create a free account
                </Link>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
      isLoggedIn: state.user.isLoggedIn
    }
}

export default connect(mapStateToProps, null)(DomainSearchResultNoLogin);
