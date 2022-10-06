
import  base from './axios'
import Modal from "react-native-modal";
import AnimatedLoader from 'react-native-animated-loader';
import Footer from './footer';
import { useState } from "react";
import { StyleSheet, Text, View, Image, Button, Alert,         ScrollView
    ,TextInput, TouchableOpacity } from "react-native";



export default function Book() {
    console.log("sai")
    const [visible, setVisible] = useState(false);
    const [re,se]=useState({
        "name":'',
        "fname":'',
        'landmark':'',
        'number':'',
        "vill":'',
    
     })
     const [vis,setvis]=useState(false)
     const [text,stext]=useState(`Success!

     Your Request has been received and
      respond within the next 1 hours.
     `)
    const handle = (e) => {
        setVisible(true)
        for(var  word in re){
         if(re[word]==''){
            // console.log(word)
            alert("Please fill proper Details")
            setVisible(false)
            return
         }
        }

        base.post(`/feed`, {
  
   
            "type":"Sample",
            "name":re.name,
            "mobile":re.number,
            "address":`${re.fname} ,${re.landmark},${re.vill}`
        }
     
    ).then(x=>{
       const na=x.data.reports.name
        setvis(true)
        stext(`        Success!
${na}
        Your Request has been received and respond within the next 1 hours.
        `)
        setVisible(false)
    }).catch(e=>console.log(e))

  se({
        "name":'',
        "fname":'',
        'landmark':'',
        'number':'',
        "vill":'',
    
     })


    }

    return(
        <View
        style={{flex: 1}}
        >
    <View style={styles.main}>
<Text style={styles.sai}>Name (नाम )

</Text>

        <TextInput style={styles.input}
        name="name"
        value={re.name}
        keyboardType="text"
            underlineColorAndroid="transparent"
            placeholder="Name"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={(text) => se({...re,['name']:text})} />
<Text style={styles.sai}>Father Name( पिता का नाम )</Text>
<Modal isVisible={vis}
            onBackdropPress={() => setvis(false)}>
                <View style={
                    styles.ma
                }>
                    <Text>
                    {text}
                    </Text>
                </View>

            </Modal>
        <TextInput style={styles.input}
        name='fname'
        value={re.fname}

            underlineColorAndroid="transparent"
            placeholder="FatherName"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={(text)=>se({...re,['fname']:text})} />

<AnimatedLoader
      visible={visible}
      overlayColor="rgba(0,128,0,0.65)"
      animationStyle={styles.lottie}
      speed={1}>
      <Text>Doing something...</Text>
    </AnimatedLoader>
           

<Text style={styles.sai}>Mobile No.(मोबाइल न.)

</Text>

        <TextInput style={styles.input}
        keyboardType='numeric'
        maxLength={10}
        value={re.number}

            underlineColorAndroid="transparent"
            placeholder="Mobile Number"
            placeholderTextColor="#9a73ef"
            autoCapitalize="none"
            onChangeText={(text)=>se({...re,['number']:text})} />
            
<Text style={styles.sai}>Landmark(नजदीक स्थल )</Text>
            
            <TextInput style={styles.input}
            name='vill'
            value={re.landmark}

                underlineColorAndroid="transparent"
                placeholder="Landmark"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={(text)=>se({...re,['landmark']:text})} />
                <Text  style={styles.sai}>  Village(गांव )</Text>



                <TextInput style={styles.input}
                value={re.vill}
                        underlineColorAndroid="transparent"
                        placeholder="Village"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={(text)=>se({...re,['vill']:text})} />



        <TouchableOpacity



            style={styles.submitButton}
            onPress={
                handle
            }>
            <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
    </View>
<Footer />
    </View>
    )
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        padding: 15,
        height: 50,
        
        borderColor: "white",
        borderWidth: 2,

        borderRadius: 10
    },
    submitButton: {
        // backgroundColor: '#7a42f4',
        padding: 10,
        margin: 5,
        borderRadius:15,
        borderWidth:2,
        borderColor: "white",
       
    
        
    },
    submitButtonText: {
        // color: 'white'
        
        textAlign:"center",
        fontSize:24,
        color:'white'
    },
    sai:{
        marginTop:5,
        marginLeft:18,
        fontSize:20,
        color:"white"

    },
    main:{

        backgroundColor:"rgba(100,200,400,.9)",

     
   
    },
    ma:{
        backgroundColor:'white',
        textAlign:"center",
        padding:10,

        borderRadius:15,
        borderColor:"red"




    }
})