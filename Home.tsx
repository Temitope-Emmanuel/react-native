import React from "react"
import {
    View,Text,StyleSheet
} from 'react-native'
import { AcceptedParams } from "./App"


interface IProps {
    openDrawer:() => void;
    jump:(arg:AcceptedParams) => void;
}

const Home:React.FC<IProps> = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello, this is an example application showing off some
                android-specific APIs and Components
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
    text:{
        margin:20,
        textAlign:"center",
        fontSize:18
    }
})

export default Home