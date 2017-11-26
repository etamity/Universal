import { SafeAreaView, StackNavigator } from 'react-navigation';
import MainTabScreen from './MainTabScreen';
import * as StackScreens from './StackScreens';
import { ApplicationStyles } from '../Themes/'

const screens = Object.keys(StackScreens).reduce((routes, key, index) => {
  const path = index === 0 ? '/' : `/${key.toLowerCase()}`;
  routes[key] = {
    screen: StackScreens[key],
    path: path,
    navigationOptions: ({ navigation }) => ({
      title: StackScreens[key].navigationOptions.headerTitle,
      headerTintColor: ApplicationStyles.header.headerTintColor,
      headerTitleStyle: ApplicationStyles.header.titleStyle,
      headerStyle: ApplicationStyles.header.headerStyle,
    })
  };

  return routes;
}, {
  MainTabScreen: {
    screen: MainTabScreen,
  }
  });


const MainStackScreen = StackNavigator(screens);

export default MainStackScreen