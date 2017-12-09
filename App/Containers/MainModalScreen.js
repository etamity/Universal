
import { SafeAreaView, StackNavigator } from 'react-navigation';
import * as ModalScreens from './ModalScreens';
import { ApplicationStyles } from '../Themes/'
import MainStackScreen from './MainStackScreen';
const screen = Object.keys(ModalScreens).reduce((routes, key, index) => {
    const path = index === 0 ? '/' : `/${key.toLowerCase()}`;
    routes[key] = {
      screen: ModalScreens[key],
      path: path,
      navigationOptions: ({ navigation }) => ({
        title: ModalScreens[key].navigationOptions.headerTitle,
        ...ApplicationStyles.header
      })
    };
  
    return routes;
  },{
    MainStackScreen: {
      screen: MainStackScreen,
    }});
  
  
  const MainModelScreen = StackNavigator(screen, { headerMode: 'none',
   mode: 'modal'});
  export default MainModelScreen