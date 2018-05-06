import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Counts } from 'meteor/tmeasday:publish-counts';

export const Transactions = new Mongo.Collection('transactions');

if(Meteor.isServer) {
    Meteor.publish('transactions', function(limit, searchValue){
        let regex = new RegExp(searchValue, 'i');

        let q = {
            $or: [
                { 'description': regex },
                { 'debitor': regex },
                { 'creditor': regex },
                { 'date': regex },
                { 'amount': regex },
            ]
        };

        let p = {
            sort: { createdAt: -1 },
        };

        Counts.publish(this, 'transactionsCount', Transactions.find(q, p));

        p.limit = limit;

        return Transactions.find(q, p);
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