import {StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import axios from 'axios'
import {Link} from "@react-navigation/native";
const OnbordScreen = ({navigation}) => {
    const [name, setName] = useState("")
  //   handle from submit
    const handleSubmit = async ()=>{
        try{
            const responce = await axios.patch("http://localhost:8080/api/redgester",{
                name
            });
            console.log(responce.message)
        }catch (error){
            console.error(error)
            navigation.navigate('home')
            // alert(error)
        }
    }
  return (
    <SafeAreaView style={styles.conatiner}>
        {/* top progress */}

      {/*top test container*/}
        <View style={{
            justifyContent: "flex-start",
            display: flex,
            alignItems: "flex-start"
        }}>
            <Text>title</Text>
            <Text>description</Text>
        </View>
      {/* form container */}
      <View Style={styles.formcontainer}>
        <TextInput 
            placeholder='Enter name hear '
            keyboardType='default'
            style={styles.input}
            placeholderTextColor='#fff'
            autoCorrect={true}
            value={name}
            onChangeText={(text)=>setName(text.target.text)}
        />
      </View>

    {/*    team and condition */}
        <View style={{
            marginTop: 'auto'
        }}>
            <Text>pls enter the name feilds</Text>
        </View>
    {/* button */}
        <Link to={'home'}>
          <View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit} >
                <Text style={{
                    fontWeight: "bold",
                    color: '#fff'
                }}>Continue</Text>
            </TouchableOpacity>
          </View>
        </Link>
    </SafeAreaView>
  )
}

export default OnbordScreen

const styles = StyleSheet.create({
    conatiner:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 70
    },
    formcontainer: {
    },
    input: {
        backgroundColor: "#000",
        width: 300,
        height: 50,
        borderRadius: 10,
        color: '#ffffff',
    },
    buttoncontainer: {

    },
    button: {
        backgroundColor: '#000',
        width: 300,
        height: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: 15
    },
})