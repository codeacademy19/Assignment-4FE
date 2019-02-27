import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingPage from '../LandingPage/LandingPage.component';
import CreateForm from '../CreateForm/CreateForm.component';

const MainNavigator = createStackNavigator({
  Home: {
    screen: LandingPage,
    navigationOptions: {
      header: null,
    },
  },
  New: {
    screen: CreateForm,
    navigationOptions: {
      header: null,
    },

  },
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    header: null,
  },
});

export default createAppContainer(MainNavigator);

// export default App1;
