import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { Loans } from '../api/loans';

import moment from 'moment';
import accounting from 'accounting';

export default class Loan extends Component {
    handleEditClick(event) {
        event.preventDefault();

        console.log('edit button clicked');
    }

    handleDeleteClick(event) {
        event.preventDefault();

        Meteor.call('loans.remove', this.props.loan._id);
    }
    
    render() {
        return (
            <li className='loan'>
                <div className='creditor'>
                    <div className='creditor-image'>
                        <img src='/images/alexander-wolf.jpeg' />
                    </div>
                    <div className='creditor-label'>
                        <div className='creditor-name'>
                            Alexander Wolf
                        </div>
                        <div className='creditor-email'>
                            {this.props.loan.debitor}
                        </div>
                    </div>
                </div>
                <div className='info'>
                    <div className='description'>
                        {this.props.loan.description}
                    </div>
                    <hr className='divider' />
                    <div className='date'>
                        {moment(this.props.loan.date).format('DD.MM.YYYY')}
                    </div>
                </div>
                <div className='amount'>
                    {accounting.formatMoney(this.props.loan.amount, "€", 2, ".", ",", "%v %s")}
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