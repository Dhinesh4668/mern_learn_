import {Button, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {SafeAreaProvider} from "react-native-safe-area-context";

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaProvider style={{padding: 5}}>
      <Text>HomeScreen</Text>
        <Button title="Go to Onbord"  onPress={()=> navigation.navigate('onbord')}/>
      <>
      <Text>kdjg</Text>
      </>
        <Button title={"image Picker Screen"} onPress={()=>navigation.navigate('imagePicker')} />

    {/*  get form server*/}
      <View>
        <Text>hello</Text>
      </View>
    </SafeAreaProvider>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})