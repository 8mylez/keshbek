import React, { Component } from 'react';

import AccountsUIWrapper from './AccountsUIWrapper.js';

export default class Header extends Component {
    render(){
        return(
            <div className="header">
                <div className="headline">
                    <h2>Total In April: 15.412,00 € <i className="fa fa-arrow-up"></i></h2>
                    <h2>Total Out April: 339,23 € <i className="fa fa-arrow-down"></i></h2>
                </div>
                <div className="login">
                    <AccountsUIWrapper />
                </div>
            </div>
        )
    }
}