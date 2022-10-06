
import React from "react";


import {Link} from "@react-navigation/native"
import Ionicons from '@expo/vector-icons/FontAwesome';

import { StyleSheet, Text, View,Image,Button,Alert } from "react-native";


export default function Footer(){
    return(
        <View style={styles.fle}>

<View style={styles.item} >
<Link style={styles.link}to={{screen:"Aashirwad Labs"}}>
<Ionicons name="home" size={42} color="white" />
</Link>
</View>
<View style={styles.item} >
  
<Link style={styles.link}to={{screen:"Sample"}}>
<Ionicons name="file-text-o" style={styles.item} size={42} color='white' />
</Link>

</View>
<View style={styles.item} >
<Link style={styles.link}to={{screen:"Download Report"}}>
<Ionicons style={styles.item} name="download" size={42} color="white" />
</Link>
</View>
{/* <Ionicons name="add" size={42} color="rgba(100,200,400,.9)" /> */}
</View>
    )
}
const styles = StyleSheet.create({


    fle: {
      flex: 1,
      display: "flex",
  
      flexDirection: "row",
  
      
      
      width: '120%',
      
      backgroundColor:'rgba(100,200,400,.8)',
      position: 'absolute', left: 0, right: 0, bottom:0
  
    },
  
    item: {
      marginLeft: "15%"
  
  
    }
}  )