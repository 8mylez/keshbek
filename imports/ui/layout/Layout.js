import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Navbar from '/imports/ui/Navbar.js';
import Header from '/imports/ui/Header.js';
import Footer from '/imports/ui/Footer.js';

class Layout extends Component {
    render() {
        const marginRight = { marginRight: '30px' };
        return (
            <div className='page'>
                <Navbar />
                <Header />
                <div className='content'>
                    { this.props.currentUser ?
                        <div className='container'> 
                            {this.props.children}
                        </div> : 'Bitte einloggen...'
                    }
                </div>
                <Footer />
            </div>
        )
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user(),
    };
})(Layout);