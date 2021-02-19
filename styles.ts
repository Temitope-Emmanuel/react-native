import {
    StyleSheet,
    ViewStyle
} from "react-native"

export const Colors = {
    dark:"black",
    light:"white"
}

const baseContainerStyles:ViewStyle = {
    flex:1,
    justifyContent:"center",
    alignItems:'center',
}
const baseBoxStyles:ViewStyle = {
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    height:150,
    width:150
}

const lightStyleSheet = StyleSheet.create({
    container:{
        ...baseContainerStyles,
        backgroundColor:Colors.light
    },
    box:{
        ...baseBoxStyles,
        borderColor:Colors.dark
    }
})
const darkStyleSheet = StyleSheet.create({
    container:{
        ...baseContainerStyles,
        backgroundColor:Colors.dark
    },
    box:{
        ...baseBoxStyles,
        borderColor:Colors.light
    }
})

export default function getStyleSheet(useDarkTheme:boolean){
    return useDarkTheme ? darkStyleSheet : lightStyleSheet
}