import React from "react"
import {View,Text, StyleSheet, Alert} from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import locationContext  from "../../utils/ScreentProvider"
import {colors} from "../../theme"
import {MaterialBottomTabNavigationProp} from "@react-navigation/material-bottom-tabs"
import {RouteProp} from "@react-navigation/native"
import 'react-native-get-random-values'
import {v4 as uuid} from "uuid"
import {RootStackParamList} from "../../../App2"

type AddCityScreenNavigationProp = MaterialBottomTabNavigationProp<RootStackParamList,"AddCity">
type AddCityScreenRouteProp = RouteProp<RootStackParamList,"AddCity">

interface IProps {
    navigation:AddCityScreenNavigationProp,
    route:AddCityScreenRouteProp
}

interface IText{
    city:string;
    country:string
}


const AddCity:React.FC<IProps> = ({navigation}) => {
    const location = React.useContext(locationContext)
    const [text,setText] = React.useState<IText>({
        city:"",
        country:""
    })

    const handleChangeText = (key:keyof IText) => (value:string) => {
        setText({...text,[key]:value})
    }
    const handleCity = handleChangeText("city")
    const handleCountry = handleChangeText("country")
    

    const handleSubmit = () => {
        if(text.city === "" || text.country === ""){
            Alert.alert("Please complete the form")
        }
        const city = {
            city:text.city,
            country:text.country,
            id:uuid(),
            locations:[]
        }
        setText({
            city:"",
            country:""
        })
        location.addCity(city)
        navigation.navigate('Cities')
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.heading}>
                Cities
            </Text>
            <TextInput onChangeText={handleCity} value={text.city}
                placeholder="City Name" style={styles.input}
            />
            <TextInput onChangeText={handleCountry} value={text.country}
                placeholder="Country Name" style={styles.input}
            />
            <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        Add City
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        height:50,
        backgroundColor:"#666",
        justifyContent:"center",
        alignItems:"center",
        margin:10
    },
    buttonText:{
        color:"white",
        fontSize:18
    },
    heading:{
        color:"white",
        fontSize:10,
        alignSelf:'center'
    },
    container:{
        backgroundColor:colors.primary,
        flex:1,
        justifyContent:"center"
    },
    input:{
        margin:10,
        backgroundColor:"white",
        paddingHorizontal:8,
        height:50
    }
})

export default AddCity