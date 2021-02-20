import React from 'react'

import {AddCity} from "./src/views/AddCity"
import {Cities} from "./src//views/Cities"
import {ICity, LocationContextProvider} from "./src/utils/ScreentProvider"
import {colors} from "./src/theme"
import {City} from "./src/views/City"
// import {colors} from "./theme"
import {createStackNavigator,StackNavigationOptions} from "@react-navigation/stack"
import {createMaterialBottomTabNavigator,MaterialBottomTabNavigationOptions} from "@react-navigation/material-bottom-tabs"


export type RootStackParamList = {
  AddCity:undefined
  Cities:undefined
  City:{
    city:Pick<ICity,"id"| "city">
  };
}
const Stack = createStackNavigator<RootStackParamList>()


const options:StackNavigationOptions = {
  headerStyle:{
    backgroundColor:colors.primary
  },
  headerTintColor:"#fff"
}

interface City {
  city:{
    id:string
  }
}

const CityStackScreen = () => (
  <Stack.Navigator screenOptions={options}>
    <Stack.Screen name="AddCity" component={AddCity} />
  </Stack.Navigator>
)
const Tab = createMaterialBottomTabNavigator()


const App = () => (
    <Tab.Navigator initialRouteName="AddCity" >
        <Tab.Screen name="AddCity" options={{
          title:"Add City"
        }} component={CityStackScreen} />
        <Tab.Screen name="Cities" component={Cities} />
        <Tab.Screen name="City" component={City} />
    </Tab.Navigator>
)

export default LocationContextProvider(App)