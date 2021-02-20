import React from "react"
import {
    Easing,StyleSheet,
    View,Animated,Text,TouchableHighlight
} from "react-native"


const Parrallel = () => {
    const animatedTitle = new Animated.Value(-200);
    const animatedSubtitle = new Animated.Value(600);
    const animatedButton = new Animated.Value(800);

    React.useEffect(() => {
        animate()
    },[])
    const animate = () => {
        Animated.parallel([
            Animated.timing(
                animatedTitle,
                {
                    toValue:200,
                    duration:800,
                    useNativeDriver:false
                }
            ),
            Animated.timing(
                animatedSubtitle,
                {
                    toValue:0,
                    duration:1400,
                    delay:800,
                    useNativeDriver:false
                }
            ),
            Animated.timing(
                animatedButton,
                {
                    toValue:0,
                    duration:1000,
                    delay:2200,
                    useNativeDriver:false
                }
            )
        ]).start()
    }

    return(
        <View style={styles.container}>
            <Animated.Text style={[styles.title,{
                marginTop:animatedTitle
            }]} >
                Welcome
            </Animated.Text>
            <Animated.Text style={[styles.subTitle,{
                marginLeft:animatedSubtitle
            }]} >
                Thanks for visiting our app
            </Animated.Text>
            <Animated.View style={{
                marginTop:animatedButton
            }} >
                <TouchableHighlight style={styles.button} >
                    <Text>
                        Get Started
                    </Text>
                </TouchableHighlight>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        textAlign:'center',
        fontSize:20,
        marginBottom:12
    },
    subTitle:{
        width:'100%',
        textAlign:'center',
        fontSize:18,
        opacity:.8
    },
    button:{
        marginTop:25,
        backgroundColor:'#ddd',
        height:55,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:10
    }
})


export default Parrallel