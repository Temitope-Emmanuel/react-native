import React from "react"
import {StyleSheet,View,Animated} from "react-native"


const Stagger = () => {
    const [animatedValues,setAnimatedValues] = React.useState(new Array(100).fill(new Animated.Value(0)))
    const animations = animatedValues.map(value => (
        Animated.timing(
            value,
            {
                toValue:1,
                duration:6000,
                useNativeDriver:false
            }
        )
    ))

    const animate = () => {
        Animated.stagger(15,animations).start()
    }

    React.useEffect(() => {
        animate()
    },[])
    return(
        <View style={styles.container}>
            {
                animatedValues.map((value,idx) => (
                    <Animated.View
                        key={idx} style={[{
                            opacity:value
                        },styles.box]}
                    />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    box:{
        width:15,
        height:15,
        margin:.5,
        backgroundColor:'red'
    }
})


export default Stagger