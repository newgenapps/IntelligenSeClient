/**
 * -------*-*-*-*- Homepage -*-*-*-*--------
 * TO DO's
 * - On search click button should show loader
 * - Result should only come after loader stops
 * - Decide on wether to pass result from here or from redux
 * - Implement login and no login logic in result hiding
 */

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert'

import './homePage.styles.css';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import DomainSearchResultNoLogin from '../../components/DomainSearchResultNoLogin/domainSearchResultNoLogin.component';

import Google from '../../assets/image/c_google.webp';
import Microsoft from '../../assets/image/c_micro.webp';
import Adobe from '../../assets/image/c_adobe.webp';
import invison from '../../assets/image/c_invision.webp';
import ibm from '../../assets/image/c_ibm.webp';
import Manpower from '../../assets/image/c_manpower.webp';

import { CheckIsValidDomain } from '../../assets/utils/inputCheck.utils';

export default class HomePage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            searchInput: '',
            result: [],
            searchInputEmpty: false
        }
    }

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

    onSearchHandle = (event) => {
        const {searchInput} = this.state;
        if(CheckIsValidDomain(searchInput)){
            this.setState({result: this.emailArray});
        }else{
            this.setState({searchInputEmpty: true});
        }
        event.preventDefault();
    }

    onInputChange = (e) => {
        this.setState({searchInputEmpty: false});
        this.setState({ searchInput: e.target.value })
    }
    render() {
        const { searchInput, result, searchInputEmpty } = this.state;
        const showSearchResult = result.length > 0;
        return (
            <>
                <Header />
                <div className="homepage">
                    <div className="front-header-bg">
                        <div className="front-header">
                            <div className="front-breadcrumb hidden-xs"></div>
                            <Container>
                                <div className="homepage-header">
                                    <h1>
                                        Connect with anyone.
                                        <div className="subtitle">
                                            IntelligenSe lets you find professional email addresses in seconds and connect
                                            with the people that matter for your business.
                                        </div>
                                    </h1>
                                </div>
                                <div className="search-form-container domain">
                                    <form>
                                        <div className="input-group">
                                            <input autoComplete="off" autoFocus="autofocus" className={`form-control ${searchInputEmpty ? 'is-invalid': ''}`} placeholder="company.com" required="required" type="text" onChange={this.onInputChange} value={searchInput} />
                                            <span className="input-group-btn">
                                                <button className="btn-orange" onClick={this.onSearchHandle}>
                                                    <span className="d-none d-sm-block">Find email addresses</span>
                                                    <span className="d-block d-sm-none">Search</span>
                                                </button>
                                            </span>
                                        </div>
                                        {
                                            searchInputEmpty ? 
                                                <Alert variant={'danger'}>
                                                    Please enter a valid domain
                                                </Alert> : ''
                                        }
                                        <div className="search-results-container">
                                            {
                                                showSearchResult ? (
                                                    <DomainSearchResultNoLogin result={result} />
                                                ) : ''
                                            }

                                        </div>
                                        <div className="light-grey before-search-message">
                                            {
                                                !showSearchResult ? (
                                                    <p>Enter a domain name to launch the search. For example, <Link to="#" className="try-domain">newgenapps.com</Link>.</p>
                                                ) : ''
                                            }
                                        </div>
                                    </form>
                                </div>
                            </Container>
                        </div>
                    </div>
                    <section className="customers">
                        <Container>
                            <div className="customers-intro">
                                IntelligenSe is used by
                                <strong> 2,000,000+ professionals </strong>
                                and chosen by leading companies.
                            </div>
                            <Row>
                                <Col md={2} sm={4} xs={6}>
                                    <img alt="Google" width="78" height="26" src={Google} />
                                </Col>
                                <Col md={2} sm={4} xs={6}>
                                    <img alt="IBM" width="65" height="26" src={ibm}></img>
                                </Col>

                                <Col md={2} sm={4} xs={6}>
                                    <img alt="Manpower" width="133" height="26" src={Manpower} />
                                </Col>

                                <Col md={2} sm={4} xs={6}>
                                    <img alt="Microsoft" width="122" height="26" src={Microsoft} />
                                </Col>
                                <Col md={2} sm={4} xs={6}>
                                    <img alt="Adobe" width="107" height="26" src={Adobe} />
                                </Col>
                                <Col md={2} sm={4} xs={6}>
                                    <img alt="Invision" width="77" height="26" src={invison} />
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="homepage-description">
                        <Container>
                            <Row>
                                <Col md={2}>
                                </Col>
                                <Col md={8} className="center">
                                    <div className="text-content">
                                        <div className="text-subtitle">Domain Search</div>
                                        <h3>Get the email addresses behind any website.</h3>
                                        <p>
                                            The Domain Search lists all the people working in a company with their
                                            name and email address found on the web. With 100+ million email addresses
                                            indexed, effective search filters and scoring, it's IntelligenSe's most powerful
                                            email-finding tool.
                                        </p>
                                        <Link className="blue-cta" to="/users/sign_up?utm_medium=domain_search">Receive 25 free searches/month</Link>
                                    </div>
                                </Col>
                                <Col md={2}>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="other-features">
                        <Container>
                            <Row>
                                <Col md={5}>
                                    <div className="text-content">
                                        <div className="text-subtitle">Email Finder</div>
                                        <h3>Find the email address of any professional.</h3>
                                        <p>
                                            Find the email addresses of people you want to contact one by one or
                                            in bulk to enrich your database. The Email Finder uses a large number of
                                            signals to find the proven or most probable email address of anyone in
                                            a fraction of second.
                                        </p>
                                        <Link className="blue-cta" to="/email-finder">Test the Email Finder</Link>
                                    </div>
                                </Col>
                                <Col md={1}>
                                </Col>
                                <Col md={5}>
                                    <div className="text-content">
                                        <div className="text-subtitle">Email Verifier</div>
                                        <h3>Verify the deliverability of any email address.</h3>
                                        <p>
                                            The Email Verifier does a complete check of the email address to let
                                            you send your emails with a complete confidence. As it uses our
                                            unique set of data, the Email Verifier can return a result even
                                            where other standard verification tools fail.
                                        </p>
                                        <Link className="blue-cta" to="/email-verifier">Test the Email Verifier</Link>
                                    </div>
                                </Col>
                                <Col md={1}>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section className="data-privacy">
                        <Container>
                            <Row>
                                <Col md={12}>
                                    <h2>We believe in data transparency.</h2>
                                    <p className="big-p">
                                        At IntelligenSe, we are convinced the most valuable data is sourced and
                                        processed using transparent methods. Every single email address we
                                        collect and distribute in the Domain Search has public sources we
                                        indicate, along with the discovery dates.
                                    </p>
                                    <Link className="btn-orange btn-lg" to="/our-data">Learn more</Link>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </div>
                <Footer />
            </>
        )
    }
}
