import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import {Theme, ListRow, NavigationBar, Label} from 'teaset';

class ChatScreenClass extends Component {

    static navigationOptions = {
        tabBarLabel: 'Chat',
        headerTitle: 'Chat',
        headerRight: <NavigationBar.IconButton icon={<Ionicons
            name={'ios-add'}
            size={26}
        style={{ color: 'white' }}  
        iconContainerStyle={{height:30}} /> } />,
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
