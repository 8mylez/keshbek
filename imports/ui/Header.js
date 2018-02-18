import React, { Component } from 'react';

import AccountsUIWrapper from './AccountsUIWrapper.js';

export default class Header extends Component {
    render(){
        return(
            <div className="header">
                <div className="headline">
                    <h2>Loans</h2>
                </div>
                <div className="searchbar">
                    
                </div>
                <div className="login">
                    <AccountsUIWrapper />
                </div>
            </div>
        )
    }
}