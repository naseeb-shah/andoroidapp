import { useState } from "react"
import { View ,Text,StyleSheet,ImageBackground,TextInput,TouchableOpacity,ScrollView} from "react-native"
import AnimatedLoader from 'react-native-animated-loader';
import Footer from "./footer";
import sai from './axios'
import Helper from "./sholist"

export default function Down(){
const [re,se]=useState('')
const [reports,ser]=useState([])
const [visible, setVisible] = useState(false);

    const handle=()=>{
        setVisible(true)
        if(re.length==10){
            sai.get(`/report/m/${re}`).then((x)=>{
                // console.log(x.data)
                ser(x.data.reports)
                console.log( reports.length)
                setVisible(false)
                se('')
            })

        }
    }

    return( 
        <View
        style={{flex: 1}}
        >
    <View
  

    >
        
        <ScrollView>
       
        <AnimatedLoader
      visible={visible}
      overlayColor="rgba(0,128,0,0.65)"
      animationStyle={styles.lottie}
      speed={1}>
      <Text>Doing something...</Text>
    </AnimatedLoader>
         <TextInput style={styles.input}
        keyboardType='numeric'
        maxLength={10}
            underlineColorAndroid="transparent"
            placeholder="Mobile Number"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            value={re}
            onChangeText={(text)=>se(text)} />


            
        <TouchableOpacity



style={styles.submitButton}
onPress={
    handle
}>
<Text style={styles.submitButtonText}> Submit </Text>
</TouchableOpacity> 
 


        {reports.map((e)=><Helper elment={e} key={e._id}/>)}
       
        </ScrollView>
    </View>
    <Footer/>
    </View>
    )
}



const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding: 15,
        height: 50,
        borderColor: "rgba(100,200,400,.9)",
        borderWidth: 2,

        borderRadius: 10
    },
    submitButton: {
        // backgroundColor: '#7a42f4',
        padding: 10,
        margin: 5,
       
    
        
    },
    submitButtonText: {
        color:"rgba(100,200,400,.9)",
        
        textAlign:"center",
        fontSize:24,
        borderWidth:2,
        borderRadius:15,
        borderColor: "rgba(100,200,400,.9)",
    },
    sai:{
        marginTop:5,
        marginLeft:18,
        fontSize:20

    },
    main:{
     backgroundColor:'greenyellow',

     
   
    },
    ma:{
        backgroundColor:'white',
        textAlign:"center",
        padding:10,

        borderRadius:15,
        borderColor:"red"




    }
    ,over:{
        overflow:'auto'

    }, lottie: {
        width: 200,
        height: 200,
      },
})