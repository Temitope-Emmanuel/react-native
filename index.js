import  "react-native-gesture-handler"
/**
 * @format
 */

import React from "react"
import {AppRegistry} from 'react-native';
// import Views from './src/views';
import App from "./App"
import {name as appName} from './app.json';
import {NavigationContainer} from "@react-navigation/native"

const Root = () => (
    // <NavigationContainer>
        <App/>
    // </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => Root);