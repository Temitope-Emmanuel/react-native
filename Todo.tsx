import React from "react"
import {View,Text,StyleSheet} from 'react-native'
import {ITodo} from "./App"
import Button from "./Button"
import TodoButton from "./TodoButton"

interface IProps {
    todo:ITodo;
    handleDelete:() => void
    handleComplete:() => void
}

const Todo:React.FC<IProps> = ({todo,handleComplete,handleDelete}) => (
    <View style={styles.todoContainer}>
        <Text style={styles.todoText}>
            {todo.title}
        </Text>
        <View style={styles.buttons}>
            <TodoButton onPress={handleComplete}
            complete={todo.complete} name="Done"/>

            <TodoButton onPress={handleDelete}
            complete={todo.complete} name="Delete"/>
        </View>
    </View>
)


const styles = StyleSheet.create({
    todoContainer:{
        marginLeft:20,
        marginRight:20,
        marginTop:2.5,
        marginBottom:2.5,
        backgroundColor:'#ffffff',
        borderTopWidth:1,
        borderRightWidth:1,
        borderLeftWidth:1,
        borderColor:'#ededed',
        paddingLeft:14,
        paddingTop:7,
        paddingBottom:7,
        shadowOpacity:.2,
        shadowRadius:3,
        shadowColor:'#000000',
        shadowOffset:{
            width:2,
            height:2
        },
        flexDirection:'row',
        alignItems:'center'
    },
    todoText:{
        fontSize:17
    },
    buttons:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    }
})

export default Todo