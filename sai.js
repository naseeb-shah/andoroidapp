import React from "react";


import { Link } from "@react-navigation/native"


import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import Footer from "./footer";
// import Home from "./sai";


const App = () => (
  <View style={styles.container} >
    <Image style={styles.title} source={require('./img/logo512.jpg')} />

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




  

  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'white'


  },
  title: {
    width: '100%',
    marginBottom: 20
    // ,display:"none",
    ,
    height: '40%'
  },
  sub: {
    marginTop: '36%',
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",

    color: "rgba(100,200,400,.9)",
    textAlign: "center",
  },
  link: {
    backgroundColor: "rgba(100,200,400,.9)",
    color: "white",
    textAlign: "center",
    fontSize: 26,
    borderRadius: 15,
    height: 55
    ,
    margin: 5


  }
});

export default App;