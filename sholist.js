import { useState,useCallback } from "react"
import { View ,Text,StyleSheet,TouchableOpacity,Linking,Alert} from "react-native"

import sai from './axios'


export default function Helper({elment}){
    // console.log(elment)
    const url=`https://medicallaboratorytechnology-naseeb-shah.vercel.app/rep/${elment._id}`
 const date= new Date(elment.date)
console.log(date)
    const handle=useCallback(async()=>{
        const supported = await Linking.canOpenURL(url);
        if(supported){
            await Linking.openURL(url)
        }
        else{
            Alert.alert(`Don't know how to open this URL: ${url}`);
        }
    },[url])

    return( 
    <View>




            
        <TouchableOpacity



style={styles.submitButton}
onPress={
    handle
}>
<Text style={styles.submitButtonText}> {elment.name} {elment.age}</Text>
</TouchableOpacity>
        
    </View>)
}



const styles = StyleSheet.create({

    submitButton: {
     
    
        padding: 10,
        margin: 5,
        // borderRadius:15,
        
        borderWidth:2,
    
        
    },
    submitButtonText: {
      
        
        textAlign:"left",
        fontSize:24,
    
        borderRadius:15,
    
    color:'white'
    
    },
    sai:{
        marginTop:5,
        marginLeft:18,
        fontSize:20

    },
    main:{
    


     
   
    },
    ma:{
        backgroundColor:"rgba(100,200,400,.9)",
        textAlign:"center",
        padding:10,

        borderRadius:15,
        borderColor:"red"




    }
})