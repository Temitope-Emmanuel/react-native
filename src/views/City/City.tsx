import React from "react"
import {View,Text, ScrollView,TextInput,TouchableOpacity, StyleSheet} from "react-native"
import {MaterialBottomTabNavigationProp} from "@react-navigation/material-bottom-tabs"
import {RouteProp} from "@react-navigation/native"
import {RootStackParamList} from "../../../App"
import LocationContext, { ICity } from "../../utils/ScreentProvider"
import { CenterMessage } from "../../components"
import {colors} from "../../theme"
import {useFocusEffect} from "@react-navigation/native"
type CityNavigationProps = MaterialBottomTabNavigationProp<RootStackParamList,"City">
type CityRouteProps = RouteProp<RootStackParamList,"City">

interface IProps {
    navigation:CityNavigationProps,
    route:CityRouteProps
}
interface IState {
    name:string;
    info:string
}

const City:React.FC<IProps> = ({route:{params,...route},navigation}) => {
    const locationContext = React.useContext(LocationContext)
    const [currentCity,setCurrentCity] = React.useState<ICity>({
        city:"",
        country:"",
        id:"",
        locations:[]
    })
    const [state,setState] = React.useState({
        name:"",
        info:""
    })
    useFocusEffect(
        React.useCallback(() => {
            const foundCity = locationContext.cities.findIndex(item => item.id === params.city.id)
            setCurrentCity(locationContext.cities[foundCity])    
        },[params.city.id,locationContext.cities])
    )
    const addLocation = () => {
        if(state.name === "" || state.info === "")return;
        const location = {
            name:state.name,
            info:state.info
        }
        locationContext.addLocation(currentCity,location)
        setState({
            name:"",
            info:""
        })
    }
    const handleChange = (e:keyof IState) => (value:string) => {
        setState({...state,[e]:value})
    }
    // console.log("this is the params",JSON.stringify(params.city,null,2))
    // console.log("this is the current city",currentCity)
    const handleInfoChange = handleChange("info")
    const handleNameChange = handleChange("name")
    
    return(
        <View style={{flex:1}}>
            <ScrollView
                contentContainerStyle={
                    [!currentCity.locations.length && {flex:1}]
                }
            >
                <View style={[
                    styles.locationsContainer,
                    !currentCity.locations.length && {flex:1,
                    justifyContent:"center"}
                ]}>
                    {!currentCity.locations.length &&
                        <CenterMessage message="No location for this city" />
                    }
                    {
                        currentCity.locations.map((location,idx) => (
                            <View key={idx} style={styles.locationContainer}>
                                <Text style={styles.locationName}>
                                    {location.name} 
                                </Text>
                                <Text style={styles.locationInfo}>
                                    {location.info}
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
            <TextInput onChangeText={handleNameChange} placeholder="Location Name"
             value={state.name} style={styles.input} placeholderTextColor="white"
            />
            <TextInput onChangeText={handleInfoChange} placeholder="Location Info"
             value={state.info} style={[styles.input,styles.input2]} placeholderTextColor="white"
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={addLocation} >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                           Add Location
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default City

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    locationsContainer: {
      paddingBottom: 104
    },
    input: {
      height: 50,
      backgroundColor: colors.primary,
      color: 'white',
      paddingHorizontal: 8,
      position: 'absolute',
      width: '100%',
      bottom: 104,
      left: 0
    },
    input2: {
      bottom: 52
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },
    button: {
      height: 50,
      backgroundColor: "black",
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText: {
      color: 'white'
    },
    locationContainer: {
      padding: 10,
      borderBottomColor: colors.primary,
      borderBottomWidth: 2
    },
    locationName: {
      fontSize: 20
    },
    locationInfo: {
      color: 'rgba(0, 0, 0, .5)'
    }
  })