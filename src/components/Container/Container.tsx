import React from 'react'
import {
    StyleSheet,View
} from "react-native"

interface IProps {

}

const Container:React.FC<IProps> = ({children}) => (
    <View style={styles.container}>
        {children}
    </View>
)


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'black'
    }
})

export default Container