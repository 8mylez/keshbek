import { Meteor } from 'meteor/meteor';

if(Meteor.isServer){
    Meteor.publish('users', function(){
        console.log(this.userId);
        return Meteor.users.find({
            _id: { $ne: this.userId },
        }, { fields: { emails: 1 }});
    });
}