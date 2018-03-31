import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class DashboardPage extends Component {
    render() {
        return (
            <div className='dashboard-page'>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user(),
    }
})(DashboardPage);