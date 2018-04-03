import React, { Component } from 'react';

import TransactionsPage, { TransationsPage } from './TransactionsPage.js'; 

export default class TransactionsPagePagination extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.onSearch = this.onSearch.bind(this);

        this.state = { 
            limit: 10,
            searchQuery: ''
        };
    }
    
    handleClick() {
        this.setState({ 
            limit: this.state.limit + 10,
            searchQuery: this.state.searchQuery
        });
    }

    onSearch(searchValue) {
        this.setState({
            limit: this.state.limit,
            searchQuery: searchValue
        });
    }
    
    render() {
        return (
            <div className="pagination-page">
                <TransactionsPage 
                    limit={this.state.limit}
                    searchQuery={this.state.searchQuery}
                    handleClick={this.handleClick}
                    onSearch={this.onSearch}
                />
                <div className="pagination-actions">
                    <button className="btn btn-default" onClick={this.handleClick}>Load more</button>
                </div>
            </div>
        );
    }
}