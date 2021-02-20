import React from 'react'
import {
    StyleSheet,View,Animated,
    Button,TextInput,Text
} from "react-native"


const TextInputComponent = () => {
    const animatedWidth = new Animated.Value(200)
    const inputRef = React.useRef<HTMLInputElement | any>(null)
    const handleBlur = () => {
        if(inputRef.current){
            inputRef.current.focus()
        }
    }
    const animate = (value:number) => () => {
        console.log("calling the animate func")
        Animated.timing(
            animatedWidth,{
                toValue:value,
                duration:750,
                useNativeDriver:false,
                
            }
        ).start()
    }
    return(
        <View style={styles.container}>
            <Animated.View style={{width:animatedWidth}} >
                <TextInput onBlur={animate(200)} ref={inputRef}
                    style={[styles.input]} onFocus={animate(325)}
                />
            </Animated.View>
            <Button onPress={handleBlur}
                title="Submit"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        paddingTop:50
    },
    input:{
        height:50,
        marginHorizontal:15,
        backgroundColor:"#ededed",
        marginTop:10,
        paddingHorizontal:9
    }
})
export default TextInputComponent