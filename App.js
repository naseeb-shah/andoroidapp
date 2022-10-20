import React from "react";
import { NativeRouter, Route,Link, Routes, Outlet } from "react-router-native";

import { StyleSheet, Text, View,Image,Button,Alert } from "react-native";
import Home from "./sai";
import Book from "./book";
import Down from "./down";
import Log from './login/login'
// import { Router } from "react-router-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const  router=createNativeStackNavigator()
const App = () => (
  
<NavigationContainer>
  <router.Navigator>
    
      <router.Screen name='Aashirwad Labs' component={Home}  />

      <router.Screen name='Sample' component={Book}  />
      <router.Screen name='Download Report' component={Down} />
      <router.Screen name='Log In' component={Log} />
      


    </router.Navigator>
    </NavigationContainer>
      


  


);


export default App;