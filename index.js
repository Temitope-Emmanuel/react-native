import  "react-native-gesture-handler"
/**
 * @format
 */

import React from "react"
import {AppRegistry} from 'react-native';
// import Views from './src/views';
import App from "./App"
import {name as appName} from './app.json';


const Root = () => (
    <App/>
)

AppRegistry.registerComponent(appName, () => Root);