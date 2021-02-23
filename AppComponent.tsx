import React from "react"
import Home from "./Home"
import Toolbar from "./Toolbar"
import ViewPager from "./app/ViewPager"
import DatePicker from "./app/DatePickerAndroid"
import ToastAndroid from "./app/ToastAndroid"
import {AcceptedParams} from "./App"

function getScene(scene:AcceptedParams) {
    switch(scene){
        case 'Home':
            return Home;
        case "Toolbar":
            return Toolbar;
        case "ViewPager":
            return ViewPager;
        case "DatePicker":
            return DatePicker;
        case "ToastAndroid":
            return ToastAndroid;
        default:
            return Home
    }
}

interface IProps {
    scene:AcceptedParams;
    openDrawer:() => void;
    jump:(arg:AcceptedParams) => void
}

const AppComponent:React.FC<IProps> = ({scene,jump,openDrawer}) => {
    const Scene = getScene(scene)

    return (
        <Scene openDrawer={openDrawer} jump={jump} />
    )
}

export default AppComponent