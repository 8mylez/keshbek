import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';
import { Counts } from 'meteor/tmeasday:publish-counts';

import { Transactions } from '/imports/api/transactions.js';
import Transaction from '/imports/ui/Transaction.js';

class TransactionsPage extends Component {
    constructor(props) {
        super(props);

        this.onSearch = this.onSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    renderTransactions() {
        return this.props.transactions.map((transaction) => (
            <Transaction key={transaction._id} transaction={transaction} />
        ));
    }

    onSearch(event) {
        event.preventDefault();

        this.props.onSearch(ReactDOM.findDOMNode(this.refs.searchValue).value);
    }

    handleClick(event) {
        event.preventDefault();

        this.props.handleClick();
    }

    render() {
        return (
            <div className="transactions-page">
                <div className="actions-bar">
                    <div className="search-action">
                        <label>Search</label>
                        <input className="search" type="text" ref="searchValue" onChange={this.onSearch} />
                    </div>
                    <div className="new-entry-action">
                        <Link to="/transactions/new" className="btn btn-new">
                            New transaction
                        </Link>
                    </div>
                </div>
                <div className="transactions">
                    <ul>
                        {this.renderTransactions()}
                    </ul>
                </div>
                <div className="pagination-actions">
                    { this.props.transactionsCount > this.props.limit ? (
                        <button className="btn btn-default" onClick={this.handleClick}>Load more</button>) 
                    : "" }
                </div>
            </div>
        )
    }
}

export default withTracker(props => {
    q = {};

    if(props.searchQuery){
        q = props.searchQuery;
    }

    Meteor.subscribe('transactions', props.limit, q);
    Meteor.subscribe('users');

    console.log(Counts.get('transactionsCount'));
    
    return {
        transactions: Transactions.find({}, { sort: { createdAt: -1} }).fetch(),
        transactionsCount: Counts.get('transactionsCount'),
        currentUser: Meteor.user(),
        limit: props.limit,
    };
})(TransactionsPage);