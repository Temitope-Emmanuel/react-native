import React from "react"
import ViewPagerAndroid from "@react-native-community/viewpager"
import { StyleSheet, Text, View } from "react-native"

const ViewPager = () => {
    return(
        <ViewPagerAndroid 
        style={{flex:1}} initialPage={0}
        >
            <View style={[
                styles.pageStyle,styles.page1Style
            ]}>
                <Text style={[styles.textStyle,styles.page2Style]}>
                    First Page
                </Text>
            </View>
            <View style={[styles.pageStyle,styles.page2Style]}>
                <Text style={styles.textStyle}>
                    Second page
                </Text>
            </View>
        </ViewPagerAndroid>
    )
}

const styles = StyleSheet.create({
    pageStyle:{
        justifyContent:"center",
        alignItems:"center",
        padding:20,
        flex:1
    },
    page1Style:{
        backgroundColor:"orange"
    },
    page2Style:{
        backgroundColor:"red"
    },
    textStyle:{
        fontSize:18,
        color:"white"
    }
})

export default ViewPager