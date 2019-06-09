import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Home';
import Login from './Login';
import SplaceScreen from './SplaceScreen';

const MainNavigator = createStackNavigator({
  SplaceScreen:{screen:SplaceScreen},
  Login: {screen: Login},
  Home: {screen: Home},
});

const App = createAppContainer(MainNavigator);

export default App;
