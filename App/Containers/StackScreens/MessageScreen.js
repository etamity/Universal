import React, { Component } from 'react'
import { GiftedChat } from 'react-native-gifted-chat';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'


class MessageScreenClass extends Component {

    static navigationOptions = {
        tabBarLabel: 'Message',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor, focused }) => (
          <Ionicons
          name={focused ? 'ios-mail' : 'ios-mail-outline'}
          size={26}
          style={{ color: tintColor }}
        />
        ),
      };

    state = {
        messages: [],
    };

    componentWillMount() {
        this.setState({
            messages: [
                {
                    _id: 1,
                    text: 'Hello developer',
                    createdAt: new Date(),
                    user: {
                        _id: 2,
                        name: 'React Native',
                        avatar: 'https://facebook.github.io/react/img/logo_og.png',
                    },
                },
            ],
        });
    }

    onSend(messages = []) {
        this.setState((previousState) => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={(messages) => this.onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        );
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

export const MessageScreen = connect(mapStateToProps, mapDispatchToProps)(MessageScreenClass)
