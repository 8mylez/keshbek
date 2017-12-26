import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import SelectOption from './SelectOption.js';

export default class Select extends Component {
    renderOptions(){
        return this.props.selectOptions.map((option) => (
            <SelectOption key={option.value} value={option.value} label={option.label} />
        ));
    }
    render() {
        return (
            <select>
                {this.renderOptions()}
            </select>
        );
    }
}