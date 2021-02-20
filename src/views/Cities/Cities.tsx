import React from "react"
import {Text, View,ScrollView,TouchableWithoutFeedback, StyleSheet} from "react-native"
import {CenterMessage} from "../../components/CenterMessage"
import {colors} from "../../theme"
import locationContext from "../../utils/ScreentProvider"
import { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs"
import { RouteProp } from "@react-navigation/native"
import { RootStackParamList } from "../../../App2"
import {ICity} from "../../utils/ScreentProvider"

type AddCityScreenNavigationProp = MaterialBottomTabNavigationProp<RootStackParamList,"Cities">
type AddCityScreenRouteProp = RouteProp<RootStackParamList,"Cities">

interface IProps {
    navigation:AddCityScreenNavigationProp,
    route:AddCityScreenRouteProp
}


const Cities:React.FC<IProps> = ({navigation,...props}) => {
    const {cities} = React.useContext(locationContext)

    const navigate = (item:ICity) => () => {
        // console.log("this is the item detail",JSON.stringify(item,null,2))
        navigation.navigate('City',{city:{id:item.id,city:item.city}})
    }
    return(
        <ScrollView contentContainerStyle={[!cities.length && {flex:1}]}>
            <View style={[
                !cities.length &&
                {justifyContent:"center",flex:1}
            ]}>
                {
                    !cities.length && 
                    <CenterMessage message="No saved cities"/>
                }
                {
                    cities.map(item => (
                        <TouchableWithoutFeedback key={item.id} onPress={navigate(item)}>
                            <View style={styles.cityContainer}>
                                <Text style={styles.city}>
                                    {item.city}
                                </Text>
                                <Text style={styles.country}>
                                    {item.country}
                                </Text>
                            </View>
                        </TouchableWithoutFeedback>
                    ))
                }
            </View>
        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    cityContainer:{
        padding:10,
        borderBottomWidth:2,
        borderBottomColor:colors.primary
    },
    city:{
        fontSize:20
    },
    country:{
        color:'rgba(0,0,0,.5)'
    }
})

export default Cities