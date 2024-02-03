import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, TouchableHighlight } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const OnboardScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');

    // handle form submit
    const handleSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/user/regester', {
                name,
                email,
                age,
                gender,
            });
            console.log(response);
            // alert(response.data);
        } catch (error) {
            // Alert.alert('Error', 'Server is not found');
            console.error(error)
        }
        console.log(name)
        console.log(email)
        console.log(gender)
        console.log(age)
    };




    return (
        <SafeAreaProvider style={styles.container}>
            {/* top progress */}
            
            {/* top test container */}
            <View style={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                <Text>Title</Text>
                <Text>Description</Text>
            </View>

            {/* form container */}
            <View style={styles.formContainer}>
                <TextInput
                    placeholder="Enter name here"
                    keyboardType="default"
                    style={styles.input}
                    placeholderTextColor="#fff"
                    autoCorrect={true}
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                {/* age */}
                <TextInput
                    placeholder="Enter your age"
                    keyboardType="number-pad"
                    style={styles.input}
                    value={age}
                    placeholderTextColor="#fff"
                    onChangeText={(text) => setAge(text)}
                />
                {/* gender */}
                <TextInput
                    placeholder="Gender"
                    placeholderTextColor="#fff"
                    keyboardType="default"
                    style={styles.input}
                    value={gender}
                    onChangeText={(text) => setGender(text)}
                />
                {/* date of birth */}
                <TextInput
                    placeholder="Enter the email"
                    placeholderTextColor="#fff"
                    keyboardType="email-address"
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>

            {/* terms and conditions */}
            <View style={{ marginTop: 'auto' }}>
                <Text>Please enter the name fields</Text>
            </View>

            {/* button */}
            <View style={styles.buttonGroup}>
                <View>
                    <TouchableHighlight style={styles.button} onPress={handleSubmit}>
                        <Text style={{ fontWeight: 'bold', color: '#fff' }}>Continue</Text>
                    </TouchableHighlight>
                </View>
                {/* skip button */}
                <View style={styles.skipButton}>
                    <TouchableOpacity onPress={()=> navigation.navigate('imagePicker')}>
                        <Text style={{ fontWeight: 'bold', fontSize: 15 }}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaProvider>
    );
};

export default OnboardScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 70,
    },
    input: {
        backgroundColor: '#000',
        width: 300,
        height: 50,
        borderRadius: 10,
        color: '#ffffff',
        padding: 10,
        margin: 4,
    },
    button: {
        backgroundColor: '#000',
        width: 255,
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        margin: 15,
    },
    skipButton: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: 5,
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    formContainer: {
        backgroundColor: 'red',
        padding: 10,

    },
});
