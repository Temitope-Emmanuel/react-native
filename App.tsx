import React from "react"
import {TouchableHighlight,AppState,View,Text,StyleSheet,Alert,TextInput} from "react-native"
import Clipboard from "@react-native-community/clipboard"

// const styles = {}

const App = () => {
    const [showMessage,setShowMessage] = React.useState(false)
    const [clipBoardData,setClipBoardText] = React.useState<string[]>([])

    
    React.useEffect(() => {
        Clipboard.setString("Hello Worlds")
        // AppState.addEventListener("change",handleAppStateChange)
    },[])
    const updateClipboard = (newString:string) => {
        Clipboard.setString(newString)
    }
    const pushClipboardToArray = async () => {
        const content = await Clipboard.getString();
        clipBoardData.push(content)
        setClipBoardText([...clipBoardData])
    }

    const handleAppStateChange = (currentAppState:any) => {
        console.log("currentAppState",currentAppState)
    }
    const showAlert = () => {
        Alert.alert("Title","Message!",[
            {
                onPress:() => console.log("Dismiss called..."),
                style:"destructive",
                text:"Cancel"
            },
            {
                text:"Show Message",
                onPress:() => setShowMessage(true)
            }
        ])
    }
    return(
        <View style={styles.container}>
            <Text style={{textAlign:"center"}}>
                Testing Clipboard
            </Text>
            <TextInput style={styles.input}
                onChangeText={updateClipboard}
            />
            <TouchableHighlight style={styles.button}
                onPress={pushClipboardToArray}
            >
                <Text>Click to Add to Array</Text>
            </TouchableHighlight>
            {
                clipBoardData.map((item,idx) => (
                    <Text key={idx}>
                        {item}
                    </Text>
                ))
            }
            {/* <Text>
                Testing App State
            </Text> */}
            {/* <TouchableHighlight onPress={showAlert} style={styles.button} >
                <Text>
                    SHOW ALERT
                </Text>
            </TouchableHighlight>
            {showMessage && <Text>
                Show message - success
                </Text>} */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        flex:1
    },
    // button:{
    //     height:70,
    //     justifyContent:'center',
    //     alignItems:"center",
    //     backgroundColor:"#ededed"
    // },
    input: {
        padding: 10,
        marginTop: 15,
        height: 60,
        backgroundColor: '#dddddd'
        },
        button: {
        backgroundColor: '#dddddd',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginTop: 15,
        }
})

export default App