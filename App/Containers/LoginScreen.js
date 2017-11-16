import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import RoundedButton from 'App/Components/RoundedButton';
import SocialButton from 'App/Components/SocialButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import ScrollScreen from 'App/Components/ScrollScreen';
import { connect } from 'react-redux'
import { Fonts, Colors, Metrics, Images } from 'App/Themes/';

import Constants from 'App/Lib/Constants'
import t from 'tcomb-form-native';
let Form = t.form.Form
import I18n from 'App/I18n';
import AuthActions from 'App/Redux/LoginFromRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.onFormChange = this.onFormChange.bind(this);
    this.doSubmit = this.doSubmit.bind(this);
    this.changeFormType = this.changeFormType.bind(this);
    this.state = {
      formType: props.navigation.state.params.type,
      form: {
        username: '',
        password: '',
        email: ''
      }
    }
  }

  doSubmit(type) {
    switch (type) {
      case Constants.LOGIN:
      this.props.loginAction(this.state.form).then( user => {
        if (user) {
          this.props.navigation.goBack('MainScreen');
        }
      });
      break;
      case Constants.REGISTER:
      this.props.registerAction(this.state.form);
      break;
      case Constants.FORGOT_PASSWORD:
      this.props.loginAction(this.state.form);
      break;
    }

  }
  onFormChange(data) {
    this.setState({ form: data });
  }
  changeFormType(type) {
    this.setState({formType: type})
  }
  render() {
    let formType = this.state.formType;

    let options = {
      fields: {
      }
    }

    let username = {
      label: I18n.t('LoginForm.username'),
      maxLength: 12,
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.usernameHasError,
      error: this.props.form.fields.usernameErrorMsg,
      placeholder : I18n.t('LoginForm.username'),
      autoCapitalize : 'none'
    }

    let email = {
      label: I18n.t('LoginForm.email'),
      keyboardType: 'email-address',
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.emailHasError,
      error: this.props.form.fields.emailErrorMsg,
      placeholder : I18n.t('LoginForm.email'),
      autoCapitalize : 'none'
    }

    let secureTextEntry = !this.props.form.fields.showPassword

    let password = {
      label: I18n.t('LoginForm.password'),
      maxLength: 12,
      secureTextEntry: secureTextEntry,
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.passwordHasError,
      error: this.props.form.fields.passwordErrorMsg,
      placeholder : I18n.t('LoginForm.password'),
    }

    let passwordAgain = {
      label: I18n.t('LoginForm.password_again'),
      secureTextEntry: secureTextEntry,
      maxLength: 12,
      editable: !this.props.form.isFetching,
      hasError: this.props.form.fields.passwordAgainHasError,
      error: this.props.form.fields.passwordAgainErrorMsg,
      placeholder : I18n.t('LoginForm.password_again')
    }

    let loginForm
    switch (formType) {
      /**
       * ### Registration
       * The registration form has 4 fields
       */
      case (Constants.REGISTER):
        loginForm = t.struct({
          username: t.String,
          email: t.String,
          password: t.String,
          passwordAgain: t.String
        })
        options.fields['username'] = username
        options.fields['email'] = email
        options.fields['password'] = password
        options.fields['passwordAgain'] = passwordAgain
  
        break

      /**
       * ### Login
       * The login form has only 2 fields
       */
      case (Constants.LOGIN):
        loginForm = t.struct({
          username: t.String,
          password: t.String
        })
        options.fields['username'] = username
        options.fields['password'] = password
        break

      /**
       * ### Reset password
       * The password reset form has only 1 field
       */
      case (Constants.FORGOT_PASSWORD):
        loginForm = t.struct({
          email: t.String
        })
        options.fields['email'] = email
        break
    } // switch

    /**
     * ### Return
     * returns the Form component with the correct structures
     */
    return (
      <ScrollScreen>
        <View style={styles.centered}>
          <Image source={Images.launch} style={styles.logo} />
        </View>

        <View style={styles.section} >
          <Image source={Images.ready} />
        </View>
        <View style={styles.sectionForm} >
          <Form ref='form'
            type={loginForm}
            options={options}
            value={this.state.form}
            onChange={this.onFormChange}
          />
          <RoundedButton enabled={!this.prob} text="Submit" style={{backgroundColor: "#674172"}} onPress={() => {
            this.doSubmit(this.state.formType);
          }} />
          <RoundedButton text="Forgot Password" onPress={() => {
            this.changeFormType(Constants.FORGOT_PASSWORD);
          }} />
          <RoundedButton text="Go Back" style={{backgroundColor: "#95A5A6"}} onPress={() => {
            this.props.navigation.goBack();
          }} />
        </View>
      </ScrollScreen>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    form: state.login
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (payload) => dispatch(AuthActions.loginRequest(payload)),
    registerAction: (payload) => dispatch(AuthActions.registerRequest(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
