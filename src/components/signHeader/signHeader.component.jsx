import React from 'react';
import { Link } from "react-router-dom";

import LogoImage from '../../assets/image/Intelligense White tag.png';

import './signHeader.styles.css';

function SignHeader() {
    return (
        <div className="login-header">
                <Link to='/'className="login-navbar-logo">
                    <img src={LogoImage} alt='IntelligenSe' />
                </Link>
                <div class="grey pull-right hidden-xs">
                    Don't have an account? <Link to="/users/sign_up">Sign up</Link>.
                </div>
        </div>
    )
}

export default SignHeader
