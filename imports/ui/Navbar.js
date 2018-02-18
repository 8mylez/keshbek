import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

import AccountsUIWrapper from './AccountsUIWrapper.js';

const navbarLogoStyle = {
    borderLeft: 0
}

class Navbar extends Component{
    render(){
        return (
            <div className='navbar'>
                <div className='container'>
                    <ul>
                        <li>
                            <a className='item' style={navbarLogoStyle}>
                                <img src='images/keshbek-logo-transparent.png' alt='keshbek logo'/>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-money'></i> Loans
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-address-book-o'></i> Contacts
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-exchange'></i> Cash up
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i className='fa fa-user'></i> Profile
                            </a>
                        </li>
                    </ul>
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