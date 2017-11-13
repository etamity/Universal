import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import SocialButton from 'App/Components/SocialButton';
import RoundedButton from 'App/Components/RoundedButton'
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollScreen from 'App/Containers/ScrollScreen';
// Styles
import styles from 'App/Screens/Styles/LaunchScreenStyles';
import { Fonts, Colors, Metrics, Images } from 'App/Themes/';

import Shared from 'App/Lib/Shared';
import Parse from 'parse/react-native';

import {
    REGISTER,
    LOGIN,
    FORGOT_PASSWORD
} from 'App/Lib/Constants';

import t from 'tcomb-form-native';
let Form = t.form.Form
import I18n from 'App/I18n';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.doSocialLogin = this.doSocialLogin.bind(this);
    }
    doSocialLogin(type) {
        Shared.App.loginWithSocial(type);
    }

    render() {
        let formType = LOGIN

        let options = {
            fields: {
            }
        }

        let username = {
            label: I18n.t('LoginForm.username'),
            maxLength: 12,
            editable: !this.props.form.isFetching,
            hasError: this.props.form.fields.usernameHasError,
            error: this.props.form.fields.usernameErrorMsg
        }

        let email = {
            label: I18n.t('LoginForm.email'),
            keyboardType: 'email-address',
            editable: !this.props.form.isFetching,
            hasError: this.props.form.fields.emailHasError,
            error: this.props.form.fields.emailErrorMsg
        }

        let secureTextEntry = !this.props.form.fields.showPassword

        let password = {
            label: I18n.t('LoginForm.password'),
            maxLength: 12,
            secureTextEntry: secureTextEntry,
            editable: !this.props.form.isFetching,
            hasError: this.props.form.fields.passwordHasError,
            error: this.props.form.fields.passwordErrorMsg
        }

        let passwordAgain = {
            label: I18n.t('LoginForm.password_again'),
            secureTextEntry: secureTextEntry,
            maxLength: 12,
            editable: !this.props.form.isFetching,
            hasError: this.props.form.fields.passwordAgainHasError,
            error: this.props.form.fields.passwordAgainErrorMsg
        }

        let loginForm
        switch (formType) {
            /**
             * ### Registration
             * The registration form has 4 fields
             */
            case (REGISTER):
                loginForm = t.struct({
                    username: t.String,
                    email: t.String,
                    password: t.String,
                    passwordAgain: t.String
                })
                options.fields['username'] = username
                options.fields['username'].placeholder = I18n.t('LoginForm.username')
                options.fields['username'].autoCapitalize = 'none'
                options.fields['email'] = email
                options.fields['email'].placeholder = I18n.t('LoginForm.email')
                options.fields['email'].autoCapitalize = 'none'
                options.fields['password'] = password
                options.fields['password'].placeholder = I18n.t('LoginForm.password')
                options.fields['passwordAgain'] = passwordAgain
                options.fields['passwordAgain'].placeholder = I18n.t('LoginForm.password_again')
                break

            /**
             * ### Login
             * The login form has only 2 fields
             */
            case (LOGIN):
                loginForm = t.struct({
                    username: t.String,
                    password: t.String
                })
                options.fields['username'] = username
                options.fields['username'].placeholder = I18n.t('LoginForm.username')
                options.fields['username'].autoCapitalize = 'none'
                options.fields['password'] = password
                options.fields['password'].placeholder = I18n.t('LoginForm.password')
                break

            /**
             * ### Reset password
             * The password reset form has only 1 field
             */
            case (FORGOT_PASSWORD):
                loginForm = t.struct({
                    email: t.String
                })
                options.fields['email'] = email
                options.fields['email'].autoCapitalize = 'none'
                options.fields['email'].placeholder = I18n.t('LoginForm.email')
                break
        } // switch

        /**
         * ### Return
         * returns the Form component with the correct structures
         */
        return (
            <ScrollScreen>
                <Form ref='form'
                    type={loginForm}
                    options={options}
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </ScrollScreen>

        )
    }
}
