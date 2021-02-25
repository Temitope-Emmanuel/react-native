import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import {Picker} from "@react-native-community/picker"
import {ActivityIndicator, Modal,StyleSheet, Text, TouchableHighlight, View} from "react-native"
import { FlatList } from 'react-native-gesture-handler'
import { RootStackParamsList } from '../../../App'
import {Container} from "../../components/Container"
import {HomeWorld} from "../HomeWorld"


type StarWarsNavigationProps = StackNavigationProp<RootStackParamsList,"StarWars">
type StarWarsRouteProps = RouteProp<RootStackParamsList,"StarWars">

interface IProps {
    navigation:StarWarsNavigationProps,
    route:StarWarsRouteProps
}

interface StarWarsCharacter {
    name:string;
    height:string;
    mass:string;
    hair_color:string;
    skin_color:string;
    eye_color:string;
    birth_year:string;
    gender:string;
    homeworld:string;
    films:string[];
    species:string[];
    vehicles:string[];
    starships:string[];
    created:string;
    edited:string;
    url:string
}

type typeGender = "all" | "female" | "male" |"other"

const People:React.FC<IProps> = ({navigation,route}) => {
    const [data,setData] = React.useState<StarWarsCharacter[]>([])
    const [currentData,setCurrentData] = React.useState<StarWarsCharacter[]>([])
    const [loading,setLoading] = React.useState(false)
    const [modalVisible,setModalVisible] = React.useState(false)
    const [gender,setGender] = React.useState<typeGender>("all")
    const [pickerVisible,setPickerVisible] = React.useState(false)
    const [url,setUrl] = React.useState("")

    React.useEffect(() => {
        navigation.setOptions({
            headerTitle:"People",
            headerStyle:{
                borderBottomWidth:1,
                borderBottomColor:"#ffe81f",
                backgroundColor:"black"
            },
            headerTintColor:"#ffe81f",
            headerPressColorAndroid:"white"
        })
        setLoading(true)
        fetch("https://swapi.dev/api/people")
        .then(res => res.json())
        .then(data => {
            setData(data.results)
            setLoading(false)
        })
        .catch(console.log)
    },[])

    React.useEffect(() => {
        if(gender !== "all"){
            const filteredData = data.filter(item => item.gender === gender)
            setCurrentData(filteredData)
        }else{
            setCurrentData(data)
        }
    },[data,gender])

    const openHomeWorld = (arg:string) => () => {
        setUrl(arg)
        setModalVisible(true)
    }
    const closeModal = () => {
        setModalVisible(false)
    }
    const togglePicker = () => {
        setPickerVisible(!pickerVisible)
    }
    const filter = (newGender:typeGender) => {
        setGender(newGender)
    }

    const renderItem = ({item}:{
        item:StarWarsCharacter,
        index:number
    }) => (
        <View style={styles.itemContainer}>
            <Text style={styles.name}>
                {item.name}
            </Text>
            <Text style={styles.info}>
                Height: {item.height}
            </Text>
            <Text style={styles.info}>
                Birth Year: {item.birth_year}
            </Text>
            <Text style={styles.info}>
                Gender: {item.gender}
            </Text>
            <TouchableHighlight onPress={openHomeWorld(item.homeworld)}
                style={styles.button}
            >
                <Text style={{...styles.info}}>
                    View HomeWorld
                </Text>
            </TouchableHighlight>
        </View>
    )



    return(
        <Container>
            <TouchableHighlight onPress={togglePicker}
                style={styles.pickerToggleContainer}
            >
                <Text style={styles.pickerToggle}>
                    {pickerVisible ? "Close Filter" : "Open Filter"}
                </Text>
            </TouchableHighlight>
            {
                loading ? 
                <ActivityIndicator color="#ffe81f"/>:
                <FlatList keyExtractor={item => item.name}
                    data={currentData} renderItem={renderItem}
                />
            }
            <Modal animationType="slide" visible={modalVisible}
                onRequestClose={() => console.log("onreqiest close called")}
            >
                <HomeWorld url={url}
                    closeModal={closeModal}
                />
            </Modal>
            {
                pickerVisible && 
                <View style={styles.pickerContainer}>
                    <Picker onValueChange={(item:any,idx:number) => filter(item)}
                        style={{
                            backgroundColor:"#ffe81f"
                        }} selectedValue={gender}
                    >
                        <Picker.Item value="all" label="All"
                            color="#ffe81f"
                        />
                        <Picker.Item value="male" label="Male"
                        />
                        <Picker.Item value="female" label="Female"
                            color="#ffe81f"
                        />
                        <Picker.Item value="n/a" label="Other"
                        />
                    </Picker>
                </View>
            }
        </Container>
    )
}

const styles = StyleSheet.create({
    pickerToggleContainer:{
        padding:25,
        justifyContent:"center",
        alignItems:'center'
    },
    pickerToggle:{
        color:"#ffe81f"
    },
    pickerContainer:{
        position:"absolute",
        bottom:0,
        right:0,
        left:0
    },
    itemContainer:{
        padding:15,
        borderBottomWidth:1,
        borderBottomColor:"#ffe81f"
    },
    name:{
        color:"#ffe81f",
        fontSize:18
    },
    info:{
        color:"#ffe81f",
        fontSize:14,
        marginTop:5
    },
    button:{
        backgroundColor:"grey",
        padding:3,
        width:"50%",
        alignItems:"center"
    }
})

export default People