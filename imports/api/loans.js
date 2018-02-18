import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Loans = new Mongo.Collection('loans');

if(Meteor.isServer) {
    Meteor.publish('loans', function(){
        return Loans.find();
    });
}

Meteor.methods({
    'loans.insert'(loans) {
        check(loans, {
            debitor: String,
            amount: String,
            date: String,
            description: String
        });
        
        if (!this.userId){
            throw new Meteor.Error('not-authorized');
        }

        Loans.insert({
            debitor: loans.debitor,
            amount: loans.amount,
            creditorId: this.userId,
            description: loans.description,
            date: loans.date,
            createdAt: new Date(),
            ownerId: this.userId,
        });
    },
    'loans.remove'(id) {
        check(id, String);

        Loans.remove(id);
    }
});

Loans.helpers({
    creditorLabel(){
        return Meteor.users.findOne(this.creditorId).emails[0].address;
    }
})