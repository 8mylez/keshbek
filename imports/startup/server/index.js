import { Meteor } from 'meteor/meteor';

if (Meteor.isDevelopment) {
    import './seed-data.js';
}
