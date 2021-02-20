import React from "react"
import {
    Text,View,StyleSheet
} from "react-native"
import {colors} from "../../theme"

interface IProps {
    message:string
}

const CenterMessage:React.FC<IProps> = ({message}) => (
    <View style={styles.emptyContainer}>
        <Text style={styles.message}>
            {message}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    emptyContainer:{
        padding:10,
        borderBottomWidth:2,
        borderBottomColor:colors.primary
    },
    message:{
        alignSelf:"center",
        fontSize:20
    }
})

export default CenterMessage