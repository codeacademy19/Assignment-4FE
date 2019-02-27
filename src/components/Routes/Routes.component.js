import { createStackNavigator, createAppContainer } from 'react-navigation';
import LandingPage from '../LandingPage/LandingPage.component';
import CreateForm from '../CreateForm/CreateForm.component';
import FillForm from '../FillForm/FillForm.component';

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
  Fill: {
    screen: FillForm,
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
