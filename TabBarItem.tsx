import React from 'react'
import {Text,TouchableHighlight,StyleSheet} from 'react-native'
import {todoType} from "./App"

interface IProps {
    title:string;
    setType:() => void;
    type:todoType
}

const TabBarItem:React.FC<IProps> = ({title,setType,type}) => {
    return(
        <TouchableHighlight onPress={setType}
            underlayColor="#efefef" style={[
                styles.item, type === title ? styles.selected : null,
                styles.border,
                type === title ? styles.selected : null
            ]} 
        >
            <Text style={[
                styles.itemText,
                type === title ? styles.bold : null
            ]}>
                {title}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    item:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    border:{
        borderLeftWidth:1,
        borderLeftColor:"#dddddd"
    },
    itemText:{
        color:"#777777",
        fontSize:16
    },
    selected:{
        backgroundColor:"#ffffff"
    },
    bold:{
        fontWeight:'bold'
    }
})

export default TabBarItem