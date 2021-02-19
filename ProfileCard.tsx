import React from "react"
import {
    Image, Platform, StyleSheet, Text,
    TouchableHighlight, View,
} from "react-native"


interface IProps {
    image: any;
    occupation: string;
    description: string;
    showThumbnail: boolean;
    name:string;
    onPress:any
}

const ProfileCard: React.FC<IProps> = ({ description, image, occupation,
     showThumbnail,name,onPress }) => {
    let containerStyles = [styles.cardContainer]
    if (showThumbnail) {
        // containerStyles.push(styles.cardThumbnail)
    }
    return (
        <TouchableHighlight onPress={onPress} >
            <View style={[containerStyles,showThumbnail && styles.cardThumbnail]}>
                <View style={styles.cardImageContainer}>
                    <Image style={styles.cardImage} source={image} />
                </View>
                <View style={styles.profileContainer}>
                    <Text style={styles.profileName}>
                        {name}
                    </Text>
                    <Text style={styles.occupation}>
                        {occupation}
                    </Text>
                    <Text style={styles.profileDescription}>
                        {description}
                    </Text>
                </View>
                <View>
                </View>
            </View>
        </TouchableHighlight>
    )
}

const profileCardColor = "dodgerblue"

const styles = StyleSheet.create({
    cardContainer:{
        backgroundColor:profileCardColor,
        width:300,
        height:400,
        borderWidth:3,
        borderRadius:20,
        alignItems:"center",
        ...Platform.select({
          ios:{
            shadowColor:'black',
            shadowOffset:{
              height:10,
              width:5
            },
            shadowOpacity:1
          },
          android:{
            elevation:15
          }
        })
      },
      cardImageContainer:{
        height:120,
        width:120,
        borderRadius:60,
        backgroundColor:"white",
        overflow:"hidden",
        marginTop:25,
        alignItems:"center",
        transform:[
        ],
        ...Platform.select({
          ios:{
            shadowColor:'black',
            shadowOffset:{
              height:10,
              width:5
            },
            shadowOpacity:1
          },
          android:{
            borderWidth:3,
            borderColor:'black',
            elevation:15,
            
          }
        })
      },
      cardImage:{
        width:117.5,
        height:117.5,
        // borderRadius:39.5
      },
      profileContainer:{
        justifyContent:"center",
        margin:25,
        alignItems:"center"
      },
      profileName:{
        color:"white",
        fontWeight:'bold',
        fontSize:24,
        ...Platform.select({
          ios:{
            fontFamily:"American Typewriter"
          },
          android:{
            fontFamily:'monospace'
          }
        }),
        textShadowColor:"black",
        textShadowOffset:{
          width:2,
          height:2
        },
        textShadowRadius:3
      },
      occupation:{
        borderBottomWidth:2,
        paddingBottom:2
        // textDecorationLine:"underline"
      },
      profileDescription:{
        fontStyle:"italic",
        fontFamily:"monospace",
        textShadowColor:'grey',
        textShadowOffset:{
          width:-2,
          height:-2
        },
        textShadowRadius:14
      },
      cardThumbnail:{
          transform:[{scale:0.2}]
      }
})

export default ProfileCard