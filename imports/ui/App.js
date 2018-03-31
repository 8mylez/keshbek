import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Transactions } from '/imports/api/transactions.js';
import Transaction from './Transaction.js';
import Select from './Select.js';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
    renderTransactions() {
        return this.props.transactions.map((transaction) => (
            <Transaction key={transaction._id} transaction={transaction} />
        ));
    }

    handleSubmit(event) {
        event.preventDefault();

        const transaction = {
            creditor: ReactDOM.findDOMNode(this.refs.creditor).value,
            debitor: ReactDOM.findDOMNode(this.refs.debitor).value,
            amount: ReactDOM.findDOMNode(this.refs.amount).value,
            description: ReactDOM.findDOMNode(this.refs.description).value,
            date: ReactDOM.findDOMNode(this.refs.date).value,
        };

        Meteor.call('transactions.insert', transaction);

        ReactDOM.findDOMNode(this.refs.creditor).value = '';
        ReactDOM.findDOMNode(this.refs.debitor).value = '';
        ReactDOM.findDOMNode(this.refs.amount).value = '';
        ReactDOM.findDOMNode(this.refs.description).value = '';
    }

    getUsers() {
        return  Meteor.users.find({}).fetch().map((user) => {
            return {
                value: user._id,
                label: user.emails[0].address,
            }
        });
    }

    render() {
        const marginRight = { marginRight: '30px' };
        return (
            <div className='page'>
                <Navbar />
                <Header />
                <div className='content'>
                    { this.props.currentUser ?
                        <div className='container'> 
                            <div>
                                <ul>
                                    {this.renderTransactions()}
                                </ul> 
                            </div>
                        </div> : 'Bitte einloggen...'
                    }
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    Meteor.subscribe('transactions');
    Meteor.subscribe('users');
    
    return {
        transactions: Transactions.find({}, { sort: { createdAt: -1} }).fetch(),
        currentUser: Meteor.user(),
    };
})(App);