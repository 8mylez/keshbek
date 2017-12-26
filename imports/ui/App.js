import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import { Expenses } from '/imports/api/expenses.js';
import Expense from './Expense.js';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import Select from './Select.js';

class App extends Component {
    renderExpenses() {
        return this.props.expenses.map((expense) => (
            <Expense key={expense._id} expense={expense} />
        ));
    }

    handleSubmit(event) {
        event.preventDefault();

        const expense = {
            debitor: ReactDOM.findDOMNode(this.refs.debitor).value,
            amount: ReactDOM.findDOMNode(this.refs.amount).value,
            creditor: ReactDOM.findDOMNode(this.refs.creditor).value,
            description: ReactDOM.findDOMNode(this.refs.description).value,
            date: ReactDOM.findDOMNode(this.refs.date).value,
        };

        Meteor.call('expenses.insert', expense);

        ReactDOM.findDOMNode(this.refs.debitor).value = '';
        ReactDOM.findDOMNode(this.refs.amount).value = '';
        ReactDOM.findDOMNode(this.refs.creditor).value = '';
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
            <div className='container'>
                <AccountsUIWrapper />
                { this.props.currentUser ?
                    <div>
                        <header>
                            <h1>Keshbek 1.0.0</h1>
                        </header>
                        <form onSubmit={this.handleSubmit.bind(this)}>
                            <label>From</label>
                            <Select ref='debitor' selectOptions={this.getUsers()} />
                            <label>Value</label>
                            <input
                                type='number'
                                ref='amount'
                                placeholder='value'
                                step='0.01'
                                style={marginRight}
                            />
                            <label>To</label>
                            <Select ref='creditor' selectOptions={this.getUsers()} />
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
                        <ul>
                            {this.renderExpenses()}
                        </ul> 
                    </div> : 'Bitte einloggen...'
                }
            </div>
        )
    }
}

export default withTracker(() => {
    Meteor.subscribe('expenses');
    Meteor.subscribe('users');
    
    return {
        expenses: Expenses.find({}, { sort: { createdAt: -1} }).fetch(),
        currentUser: Meteor.user(),
    };
})(App);