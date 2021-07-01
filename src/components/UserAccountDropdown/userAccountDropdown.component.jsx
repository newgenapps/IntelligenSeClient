import React from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import './userAccountDropdown.styles.css';


function UserAccountDropdown(props) {
    const {isDropDownOpen} = props
    return (
        <ul className={`dropdown-dashboard ${isDropDownOpen ? '' : 'd-none'}`}>
            <li>
                <Link rel="nofollow" data-method="delete" href="/users/sign_out"><div class="far fa-sign-out"></div>
                    Log out
                </Link>
            </li>
        </ul>
    )
}

const mapStateToProps = state => {
    return {
        isDropDownOpen: state.header.isDropDownOpen
    }
}
  
  

export default connect(mapStateToProps, )(UserAccountDropdown);
