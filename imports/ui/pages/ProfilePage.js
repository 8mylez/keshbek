import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class ProfilePage extends Component {
    
    render() {
        return (
            <div className='profile-page'>
                <h1>PROFILE</h1>
            </div>
        )
    }
}

export default withTracker(() => {
    //Meteor.subscribe('transactions');
    //Meteor.subscribe('users');
    
    return {
        //transactions: Transactions.find({}, { sort: { createdAt: -1} }).fetch(),
        currentUser: Meteor.user(),
    };
})(ProfilePage);