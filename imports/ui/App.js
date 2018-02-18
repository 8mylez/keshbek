import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Loans } from '/imports/api/loans.js';
import Loan from './Loan.js';
import Select from './Select.js';
import Navbar from './Navbar.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
    renderLoans() {
        return this.props.loans.map((loan) => (
            <Loan key={loan._id} loan={loan} />
        ));
    }

    handleSubmit(event) {
        event.preventDefault();

        const loan = {
            debitor: ReactDOM.findDOMNode(this.refs.debitor).value,
            amount: ReactDOM.findDOMNode(this.refs.amount).value,
            description: ReactDOM.findDOMNode(this.refs.description).value,
            date: ReactDOM.findDOMNode(this.refs.date).value,
        };

        Meteor.call('loans.insert', loan);

        ReactDOM.findDOMNode(this.refs.debitor).value = '';
        ReactDOM.findDOMNode(this.refs.amount).value = '';
        ReactDOM.findDOMNode(this.refs.description).value = '';
    }

    getUsers() {
        return  Meteor.users.find({
            _id: { $ne: Meteor.user()._id },
        }).fetch().map((user) => {
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
                            <h2>Loans</h2>
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <label>to</label>
                                <input type='text' ref='debitor' />
                                <label>Value</label>
                                <input
                                    type='number'
                                    ref='amount'
                                    placeholder='value'
                                    step='0.01'
                                    style={marginRight}
                                />
                                <label>description</label>
                                <input
                                    type='text'
                                    ref='description'
                                    placeholder='description'
                                    style={marginRight}
                                />
                                <label>date</label>
                                <input
                                    type='date'
                                    ref='date'
                                    style={marginRight}
                                />
                                <button type='submit'>save</button>
                            </form>
                            <hr />
                            <div>
                                <ul>
                                    {this.renderLoans()}
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
    Meteor.subscribe('loans');
    Meteor.subscribe('users');
    
    return {
        loans: Loans.find({}, { sort: { createdAt: -1} }).fetch(),
        currentUser: Meteor.user(),
    };
})(App);