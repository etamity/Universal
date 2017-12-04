import React, { Component } from 'react'
import Parse from 'parse/react-native';
import keyMirror from 'key-mirror'

const COLLECTION = 'ChatGroup';
const fields = keyMirror({
    name: null,
    avartar: null
});
class GroupModel extends Parse.Object {

    constructor() {
      // Pass the ClassName to the Parse.Object constructor
      super(COLLECTION);
      // All other initialization
    }
    createGroup(name) {
        this.set('name', name);
        return this.save();
    }
    getLists() {
        var query = new Parse.Query(Message);
        return query.find({});
    }
  }

  Parse.Object.registerSubclass(COLLECTION, GroupModel);

  export default GroupModel;