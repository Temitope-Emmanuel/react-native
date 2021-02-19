import React from "react"
import {View,StyleSheet} from 'react-native'
import TabBarItem from "./TabBarItem"
import {todoType} from "./App"

interface IProps {
    type:todoType;
    setType:(arg:todoType) => void
}

const TabBar:React.FC<IProps> = ({setType,type}) => {
    
    const handleSetType = (arg:todoType) => () => {
        setType(arg)
    }
    return(
        <View style={styles.container} >
            <TabBarItem type={type} title="All" setType={handleSetType('All')} />
            <TabBarItem type={type} title="Active" setType={handleSetType('Active')} />
            <TabBarItem type={type} title="Complete" setType={handleSetType('Completed')} />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        height:70,
        flexDirection:'row',
        borderTopWidth:1,
        borderTopColor:"#dddddd"
    }
})

export default TabBar