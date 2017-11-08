import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'
import StorybookUI from './storybook'

const __DEBUG__ = true

AppRegistry.registerComponent('Universal', () => __DEBUG__ ? StorybookUI : App)
