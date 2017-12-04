import React, { Component } from 'react'
import Parse from 'parse/react-native';
import keyMirror from 'key-mirror'

const COLLECTION = 'Chat';
const fields = keyMirror({
    user: null,
    groupId: null,
    text: null,
    picture: null,
    video: null,
    createdAt: null
});
class ChatModel extends Parse.Object {

    constructor() {
      // Pass the ClassName to the Parse.Object constructor
      super(COLLECTION);
      // All other initialization
    }
    addMessage({user, groupId, text, picture, video}) {
        this.set('user', user);
        this.set('groupId', groupId);
        this.set('text', text);
        this.set('picture', picture);
        this.set('video', video);
        return this.save();
    }
    getLists() {
        var query = new Parse.Query(Message);
        return query.find({});
    }
  }

  Parse.Object.registerSubclass(COLLECTION, ChatModel);

  export default ChatModel;