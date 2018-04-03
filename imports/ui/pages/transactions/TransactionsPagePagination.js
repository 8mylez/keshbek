import React, { Component } from 'react';

import TransactionsPage, { TransationsPage } from './TransactionsPage.js'; 

export default class TransactionsPagePagination extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.state = { limit: 10 };
    }
    
    handleClick() {
        this.setState({ 
            limit: this.state.limit + 10
        });
    }
    
    render() {
        return (
            <div className="pagination-page">
                <TransactionsPage 
                    limit={this.state.limit}
                    loadMore={this.loadMore} 
                />
                <div className="pagination-actions">
                    <button className="btn btn-default" onClick={this.handleClick.bind(this)}>Load more</button>
                </div>
            </div>
        );
    }
}