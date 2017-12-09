import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'
import StorybookUI from './storybook'
import 'expo';
const __DEBUG__ = false

AppRegistry.registerComponent('Universal', () => __DEBUG__ ? StorybookUI : App)
