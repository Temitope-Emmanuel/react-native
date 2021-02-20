import React from "react"
import AsyncStorage from "@react-native-community/async-storage"
import { Alert } from "react-native"

interface ILocationContext {
    cities:ICity[];
    addCity:(arg:ICity) => void;
    addLocation:(city:ICity,location:ILocation) => void
}

const LocationContext = React.createContext<ILocationContext>(undefined!)

export interface ILocation {name:string,info:string}

export interface ICity {
    id:string;
    locations:ILocation[]
    country:string,
    city:string
}

export const LocationContextProvider = <P extends object>(Component:React.ComponentType<P>) => {
    
    return function Provider({...props}){
        const key ="locationApp"
        const [state,setState] = React.useState<ICity[]>([])

        const getStorageData = async () => {
                const cities = await AsyncStorage.getItem(key)
                console.log("this are the citiest",cities)
                if(cities){
                    const newCities = JSON.parse(cities)
                    setState([...newCities])
                }
            }
       
        React.useEffect(() => {
            getStorageData()
        },[])
        const addCity = (arg:ICity) => {
            setState([...state,arg])
            AsyncStorage.setItem(key,JSON.stringify(state)).then(() => {
                console.log("storage completed")
            }).catch((err) => {
                Alert.alert("something went wrong",JSON.stringify(err,null,2))
            })
        }
        
        const addLocation = (city:ICity,location:ILocation) => {
            const filteredState = [...state]
            const foundIdx = filteredState.findIndex(item => item.id === city.id)
            const newCity = {
                ...state[foundIdx],
                locations:[...state[foundIdx].locations,location]
            }
            filteredState.splice(foundIdx,1,newCity)
            setState(filteredState)
            AsyncStorage.setItem(key,JSON.stringify(filteredState)).then(() => {
                console.log("Storage ipdated")
            }).catch((err) => {
                Alert.alert("something went wrong",JSON.stringify(err,null,2))
            })
        }
        return(
            <LocationContext.Provider value={{
                cities:state,
                addCity:addCity,
                addLocation:addLocation
            }}>
                <Component {...props as P} />
            </LocationContext.Provider>
        )
    }
}

export default LocationContext