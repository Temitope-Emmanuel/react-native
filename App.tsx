import React from "react"
import {createStackNavigator} from "@react-navigation/stack"
import {People} from "./src/views/People"
import {StarWars} from "./src/views/StarWars"



export type RootStackParamsList = {
    People:undefined,
    StarWars:undefined
}

const Stack = createStackNavigator<RootStackParamsList>()

const App = () => (
    <Stack.Navigator initialRouteName="StarWars"
    >
        <Stack.Screen name="StarWars" component={StarWars} />
        <Stack.Screen name="People" component={People}/>
    </Stack.Navigator>
)

export default App