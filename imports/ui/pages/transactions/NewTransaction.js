import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

import Transactions from '/imports/api/transactions.js';

class NewTransaction extends Component {
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

        this.props.history.push('/transactions');
    }

    render() {
        const marginRight = { marginRight: '30px' };
        return (
            <div className='new-transaction-page'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>from</label>
                    <input type='text' ref='creditor' />
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
            </div>
        )
    }
}

export default withTracker(() => {
    return {

    };
})(NewTransaction);