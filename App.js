import './App/Config/ReactotronConfig'
import { AppRegistry } from 'react-native'
import App from './App/Containers/App'
import StorybookUI from './storybook'

const __DEBUG__ = false

export default __DEBUG__ ? StorybookUI : App;
