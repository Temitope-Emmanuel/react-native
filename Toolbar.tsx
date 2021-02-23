import React from "react"
import {View,Text} from "react-native"
import { AcceptedParams } from "./App"


interface IProps {
    openDrawer:() => void;
    jump:(arg:AcceptedParams) => void;
}

const ToolBar:React.FC<IProps> = ({}) => {
    return(
        <View style={{flex:1}}>
            <Text>
                Hello from ToolBar
            </Text>
        </View>
    )
}

export default ToolBar