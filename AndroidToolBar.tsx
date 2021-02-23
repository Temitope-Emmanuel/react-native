import React from "react"
import {
    View
} from "react-native"
import ToolBarAndroid from "@react-native-community/toolbar-android"

interface IProps {
    openDrawer:() => void
}

const AndroidToolBar:React.FC<IProps> = ({openDrawer}) => {
    
    const onActionSelected = (index:number) => {
        if(index === 1){
            openDrawer()
        }
    }

    return(
        <View style={{flex:1}}>
            <ToolBarAndroid titleColor="white" title="React Native In Action" subtitle="ToolbarAndroid"
            actions={[
                {title:"Options",show:"always"},
                {title:"Menu",show:"always"}
            ]} onActionSelected={onActionSelected}
                subtitleColor="white" style={{height:56,backgroundColor:"#52998c"}}
            />
        </View>
    )
}


export default AndroidToolBar