/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import App from './App';
import Routes from './src/components/Routes/Routes.component';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
