import React from "react"
import {View,Text, StyleSheet} from "react-native"
import DatePickerAndroid,{Event} from "@react-native-community/datetimepicker"

const DatePicker = () => {
    const [date,setDate] = React.useState(new Date())
    const [showDate,setShowDate] = React.useState(false)
    const openDatePicker = () => {
        setShowDate(!showDate)
    }

    const onChange = (evt:Event,selectedDate?:Date) => {
        const currentDate = selectedDate || date
        setDate(currentDate)
    }



    return(
        <View style={styles.container}>
            <Text onPress={openDatePicker} style={styles.text}>
                Open DatePicker
            </Text>
            <Text style={styles.text}>
                {date.toString()}
            </Text>
            {showDate && <DatePickerAndroid
            value={date} mode="date" onChange={onChange}
            />}
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
        marginBottom:15,
        fontSize:20
    }
})

export default DatePicker