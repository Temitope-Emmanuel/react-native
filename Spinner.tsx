import React from "react"
import {
    Easing,StyleSheet,View,
    Animated,Button,Text
} from "react-native"

const Spinner = () => {
    const [isLoading,setIsLoading] = React.useState(true)
    React.useEffect(() => {
        animate()
        // setTimeout(() => {
        //     setIsLoading(false)
        // },2000)
    },[])
    const animatedRotation = new Animated.Value(0);
    const animate = () => {
        Animated.loop(
            Animated.timing(
                animatedRotation,
                {
                    toValue:1,
                    duration:1800,
                    easing:Easing.linear,
                    useNativeDriver:false
                }
            )
        ).start()
    }
    const rotation = animatedRotation.interpolate({
        inputRange:[0,1],
        outputRange:['0deg','360deg']
    })

    return(
        <View style={styles.container}>
            {isLoading ? 
            <Animated.Image source={require("./spinner.png")}
            style={{
                width:40,
                height:40,
                transform:[
                    {rotate:rotation}
                ]
            }}
            /> : 
            <Text>Welcome</Text>
            }
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
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
export default Spinner