import React, { Component } from 'react'
import Parse from 'parse/react-native';
class Message extends Parse.Object {
    constructor() {
      // Pass the ClassName to the Parse.Object constructor
      super('Messages');
      // All other initialization
    }
    addMessage({from, message, to}) {
        this.set('from', from);
    }
    getLists() {
        var query = new Parse.Query(Message);
        return query.find({});
    }
  }

  Parse.Object.registerSubclass('Messages', Message);

  export default Message;