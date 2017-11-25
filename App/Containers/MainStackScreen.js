import { SafeAreaView, StackNavigator } from 'react-navigation';
import MainTabScreen from './MainTabScreen';
import * as StackScreens from './StackScreens';

const MainStackScreen = StackNavigator({
    Root: {
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