import { SafeAreaView, StackNavigator } from 'react-navigation';
import MainTabScreen from './MainTabScreen';
import * as StackScreens from './StackScreens';


const screens = Object.keys(StackScreens).reduce((routes, key, index) => {
  const path = index === 0 ? '/' : `/${key.toLowerCase()}`;
  routes[key] = {
      screen: StackScreens[key],
      path: path
  };

  return routes;
}, {});


const MainStackScreen = StackNavigator({
  MainTabScreen: {
      screen: MainTabScreen,
    },
    NotificationScreen: {
      screen: StackScreens.NotificationScreen,
      path:'/notifications',
      navigationOptions: {
        title: 'Notifications',
      },
    },
    ProfileScreen: {
      screen: StackScreens.ProfileScreen,
      path: '/people/:name',
      navigationOptions: ({ navigation }) => {
        title: `${navigation.state.params.name}'s Profile!`;
      },
    },
  });

  export default MainStackScreen