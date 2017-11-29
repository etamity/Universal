import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Styles/SocialButtonStyles'
import ExamplesRegistry from '../Services/ExamplesRegistry'
import Icon from 'react-native-vector-icons/FontAwesome';
// Note that this file (App/Components/SocialButton) needs to be
// imported in your app somewhere, otherwise your component won't be
// compiled and added to the examples dev screen.

// Ignore in coverage report
/* istanbul ignore next */
ExamplesRegistry.addComponentExample('Social Button', () =>
    <SocialButton
        text='real buttons have curves'
        onPress={() => window.alert('SocialButton Button Pressed!')}
    />
)

export default class SocialButton extends Component {
    static propTypes = {
        onPress: PropTypes.func,
        text: PropTypes.string,
        children: PropTypes.string,
        backgroundColor: PropTypes.string,
        type: PropTypes.string,
        enabled: PropTypes.bool,
    }
    static defaultProps = {
        enabled: true
    }
    getText() {
        const buttonText = this.props.text || this.props.children || ''
        return buttonText.toUpperCase()
    }

    render() {
        let buttonStyle = styles.button;
        switch (this.props.type) {
            case 'facebook':
                buttonStyle = styles.facebookButton;
                break;
            case 'twitter':
                buttonStyle = styles.twitterButton;
                break;
            case 'google':
                buttonStyle = styles.googleButton;
                break;
            default:
                buttonStyle = styles.button;
        }
        return (
            <TouchableOpacity style={buttonStyle} onPress={this.props.enabled ? this.props.onPress : null}>
                <Icon style={styles.icon} name={this.props.type} color="#fff" />
                <Text style={styles.buttonText}>{this.getText()}</Text>
            </TouchableOpacity>
        )
    }
}
