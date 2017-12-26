import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Expenses = new Mongo.Collection('expenses');

if(Meteor.isServer) {
    Meteor.publish('expenses', function(){
        return Expenses.find();
    });
}

Meteor.methods({
    'expenses.insert'(expense) {
        check(expense, {
            debitor: String,
            amount: String,
            creditor: String,
            description: String,
            date: String
        });
        
        if (!this.userId){
            throw new Meteor.Error('not-authorized');
        }

        Expenses.insert({
            debitor: expense.debitor,
            amount: expense.amount,
            creditor: expense.creditor,
            description: expense.description,
            date: expense.date,
            createdAt: new Date(),
            ownerId: this.userId,
        });
    },
    'expenses.remove'(id) {
        check(id, String);

        Expenses.remove(id);
    }
});