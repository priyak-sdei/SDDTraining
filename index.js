

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';
// import { Provider } from 'react-redux';
// import store from './components/redux/store';


// const AppRedux =()=>(
//     <Provider store={store}>
//         <App/>

//     </Provider>
// )

// AppRegistry.registerComponent(appName, () => AppRedux);

/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/Login';
import Todo from './src/Todo';
import Register from './src/Register'
import RegisterPage from './src/RegisterPage';
import {name as appName} from './app.json';
// import store from './store';
import { Provider } from 'react-redux';

// AppRegistry.registerComponent(appName, () => App);
// AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => Todo);
// AppRegistry.registerComponent(appName, () => Register);
AppRegistry.registerComponent(appName, () => RegisterPage);

