import React from "react"
import {FlatList, StyleSheet, Text, TouchableHighlight} from "react-native"
import {RouteProp} from "@react-navigation/native"
import {StackNavigationProp} from "@react-navigation/stack"
import {RootStackParamsList} from "../../../App"
import { Container } from "../../components/Container"

type StarWarsNavigationProps = StackNavigationProp<RootStackParamsList,"StarWars">
type StarWarsRouteProps = RouteProp<RootStackParamsList,"StarWars">

interface IProps {
    navigation:StarWarsNavigationProps,
    route:StarWarsRouteProps
}
interface linkProps {
    title:keyof RootStackParamsList
}
interface renderProps {
    item:{
        title:keyof RootStackParamsList
    };
    index:number
}


const links:linkProps[] = [
    {title:'People'},
    {title:"StarWars"}
]

const StarWars:React.FC<IProps> = ({navigation,route}) => {
    React.useEffect(() => {
        navigation.setOptions({
            headerTitle:() => (
                <Text style={styles.headerText}>
                    Star Wars
                </Text>
            ),
            headerStyle:{
                backgroundColor:"black",
                height:110
            }
        })
    },[])
    
    const navigate = (link:keyof RootStackParamsList) => {
        navigation.navigate(link)
    }
    const renderItem = ({index,item}:renderProps) => (
        <TouchableHighlight style={[styles.item,{borderTopWidth:index === 0 ? 1 : undefined}]}
            onPress={() => navigate(item.title)}
        >
            <Text style={styles.text}>
                {item.title}
            </Text>
        </TouchableHighlight>
    )

    return(
        <Container>
            <FlatList keyExtractor={item => item.title}
                data={links} renderItem={renderItem}
            />
        </Container>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:20,
        justifyContent:'center',
        borderColor:"rgba(255,232,31,.2)",
        borderBottomWidth:1
    },
    text:{
        color:"#ffe81f",
        fontSize:18
    },
    headerText:{
        fontSize:34,
        color:"rgba(255,232,31,.2)",
        textAlign:"center"
    }
})

export default StarWars