import React from 'react'
import { storiesOf } from '@storybook/react-native'

import SocialButton from './SocialButton'

storiesOf('SocialButton')
  .add('Default', () => (
    <SocialButton
      text='A simple rounded button'
    />
  ))
  .add('Text as children', () => (
    <SocialButton>
        Hello from the children!
    </SocialButton>
  ))
  .add('Facebook Button', () => (
    <SocialButton type="facebook">
        Login With Facebook
    </SocialButton>
  ))
  .add('Twitter Button', () => (
    <SocialButton type="twitter">
        Login With Twitter
    </SocialButton>
  ))
