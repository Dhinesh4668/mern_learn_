import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'

const OnbordScreen = () => {
  return (
    <View style={styles.conatiner}>
        {/* top progress */}
      <View Style={styles.progress}></View>

      {/* form container */}
      <View Style={styles.formcontainer}>
        <TextInput 
            placeholder='Enter name hear '
            keyboardType='default'
            style={styles.input}
        />
      </View>
    {/* button */}
      <View>
        <TouchableOpacity style={styles.button}>
            <Text>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnbordScreen

const styles = StyleSheet.create({
    conatiner:{
        flex: 1,
        backgroundColor: '#fff'
    },
    progress: {},
    formcontainer: {

    },
    input: {},
    buttoncontainer: {},
    button: {}
})