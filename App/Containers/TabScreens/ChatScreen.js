import React, { Component } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux'
import {Theme, ListRow, Label} from 'teaset';

class ChatScreenClass extends Component {
    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            tabBarLabel: 'Chat',
            headerTitle: 'Chat',
            headerRight: <Ionicons
                name={'md-add'}
                size={35}
                onPress={()=> navigation.navigate('SelectUserScreen')}
            style={{ color: 'white', marginRight: 12}}  
            iconContainerStyle={{height:30}} />,
            // Note: By default the icon is only shown on iOS. Search the showIcon option below.
            tabBarIcon: ({ tintColor, focused }) => (
                <Ionicons
                    name={focused ? 'ios-chatbubbles' : 'ios-chatbubbles-outline'}
                    size={26}
                    style={{ color: tintColor }}
                />
            ),
        }
    }
  


    componentDidMount(){
        this.props.navigation.setParams({
            doOpenSelectUserScreen: this.doOpenSelectUserScreen
        });
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
