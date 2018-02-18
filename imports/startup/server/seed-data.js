import { Meteor } from 'meteor/meteor';

import faker from 'faker';

import { Loans } from '/imports/api/loans.js';

function user(){
    return faker.random.boolean() == 'true' ? 'kTHiScL5psEnnyh3f' : 'pb2Cw9Boin6tN5BfK';
}

function name() {
    return faker.internet.email();
}

function amount() {
    return faker.finance.amount();
}

function description() {
    return faker.random.words();
}

function date() {
    return faker.date.past();
}

if (Loans.find().count() < 1){
    for(let i = 0; i < 100; i+= 1) {
        Loans.insert({
            debitorId: user(),
            amount: amount(),
            creditorId: 'kTHiScL5psEnnyh3f',
            description: description(),
            date: date(),
            createdAt: new Date(),
            ownerId: 'kTHiScL5psEnnyh3f'
        })
    }
}