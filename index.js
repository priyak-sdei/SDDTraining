/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
//import Flex from './src/flex';
//import Stacks from './src/Stack'
import Root from './src/root';
import {name as appName} from './app.json';


// AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => Flex);
//AppRegistry.registerComponent(appName, () => Stacks);
// AppRegistry.registerComponent(appName, () => Todo);
AppRegistry.registerComponent(appName, () => Root);

