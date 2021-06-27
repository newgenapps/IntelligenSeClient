import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './homePage.styles.css';

import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

import Google from '../../assets/image/c_google.webp'

export default class HomePage extends Component {
    render() {
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
                                            <input autocomplete="off" autofocus="autofocus" className="form-control" placeholder="company.com" required="required" type="text" value="" />
                                            <span className="input-group-btn">
                                                <button className="btn-orange">
                                                    <span className="d-none d-sm-block">Find email addresses</span>
                                                    <span className="d-block d-sm-none">Search</span>
                                                </button>
                                            </span>
                                        </div>
                                        <div className="search-results-container"></div>
                                        <div className="light-grey before-search-message">
                                            <p>Enter a domain name to launch the search. For example, <Link to="#" className="try-domain">newgenapps.com</Link>.</p>
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
                                    <img alt="Google" width="78" height="26" src={Google}/>
                                </Col>
                                <Col md={2} sm={4} xs={6}>
                                    <img alt="IBM" width="65" height="26" src="https://hunter.io/assets/customers_logos/ibm-5ad5627f50f3b689c1cf88a614d55e218c486d3c7868b5f2c1e4efa3f8ab3572.png"></img>
                                </Col>

                                <Col md={2} sm={4} xs={6}>
                                <img alt="Manpower" width="133" height="26" src="https://hunter.io/assets/customers_logos/manpower-7a5babf637c4316c16345eb8f238459b461955201cc7c4af6864c33980ac5aa3.png"/>
                                </Col>

                                <Col md={2} sm={4} xs={6}>
                                <img alt="Microsoft" width="122" height="26" src="https://hunter.io/assets/customers_logos/microsoft-1e9a14aedf08ef8d8c20e652967de231aa82086d621c7faac3dac48e7532d290.png"/>
                                </Col>
                                <Col md={2} sm={4} xs={6}>
                                <img alt="Adobe" width="107" height="26" src="https://hunter.io/assets/customers_logos/adobe-89403f8f6c0fc411f44f985b35de6c0b268bc11a89b5cc29017d61307da93d1a.png"/>
                                </Col>
                                <Col md={2} sm={4} xs={6}>
                                <img alt="Invision" width="77" height="26" src="https://hunter.io/assets/customers_logos/invision-43121076a2ce2e25f8a54ab6be9929ebb47db9f2920a89a8cc8f44540e46733a.png"/>
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
