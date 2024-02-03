import React, { useState, useEffect } from 'react';
import { Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

const ImagePick = () => {
    const [image, setImage] = useState(null);

    const picImage = async (useLibrary) => {
        let result;

        if (useLibrary) {
            result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsMultipleSelection: false,
                aspect: [4, 3],
                quality: 1,
                selectionLimit: 6,
                presentationStyle: true,
            });
        } else {
            await ImagePicker.requestCameraPermissionsAsync();
            result = await ImagePicker.launchCameraAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                aspect: [4, 3],
                quality: 1
            });
        }
        // console.log(image.uri.image)
        if (!result.cancelled) {
            setImage(result.assets[0].uri);
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 10 }}>
            <Button
                style={{ padding: 10, margin: 20 }}
                title="Pick an image from camera roll"
                onPress={() => picImage(true)}
            />
            <Button
                title="Capture from Camera"
                onPress={() => picImage(false)}
            />
            {image && (
                <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200, margin: 10, borderRadius: 15 }}
                />
            )}
            <Button
                title="Clear"
                style={{ borderRadius: 10 }}
                onPress={() => setImage(null)}
            />
        </View>
    );
};

export default ImagePick;
