import React from "react"
import {Button,StyleSheet,View} from "react-native"
import getStyleSheet from "./styles"

const App = () => {
  const [useDark,setUseDark ] = React.useState(false)

  const toggleTheme = () => {
    console.log("clicking")
    setUseDark(!useDark)
  }
  const styles = getStyleSheet(useDark)
  const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor;

  return(
    <View style={styles.container}>
      <View style={styles.box}>
        <Button title={backgroundColor} color="black" onPress={toggleTheme}/>
      </View>
    </View>
  )
}

export default App