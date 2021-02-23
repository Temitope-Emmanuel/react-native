import React from 'react'
import {
    DrawerLayoutAndroid,
    DrawerLayoutAndroidProps,
    Button,View,
} from "react-native"
import Menu from "./Menu"
import AppComponent from "./AppComponent"
import AndroidToolBar from "./AndroidToolBar"

export type AcceptedParams = "Home" | "Toolbar" | "ViewPager" | "DatePicker" | "ToastAndroid"

const App = () => {
    const [scene,setScene] = React.useState<AcceptedParams>("Home")
    const [drawerPosition,setDrawerPosition] = React.useState<"left"| "right">("left")
    const drawerRef = React.useRef<DrawerLayoutAndroid>(null)
    const changeDrawerPosition = () => {
        if(drawerPosition === "left") {
            setDrawerPosition("right")
        }else{
            setDrawerPosition("left")
        }
    }
    const openDrawer = () => {
        drawerRef.current?.openDrawer()
    }
    const jump = (scene:AcceptedParams) => {
        setScene(scene)
        drawerRef.current?.closeDrawer()
    }

    return(
        <DrawerLayoutAndroid ref={drawerRef} renderNavigationView={() => <Menu onPress={jump} />}
            drawerWidth={300} drawerPosition={drawerPosition}
        >
            <AndroidToolBar openDrawer={openDrawer} />
            <View style={{margin:15}}>
                <Button onPress={openDrawer} title="Open Drawer" />
            </View>
            <AppComponent jump={jump} scene={scene}
            openDrawer={openDrawer}
            />
        </DrawerLayoutAndroid>
    )
}

export default App