import React, { Component } from 'react'
import Parse from 'parse/react-native';
import keyMirror from 'key-mirror'

const COLLECTION = 'Message';
const fields = keyMirror({
    user: null,
    groupId: null,
    description: null,
    lastUser: null,
    lastMessage: null,
    counter: null,
    updatedAction: null
});
class MessageModel extends Parse.Object {

    constructor() {
      // Pass the ClassName to the Parse.Object constructor
      super(COLLECTION);
      // All other initialization
    }
    addMessage({user, groupId, description, lastUser, counter}) {
        this.set('user', user);
        this.set('groupId', groupId);
        this.set('description', description);
        this.set('lastUser', lastUser);
        this.set('counter', counter);
        return this.save();
    }
    getLists() {
        var query = new Parse.Query(Message);
        return query.find({});
    }
  }

  Parse.Object.registerSubclass(COLLECTION, MessageModel);

  export default MessageModel;