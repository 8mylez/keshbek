import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class ContactsPage extends Component {
  
    render() {
        return (
            <div className='contacts-page'>
                <h1>CONTACTS</h1>
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
})(ContactsPage);