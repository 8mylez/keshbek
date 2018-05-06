import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import { NavLink } from 'react-router-dom';
import AccountsUIWrapper from './AccountsUIWrapper.js';

const navbarLogoStyle = {
    borderLeft: 0
}

class Navbar extends Component{
    render(){
        return (
            <div className="navigation">
                <div className='groups'>
                    <div className='container'>
                        <ul>
                            <li>
                                <a className="group">
                                    GF
                                </a>
                            </li>
                            <li>
                                <a className="group">
                                    8Z
                                </a>
                            </li>
                            <li>
                                <a className="group">
                                    BW
                                </a>
                            </li>
                            <li>
                                <a className="group add-group">
                                    +
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='navbar'>
                    <div className='container'>
                        <ul>
                            <li>
                                <NavLink to="/">
                                    <img src='images/keshbek-logo-transparent.png' alt='keshbek logo'/>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/transactions">
                                    <i className='fa fa-money'></i> Transactions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/cash-up">
                                    <i className='fa fa-exchange'></i> Cash up
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/profile">
                                    <i className='fa fa-user'></i> Profile
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user(),
    };
})(Navbar);