import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class App extends Component {
    handleSubmit(event) {
        event.preventDefault();
        
        const expense = {
            debitor: ReactDOM.findDOMNode(this.refs.debitor),
            amount: ReactDOM.findDOMNode(this.refs.amount),
            creditor: ReactDOM.findDOMNode(this.refs.creditor),
            description: ReactDOM.findDOMNode(this.refs.description),
        };

        console.log(expense);
    }

    render() {
        return (
            <div className='container'>
                <header>
                    <h1>Keshbek</h1>
                </header>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>From</label>
                    <select ref='debitor'>
                        <option selected>Alexander Wolf</option>
                        <option>Marc Baur</option>
                        <option>Ewald Gering</option>
                        <option>Daniel Wolf</option>
                        <option>Nicole Wolf</option>
                        <option>Wolf Baur WG</option>
                    </select>
                    <label>Value</label>
                    <input
                        type='text'
                        ref='amount'
                        placeholder='value'
                        step='0.01'
                    />
                    <label>To</label>
                    <select ref='creditor'>
                        <option selected>Alexander Wolf</option>
                        <option>Marc Baur</option>
                        <option>Ewald Gering</option>
                        <option>Daniel Wolf</option>
                        <option>Nicole Wolf</option>
                        <option>Wolf Baur WG</option>
                    </select>
                    <label>description</label>
                    <input
                        type='text'
                        ref='description'
                        placeholder='description'
                    />
                    <button type='submit'>save</button>
                </form>
                <ul>
                    <li>Ewald --> Alexander 314,21 €</li>
                    <li>Ewald --> Alexander 314,21 €</li>
                    <li>Ewald --> Alexander 314,21 €</li>
                    <li>Ewald --> Alexander 314,21 €</li>
                    <li>Ewald --> Alexander 314,21 €</li>
                    <li>Ewald --> Alexander 314,21 €</li>
                </ul>
            </div>
        )
    }
}

export default withTracker(() => {
    return {};
})(App);