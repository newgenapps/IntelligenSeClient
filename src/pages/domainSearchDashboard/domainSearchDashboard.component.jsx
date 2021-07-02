/**
 * TO DO:
 * - result ui
 * - result filtering
 */

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Alert from 'react-bootstrap/Alert';

import './domainSearchDashboard.styles.css';

import DashboardHeader from '../../components/DashboardHeader/dashboardHeader.component';

import { CheckIsValidDomain } from '../../assets/utils/inputCheck.utils';

export default class DomainSearchDashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchInput: '',
            result: [],
            searchInputEmpty: false,
            filterType: 0
        }
    }

    FilterArray = [
        "all",
        "personal",
        "generic"
    ]

    emailArray = [
        'sundaram@newgenapps.com',
        'random@newgenapps.com',
        'someveryrandomemail@newgenapps.com',
        'anupriya@newgenapps.com',
        'neha@newgenapps.com',
        'lata@newgenapps.com',
        'vandana@newgenapps.com',
        'nehat@newgenapps.com',
        'tarun@newgenapps.com',
        'anurag@newgenapps.com'
    ];

    handleSearchInputChange = (e) => {
        this.setState({ searchInputEmpty: false });
        this.setState({ searchInput: e.target.value })
    }

    onSearchHandle = (event) => {
        const { searchInput } = this.state;
        if (CheckIsValidDomain(searchInput)) {
            this.setState({ result: this.emailArray });
        } else {
            this.setState({ searchInputEmpty: true });
        }
        event.preventDefault();
    }

    handleFilterType = (e) => {
        this.setState({filterType: parseInt(e.target.value)})
    }
    render() {
        const {filterType, searchInput, searchInputEmpty, result} = this.state;
        const FilterArray = this.FilterArray;
        const handleSearchInputChange = this.handleSearchInputChange;
        const onSearchHandle = this.onSearchHandle;
        const handleFilterType = this.handleFilterType;

        return (
            <div className="dashboard domainsearch">
                <DashboardHeader activePage={'Search'}/>
                <div className="dashboard-body">
                    <Container>
                        <div className="board-box">
                            <h2>
                                Domain Search
                            </h2>
                            <form className="dashboard-search">
                                <div className="input-group main-input-group">
                                    <input autoComplete="off" className="form-control" id="domain-field" placeholder="company.com" required="required" tabIndex="20" type="text" value={searchInput} onChange={handleSearchInputChange} />
                                    <span className="input-group-btn">
                                        <button className="btn-white" data-loading="none" id="search-btn" tabIndex="21" onClick={onSearchHandle}>
                                            <div className="far fa-search"></div>
                                        </button>
                                    </span>
                                </div>
                                {
                                    searchInputEmpty ?
                                        <Alert variant={'danger'}>
                                            Please enter a valid domain
                                        </Alert> : ''
                                }
                                <div className="toolbar">
                                    <div id="type-filter">
                                        <div className="radios-container">
                                            {
                                                FilterArray.map( (filter, idx) => (
                                                    <label className="radio-container" htmlFor={`${filter}-filter-field`} key={idx}>
                                                        <div className={`radio-icon fas ${ idx === filterType ? 'fa-check-circle' : 'fa-circle' }`}></div>
                                                        <div className="filter-label">{filter}</div>
                                                        <input defaultChecked={ idx === filterType} id={`${filter}-filter-field`} name="type" type="radio" value={idx} onClick={handleFilterType}/>
                                                    </label>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="download-link d-none">
                                        <Link to="" className="blue-link" >
                                            Export in CSV
                                        </Link>
                                    </div>
                                    <div className="results-count d-none"></div>
                                </div>
                                <span><div className="domain-search-hint light-grey" id="domain-search-history">
                                    Enter a domain name to find email addresses.
                                </div>
                                </span>
                            </form>
                        </div> 
                    </Container>
                </div>
            </div>
        )
    }
}
