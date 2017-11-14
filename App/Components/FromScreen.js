import React, { Component } from 'react'
import { ScrollView, Text, Image, View, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Images } from '../Themes'
import ScrollScreen from 'App/Components/ScrollScreen';
import styles from './Styles/ScrollScreenStyle'

export default class FromScreen extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
          <Form ref='form'
            type={this.props.form.schema}
            options={this.props.form.options}
            value={this.state.form}
            onChange={this.props.onChange}
          />
    )
  }
}
