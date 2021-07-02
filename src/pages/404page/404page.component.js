import React from 'react';
import { Link } from "react-router-dom";

import './404page.styles.css';

function PageNotFound() {
    return (
        <div className="pageHolder404">
            <div className="dialog404">
                <div className="error-code">404</div>
                <h1>Page not found.</h1>
                <p>This page doesn't seem to exist. If you think there should definitely be something here, please email us at <Link to="mailto:info@intelligense.ai">info@intelligense.ai</Link>.</p>
                <Link className="cta" to="/">Homepage</Link><Link className="cta" to="/search">Dashboard</Link>
            </div>
        </div>
    )
}

export default PageNotFound
