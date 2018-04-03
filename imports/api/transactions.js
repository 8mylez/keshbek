import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Transactions = new Mongo.Collection('transactions');

if(Meteor.isServer) {
    Meteor.publish('transactions', function(limit){
        return Transactions.find({}, 
            {
                sort: { createdAt: -1 },
                limit: limit
            }
        );
    });
}

Meteor.methods({
    'transactions.insert'(transaction) {
        check(transaction, {
            debitor: String,
            creditor: String,
            amount: String,
            date: String,
            description: String
        });
        
        if (!this.userId){
            throw new Meteor.Error('not-authorized');
        }

        Transactions.insert({
            debitor: transaction.debitor,
            amount: transaction.amount,
            creditor: transaction.creditor,
            description: transaction.description,
            date: transaction.date,
            createdAt: new Date(),
            ownerId: this.userId,
        });
    },
    'transactions.remove'(id) {
        check(id, String);

        Transactions.remove(id);
    }
});

Transactions.helpers({
    creditorLabel(){
        return Meteor.users.findOne(this.creditorId).emails[0].address;
    }
})