import {createStackNavigator} from 'react-navigation-stack';
import Auth from '../containers/Auth';
import Home from '../containers/Home';

const AppNavigator = createStackNavigator({
  Home: {screen: Home},
  Auth: {screen: Auth, navigationOptions: {title: 'Log in'}},
});

export default AppNavigator;
