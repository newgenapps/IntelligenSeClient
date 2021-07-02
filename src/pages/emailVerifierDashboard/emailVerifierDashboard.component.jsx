/**
 * TO DO:
 * - result ui
 * - result filtering
 */

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import './emailVerifierDashboard.styles.css';

import DashboardHeader from '../../components/DashboardHeader/dashboardHeader.component';
import EmailVerifyResultNoLogin from '../../components/EmailVerifyResultNoLogin/EmailVerifyResultNoLogin.component';

import { validateEmail } from '../../assets/utils/inputCheck.utils';

export default class EmailVerifierDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchInput: '',
            searchInputEmpty: false,
            result: undefined
        }
    }

    res = {
        Domain: 'newgenapps.com',
        Format: 'Valid',
        ServerStatus: 'Valid',
        Type: 'Professional',
        EmailStatus: 'accept all'
    }

    onSearchHandle = (event) => {
        const { searchInput } = this.state;
        if (validateEmail(searchInput)) {
            this.setState({ result: this.res });
        } else {
            this.setState({ searchInputEmpty: true });
        }
        event.preventDefault();
    }

    onInputChange = (e) => {
        this.setState({ searchInputEmpty: false });
        this.setState({ searchInput: e.target.value })
    }
    render() {
        const { searchInput, result, searchInputEmpty } = this.state;
        const showSearchResult = result ? true : false;

        return (
            <div className="dashboard domainsearch">
                <DashboardHeader activePage={"Verifier"}/>
                <div className="dashboard-body">
                    <Container>
                        <div className="board-box">
                            <h2>
                                Email Verifier
                            </h2>
                            <form className="dashboard-search">
                                <div className="input-group main-input-group">
                                    <input autoComplete="off" className="form-control" id="domain-field" placeholder="example@company.com" required="required" tabIndex="20" type="text" value={searchInput} onChange={this.onInputChange} />
                                    <span className="input-group-btn">
                                        <button className="btn-white" data-loading="none" id="search-btn" tabIndex="21" onClick={this.onSearchHandle}>
                                            <div className="far fa-search"></div>
                                        </button>
                                    </span>
                                </div>
                                {
                                    searchInputEmpty ?
                                        <Alert variant={'danger'}>
                                            Please enter a valid email
                                        </Alert> : ''
                                }
                                <div className="search-results-container">
                                    {
                                        showSearchResult ? (
                                            <EmailVerifyResultNoLogin result={result} loggedin/>
                                        ) : ''
                                    }

                                </div>
                                <div className="light-grey before-search-message">
                                    {
                                        !showSearchResult ? (
                                            <p>Enter a email to launch the verify.</p>
                                        ) : ''
                                    }
                                </div>
                            </form>
                        </div> 
                    </Container>
                </div>
            </div>
        )
    }
}
