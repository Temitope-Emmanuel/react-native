import React from "react"
import {StyleSheet,View,Animated} from "react-native"


const Sequence = () => {
    const AnimatedValue1 = new Animated.Value(-30);
    const AnimatedValue2 = new Animated.Value(-30);
    const AnimatedValue3 = new Animated.Value(-30);

    const animate = () => {
        const createAnimation = (value:any) => {
            return Animated.timing(
                value,{
                    toValue:290,
                    duration:500,
                    useNativeDriver:false
                }
            )
        }
        Animated.sequence([
            createAnimation(AnimatedValue1),
            createAnimation(AnimatedValue2),
            createAnimation(AnimatedValue3)
        ]).start()
    }
    React.useEffect(() => {
        animate()
    },[])

    return(
        <View style={styles.container}>
            <Animated.Text style={[styles.text,{
                marginTop:AnimatedValue1
            }]} >
                1
            </Animated.Text>
            <Animated.Text style={[styles.text,{
                marginTop:AnimatedValue2
            }]} >
                2
            </Animated.Text>
            <Animated.Text style={[styles.text,{
                marginTop:AnimatedValue3
            }]} >
                3
            </Animated.Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        flexDirection:"row"
    },
    text:{
        marginHorizontal:20,
        fontSize:26
    }
})

export default Sequence