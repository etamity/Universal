import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import Messages from 'App/Models/Messages'

class ChatScreenClass extends Component {

    static navigationOptions = {
        tabBarLabel: 'Chat',
        headerTitle: 'Chat',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor, focused }) => (
            <Ionicons
                name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'}
                size={26}
                style={{ color: tintColor }}
            />
        ),
    };
    state = {
        messages: [],
    };

    componentDidMount(){
        var messages = new Messages();
        messages.addMessage({
            from: 'joey',
            message: 'message',
            to: 'haha'
        });
        messages.save();
    }

    render() {
        return null;
    }

}

const mapStateToProps = (state) => {
    return {
        currentUser: state.app.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export const ChatScreen = connect(mapStateToProps, mapDispatchToProps)(ChatScreenClass)
