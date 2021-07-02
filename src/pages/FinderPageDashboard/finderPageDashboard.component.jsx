/**
 * TO DO:
 * - result ui
 * - result filtering
 */

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

import './finderPageDashboard.styles.css';

import DashboardHeader from '../../components/DashboardHeader/dashboardHeader.component';
import EmailVerifyResultNoLogin from '../../components/EmailVerifyResultNoLogin/EmailVerifyResultNoLogin.component';

import { validateEmail } from '../../assets/utils/inputCheck.utils';

export default class FinderPageDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchName: '',
            searchDomain: '',
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
        const {name, value} = e.target;
        this.setState({ searchInputEmpty: false });
        this.setState({ [name]: value })
    }
    render() {
        const { result, searchInputEmpty, searchName, searchDomain } = this.state;
        const showSearchResult = result ? true : false;
        const onInputChange = this.onInputChange;

        return (
            <div className="dashboard domainsearch">
                <DashboardHeader activePage={"Finder"}/>
                <div className="dashboard-body">
                    <Container>
                        <div className="board-box">
                            <h2>
                                Email Finder
                            </h2>
                            <form className="dashboard-search">
                                <div className="input-group main-input-group">
                                    <input autoComplete="off" autoFocus="autofocus" className="form-control" id="full-name-field" placeholder="John Doe" name="searchName" required="required" type="text" value={searchName} onChange={onInputChange}/>
                                    <div className="at-form">@</div>
                                    <input autoComplete="off" className="form-control" id="domain-field" placeholder="company.com" required="required" type="text" name="searchDomain" value={searchDomain} onChange={onInputChange}/>
                                    <span className="input-group-btn">
                                        <button className="btn-white" data-loading="none" id="finder-btn" type="submit">
                                            <div className="far fa-search"></div>
                                        </button>
                                    </span>
                                </div>
                                {
                                    searchInputEmpty ?
                                        <Alert variant={'danger'}>
                                            Please enter a valid inputs
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
                                            <p>Enter a full name and the domain name of the email address (for example "newgenapps.com").</p>
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
