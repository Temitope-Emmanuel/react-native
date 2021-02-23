import React from "react"
import {View,Text,ToastAndroid, StyleSheet} from "react-native"


const Toast = () => {
    const basicToast = () => {
        ToastAndroid.show("Hello World",ToastAndroid.LONG)
    }
    const gravityToast = () => {
        ToastAndroid.showWithGravity("Toast with Graivity",ToastAndroid.LONG,ToastAndroid.CENTER)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.button} onPress={basicToast}>
                Open Basic Toast
            </Text>
            <Text style={styles.button} onPress={gravityToast}>
                Open gravity Toast
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        marginBottom:10,
        color:"blue"
    }
})
export default Toast