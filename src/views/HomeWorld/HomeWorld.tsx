import React from "react"
import {
    View,Text,ActivityIndicator,StyleSheet
} from "react-native"

interface IProps {
    url:string;
    closeModal:() => void
}

interface ITextProp {
    label:string;
    info:string;
}

const TextContainer:React.FC<ITextProp> = ({info,label}) => (
    <Text style={styles.text}>
        {label}:{info}
    </Text>
)

interface StarWarsPlanet {
    name:string;
    rotation_period:string;
    orbital_periond:string;
    diameter:string;
    climate:string;
    gravity:string;
    terrain:string;
    surface_water:string;
    population:string;
    residents:string[];
    films:string[];
    created:Date;
    edited:Date;
    url:string
}

const HomeWorld:React.FC<IProps> = ({url,closeModal}) => {
    const [data,setData] = React.useState<StarWarsPlanet>({
        name:"",
        rotation_period:"",
        orbital_periond:"",
        diameter:"",
        climate:"",
        gravity:"",
        terrain:"",
        surface_water:"",
        population:"",
        residents:[],
        films:[],
        created:new Date(),
        edited:new Date(),
        url:""
    })
    const [loading,setLoading] = React.useState(false)

    React.useEffect(() => {
        if(url){
            setLoading(true)
            const fetchUrl = url.replace(/^http:\/\//i,'https://')
            fetch(fetchUrl).then(res => res.json()).then(json => {
                setData(json)
                // console.log("this is the json",JSON.stringify(json,null,2))
                setLoading(false)
            }).catch(console.log)
        }
    },[])

    return(
        <View style={styles.container}>
            {
                loading ? 
                <ActivityIndicator color="#ffe81f" /> : 
                <View style={styles.HomeWorldInfoContainer}>
                    <TextContainer label="Name" info={data.name} />
                    <TextContainer label="Population" info={data.population} />
                    <TextContainer label="Climate" info={data.climate} />
                    <TextContainer label="Gravity" info={data.gravity} />
                    <TextContainer label="Terrain" info={data.terrain} />
                    <TextContainer label="Diameter" info={data.diameter} />
                    <Text onPress={closeModal}
                        style={styles.closeButton}
                    >
                        Close Modal
                    </Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#000000",
        paddingTop:20
    },
    HomeWorldInfoContainer:{
        padding:20
    },
    text:{
        color:"#ffe81f"
    },
    closeButton:{
        paddingTop:20,
        color:"white",
        fontSize:14
    }
})

export default HomeWorld