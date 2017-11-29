import React, { Component } from 'react';
import { connect } from 'react-redux'
import AppRedux from 'App/Redux/AppRedux';
import { ModalIndicator } from 'teaset'
import MainDrawerScreen from './MainDrawerScreen'
import { NavigationActions } from 'react-navigation'

class MainDrawerScreenClass extends Component {

    constructor(props) {
        super(props);
        this.props.fetchCurrentUserAction();
    }
    componentWillReceiveProps(props) {
        console.log(props)
        if (!props.currentUser && this.props.navigation.key !== 'LaunchScreen') {
            ModalIndicator.hide();
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({ routeName: 'LaunchScreen' })
                ]
            });
            this.props.navigation.dispatch(resetAction);
        }
    }
    render() {
        return <MainDrawerScreen />;
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.app.currentUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrentUserAction: () => dispatch(AppRedux.fetchCurrentUserAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainDrawerScreenClass)
