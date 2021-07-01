import React, { Component } from 'react';

import './domainSearchDashboard.styles.css';

import DashboardHeader from '../../components/DashboardHeader/dashboardHeader.component';

export default class DomainSearchDashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    render() {
        return (
            <div className="dashboard domainsearch">
                <DashboardHeader />
            </div>
        )
    }
}
