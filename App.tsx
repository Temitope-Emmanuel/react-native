import React from 'react'
import {View,Button,StyleSheet,Animated} from "react-native"
import TextInput from "./TextInput"
import Spinner from "./Spinner"
import Parrallel from "./Parrallel"
import Sequence from "./Sequence"
import Stagger from "./Stagger"

const App = () => {
    const marginTop = new Animated.Value(20)
    const animate = () => {
        console.log("calling the animate func")
        Animated.timing(
            marginTop,{
                toValue:200,
                duration:500,
                useNativeDriver:false,
            }
        ).start()
    }
    return(
        <View style={styles.container} >
            <Stagger/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        paddingTop:50
    },
    box:{
        width:150,
        height:150,
        backgroundColor:'red'
    }
})

export default App