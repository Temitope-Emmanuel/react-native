import React from "react"
import {View,TextInput,StyleSheet} from "react-native"


interface IProps {
    value:string;
    handleChange:any
    submitTodo:() => void
}

const Input:React.FC<IProps> = ({handleChange,value,submitTodo}) => {
    
    // const handleKeyPress = (e:any) => {
    //     if(e.nativeEvent.key === "Enter"){
    //         console.log("true")
    //     }
    // }

    return(
        <View style={styles.inputContainer} >
            <TextInput onChangeText={handleChange} value={value}
            //  onKeyPress={handleKeyPress} 
                style={styles.input} placeholderTextColor="#CACACA"
                placeholder="What needs to be done" selectionColor="#666666"
            />
        </View>
    )
}


const styles = StyleSheet.create({
    inputContainer:{
        marginLeft:20,
        marginRight:20,
        shadowOpacity:0.2,
        shadowRadius:3,
        shadowColor:"#000000",
        shadowOffset:{
            width:2,
            height:2
        }
    },
    input:{
        height:60,
        backgroundColor:"#ffffff",
        paddingLeft:10,
        paddingRight:10
    }
})

export default Input