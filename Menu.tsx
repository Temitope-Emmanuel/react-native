import React from "react"
import {View,StyleSheet,Button} from "react-native"
import {AcceptedParams} from "./App"

// let styles;

interface IProps {
    onPress:(arg:AcceptedParams) => void
}

const Menu:React.FC<IProps> = ({onPress}) => {
    
    const handlePress = (arg:AcceptedParams) => () => {
        onPress(arg)
    }

    return(
        <View style={{flex:1}} >
            <View style={styles.button}>
                <Button onPress={handlePress("Home")} title="Home" />
            </View>
            <View style={styles.button}>
                <Button onPress={handlePress("Toolbar")} title="Toolbar Android" />
            </View>
            <View style={styles.button}>
                <Button onPress={handlePress("ViewPager")} title="ViewPager Android" />
            </View>
            <View style={styles.button}>
                <Button onPress={handlePress("DatePicker")} title="Date Picker" />
            </View>
            <View style={styles.button}>
                <Button onPress={handlePress("ToastAndroid")} title="Show Alert" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button:{
        margin:10,
        marginBottom:0
    }
})

export default Menu