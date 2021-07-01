import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import './dashboardHeader.styles.css';

import LogoImage from '../../assets/image/Intelligense White tag.png';
import UserAccountDropdownComponent from '../UserAccountDropdown/userAccountDropdown.component';

import { toggleDropDown } from '../../redux/Header/header.actions';

function DashboardHeader({toggleDropDown, user}) {
    const infoImage = [`https://i2.wp.com/ui-avatars.com/api/${user.firstName[0]}+${user.lastName[0]}/128/168eea/fff?ssl=1`]

    return (
        <div className="dashboard-header">
            <nav className="navbar">
                <div className="brand">
                <Link to='/search'>
                    <img src={LogoImage} alt='IntelligenSe' />
                </Link>
                </div>
                <div className="menu">
                    <ul>
                        <li className="nav-link" id="bulks-nav-link">
                            <Link className="" to="/bulk">
                                <div className="icon icon-List-1"></div>
                                <span className="hidden-xs">Bulks</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link className="" to="/verify">
                                <div className="icon icon-Circle-Check-2"></div>
                                <span className="hidden-xs">Verifier</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link className="" to="/find">
                                <div className="icon icon-Target-User"></div>
                                <span className="hidden-xs">Finder</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link className="active" to="/search">
                                <div className="icon icon-Magnifying-Glass-1"></div>
                                <span className="hidden-xs">Search</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="user">
                    <ul>
                        <li className="nav-link" id="dropdown-account-link" onClick={toggleDropDown}>
                            <span className="fas fa-angle-down hidden-xs hidden-sm"></span>
                            <div className="profile-pic pic-float">
                                <img alt="Profile"  src={infoImage[0]} />
                            </div>
                            <div className="account-information hidden-xs hidden-sm">
                                <strong>{user.firstName} {user.lastName}</strong>
                                <br />
                                <span className="light-grey">Free plan</span>
                            </div>
                        </li>
                    </ul>
                    <UserAccountDropdownComponent />
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      user: state.user.user,
      isLoggedIn: state.user.isLoggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
      toggleDropDown: () => dispatch(toggleDropDown())
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(DashboardHeader)
