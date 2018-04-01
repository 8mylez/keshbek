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
                <div className='new-transaction-form-wrapper'>
                    <h3>New Transaction</h3>
                    <form onSubmit={this.handleSubmit.bind(this)}>
                        <div className="form-row">
                            <div className="half-col">
                                <label>from</label>
                                <input className='input' type='text' ref='creditor' />
                            </div>
                            <div className="half-col">
                                <label>to</label>
                                <input className='input' type='text' ref='debitor' />
                            </div>
                        </div>
                        <div className="form-row">
                            <label>Value</label>
                            <input
                                type='number'
                                ref='amount'
                                placeholder='value'
                                step='0.01'
                                className='input'
                            />
                        </div>

                        <div className="form-row">
                            <label>description</label>
                            <input
                                type='text'
                                ref='description'
                                placeholder='description'
                                className='input'
                            />
                        </div>
                        
                        <div className="form-row">
                            <label>date</label>
                            <input
                                type='date'
                                ref='date'
                                className='input'
                            />
                        </div>
                        
                        <div className="form-row align-right">
                            <div className="btn-group">
                                <button className="btn btn-cancel">Cancel</button>
                                <button className="btn btn-new" type='submit'>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    return {

    };
})(NewTransaction);