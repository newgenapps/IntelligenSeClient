import React from 'react';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Link } from "react-router-dom";

import './domainSearchResultNoLogin.styles.css';

// const someRandomEmails = [
//     'sundaram@newgenapps.com',
//     'random@newgenapps.com',
//     'someveryrandomemail@newgenapps.com',
//     'anupriya@newgenapps.com',
//     'neha@newgenapps.com',
//     'lata@newgenapps.com',
//     'vandana@newgenapps.com',
//     'nehat@newgenapps.com',
//     'tarun@newgenapps.com',
//     'anurag@newgenapps.com'
// ]

function DomainSearchResultNoLogin({result}) {
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
                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="First name initial">{`{f}`}</span>
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
                        <span data-toggle="tooltip" data-placement="top" title="" data-original-title="Last name">{`{last}`}</span>
                    </OverlayTrigger>
                    @newgenapps.com</strong></div>

                <div className="results-number">10 email addresses</div>
            </div>
            <div className="search-results">
                {
                    result.slice(0, 5).map( (email, idx) => (
                        <div className="result" key={idx}>
                            <div className="email-container">
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
                            </div>
                        </div>
                        )
                    )
                }
                <p class="grey search-see-all">{`${result.length - 5}`} more results for "newgenapps.com"</p>
            </div>
            <div className="domain-search-cta" >
                <p>
                    Sign up to uncover the email addresses, get the full results, search
                    filters, CSV downloads and more. Get <strong>25 free
                        searches/month</strong>.
                </p>
                <Link className="blue-link" to="/users/sign_up?utm_medium=domain_search">
                    Create a free account
                </Link>
            </div>
        </>
    )
}

export default DomainSearchResultNoLogin;
