import React, {useState} from 'react'
import {Text, View,Button, Image} from "react-native"
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system'
const ImagePick = () =>{
    const [image, setImage] = useState(null);


    // pic image
    const picImage =async () =>{
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: false,
            // allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            selectionLimit: 6,
            presentationStyle: true,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }

    };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <Button style={{padding: 10, margin: 20}} title="Pick an image from camera roll" onPress={picImage} />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, margin: 10, borderRadius: 15 }} />}
            <Button title={"clear"} style={{borderRadius: 10}} onPress={()=> setImage(null)}/>
        </View>
    );
}

export default  ImagePick