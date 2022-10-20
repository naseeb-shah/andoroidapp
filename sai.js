import React from "react";

import { StatusBar } from 'react-native'

import { Link } from "@react-navigation/native"


import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import Footer from "./footer";
// import Home from "./sai";

import Ionicons from '@expo/vector-icons/FontAwesome';

const App = () => (
  <View style={styles.container} >
          <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "rgb(8,143,143)" translucent = {true}/>

    {/* <Image style={styles.title} source={require('./img/logo512.jpg')} /> */}
{/* <Ionicons  style={styles.u} name="male" size={50}></Ionicons> */}
{/* <Ionicons style={styles.u} name="heart" size={50}></Ionicons> */}
{/* <Ionicons style={styles.u} name="female" size={50}></Ionicons> */}
<Text style={styles.h}>Aashirwad Lab</Text>
<Ionicons style={styles.u} name="heartbeat" size={200}></Ionicons>
    <Text style={styles.sub}>
      We Care Your Health and Wealth

    </Text>

    <Link style={styles.link} to={{ screen: "Sample" }}>

      Sample Request
    </Link>

    <Link style={styles.link} to={{ screen: "Download Report" }}>

      Download Report
    </Link>

 
<Footer />

  </View>
);

const styles = StyleSheet.create({


h:{
color:'white',
fontSize:40
},

  

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'rgb(8, 143, 143)',
    borderWidth:1,
    borderColor:'red'


  },
  title: {
    // width: 100,
    // marginBottom: 20
    // ,display:"none",
    // ,
    // height: '40%',
    borderRadius:25
    ,
    marginLeft:70
  },
  sub: {
    marginTop: '36%',
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",

    color: "white",
    textAlign: "center",
  },


  u:{
color:'white'
,
alignContent:'center',
alignSelf:'center'
  },
  link: {
    // backgroundColor: "rgba(0,00,00,1)",
  
    color: "white",
    textAlign: "center",
    fontSize: 26,
    borderRadius: 15,
    height: 55
    ,
    margin: 5
,
borderWidth:2
,
borderColor:'white'

  }
});

export default App;
