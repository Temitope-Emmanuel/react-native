import React from 'react'
import {Text,TouchableHighlight,StyleSheet} from 'react-native'

interface IProps {
    onPress:any;
    complete:boolean;
    name:string
}

const TodoButton:React.FC<IProps> = ({complete,name,onPress}) => (
    <TouchableHighlight underlayColor="#efefef"
        onPress={onPress} style={styles.button}
    >
        <Text
            style={[
                styles.text,
                complete ? styles.complete : null,
                name === 'Delete' ? styles.deleteButton : null
            ]}
        >
            {name !== "Done" ? name : complete ? "Task Completed" : "Active"}
        </Text>
    </TouchableHighlight>
)

const styles = StyleSheet.create({
    button:{
        alignSelf:"flex-end",
        padding:7,
        borderColor:"#ededed",
        borderWidth:1,
        borderRadius:4,
        marginRight:5
    },
    text:{
        color:"#666666"
    },
    complete:{
        color:'green',
        fontWeight:'bold'
    },
    deleteButton:{
        color:'rgba(175,47,47,1)'
    }
})

export default TodoButton