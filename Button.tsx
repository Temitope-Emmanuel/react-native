import React from "react"
import {View,Text,StyleSheet,TouchableHighlight} from 'react-native'

interface IProps {
    onClick:any
}

const Button:React.FC<IProps> = ({onClick,children}) => (
    <View style={styles.buttonContainer}>
        <TouchableHighlight
            underlayColor='#efefef'
            style={styles.button} onPress={onClick}
        >
            <Text style={styles.submit}>
                {children}
            </Text>
        </TouchableHighlight>
    </View>
)

const styles = StyleSheet.create({
    buttonContainer:{
        alignItems:'flex-end'
    },
    button:{
        height:50,
        // paddingLeft:20,
        backgroundColor:"#ffffff",
        width:150,
        marginRight:20,
        marginTop:15,
        borderWidth:1,
        borderColor:'rgba(0,0,0,.1)',
        justifyContent:"center",
        alignItems:'center'
    },
    submit:{
        color:'#666666',
        fontWeight:'600'
    }
})

export default Button