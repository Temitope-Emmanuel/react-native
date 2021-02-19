import React from "react"
import {Image,StyleSheet,View,Text,Platform} from "react-native"
import ProfileCard from "./ProfileCard"

const userImage = require("./profileImage.jpg")


const App = () => {
  const [data,setData] = React.useState([{
    image: userImage,
    name: "Temitope Emmanuel Ojo",
    occupation: "React Native Developer",
    description: `Temitope is a really great Javascript developer.
    He loves using JS to build React Native applications for 
    iOS and Android.`,
    showThumbnail: true
}])

  const handleProfileCardPress = (idx:number) => () => {
    const filteredData = [...data]
    const newShowThumbnail = !data[idx].showThumbnail;
    filteredData.splice(idx,1,{
      ...data[idx],
      showThumbnail:newShowThumbnail
    })
    setData(filteredData)
  }
  const list = data.map(({description,image,name,showThumbnail,occupation},idx) => (
   <ProfileCard key={`card-${idx}`} name={name} description={description} onPress={handleProfileCardPress(idx)}
   image={image} occupation={occupation} showThumbnail={showThumbnail}
   /> 
  ))

  return(
    <View style={styles.container}>
      {list}
    </View>
  )
}


export const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})


export default App