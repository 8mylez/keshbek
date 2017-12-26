import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Expenses } from '../api/expenses';

export default class Expense extends Component {
    handleEditClick(event) {
        event.preventDefault();

        console.log('edit button clicked');
    }

    handleDeleteClick(event) {
        event.preventDefault();

        Meteor.call('expenses.remove', this.props.expense._id);
    }
    
    render() {
        return (
            <li>
                Von: {this.props.expense.debitor}<br /> 
                An: {this.props.expense.creditor}<br />
                {this.props.expense.amount} €<br />
                {this.props.expense.description}<br />
                {this.props.expense.date}<br /><br />
                <button onClick={this.handleEditClick.bind(this)}>edit</button>- -
                <button onClick={this.handleDeleteClick.bind(this)}>delete</button>
                <hr />
            </li>
        );
    }
}