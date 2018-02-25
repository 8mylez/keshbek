import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Transactions } from '../api/transactions';

import moment from 'moment';
import accounting from 'accounting';

export default class Transaction extends Component {
    handleEditClick(event) {
        event.preventDefault();

        console.log('edit button clicked');
    }

    handleDeleteClick(event) {
        event.preventDefault();

        Meteor.call('transactions.remove', this.props.transaction._id);
    }
    
    render() {
        return (
            <li className='transaction'>
                <div className='creditor'>
                    <div className='image'>
                        <img src='/images/alexander-wolf.jpeg' />
                    </div>
                    <div className='label'>
                        <div className='name'>
                            Von: Marc Baur
                        </div>
                        <div className='email'>
                            {this.props.transaction.creditor}
                        </div>
                    </div>
                </div>
                <div className='debitor'>
                    <div className='image'>
                        <img src='/images/alexander-wolf.jpeg' />
                    </div>
                    <div className='label'>
                        <div className='name'>
                            An: Alexander Wolf
                        </div>
                        <div className='email'>
                            {this.props.transaction.debitor}
                        </div>
                    </div>
                </div>
                <div className='info'>
                    <div className='description'>
                        {this.props.transaction.description}
                    </div>
                    <hr className='divider' />
                    <div className='date'>
                        {moment(this.props.transaction.date).format('DD.MM.YYYY')}
                    </div>
                </div>
                <div className='amount'>
                    {accounting.formatMoney(this.props.transaction.amount, "€", 2, ".", ",", "%v %s")}
                </div>
                <div className='actions'>
                    <button onClick={this.handleEditClick.bind(this)}>
                        <i className='fa fa-pencil-square-o'></i>    
                    </button>
                    <button onClick={this.handleDeleteClick.bind(this)}>
                        <i className='fa fa-trash'></i>
                    </button>
                </div>
            </li>
        );
    }
}