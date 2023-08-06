import { View, Text, StyleSheet, ImageBackground, Alert, ActivityIndicator } from 'react-native'
import { useState } from 'react';
import { TextInput, Button, } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
// import jwt from 'jsonwebtoken'
// const secretKey = 'tahirSiddique'

// background images source
import backImage from '../../Assets/Images/Celestial.jpg'

const URL = "http://10.0.2.2:5000";

const initialState = {
    email: "",
    password: "",
}

export default function Login({ navigation }) {
    const [state, setState] = useState(initialState)
    // const [loading, setLoading] = useState(false);
    const [isProcessing, setIsProcessing] = useState(false)
    const [isPasswordShow, setIsPasswordShow] = useState(false)

    const handleChange = (name, value) => {
        console.log("name=>", name);
        console.log("value", value);
        setState((s) => ({ ...s, [name]: value }))

    }
    const handleSubmit = () => {
        console.log(state)

        setIsProcessing(true)
        const { email, password, } = state;
        if (email && password) {

            const newState = { email, password }
            axios.post(`${URL}/account/users/login`, newState)
                .then(res => {
                    console.log(res.data);

                    Alert.alert('Success', "Successfully login")

                    // Handle the response from the server
                    // For example, update your UI based on the response
                })
                .catch(error => {
                    console.log(error);
                    Alert.alert('Error', "")
                    // Handle any errors that occurred during the request
                }).finally(() => {
                    setIsProcessing(false)
                });



        } else {
            Alert.alert('Error', "please fill all the inputs correctly")
            setIsProcessing(false)

        }
        console.log(state)


    };



    return (
        <ImageBackground source={backImage} style={styles.containerUpr}>

            <View style={styles.container}>
                <Text style={styles.uniqueText}>Welcome to the Login Form!</Text>
                <TextInput
                    label="Email"
                    // value={initialState.email}
                    onChangeText={value => handleChange("email", value)}
                    style={{ borderRadius: 4 }}
                />
                <TextInput
                    label="Password"
                    // value={initialState.password}
                    onChangeText={value => handleChange("password", value)}
                    secureTextEntry={!isPasswordShow}
                    style={{ marginVertical: 6, borderRadius: 4 }}
                    right={<TextInput.Icon icon={isPasswordShow ? "eye-remove" : "eye-check"} onPress={() => setIsPasswordShow(!isPasswordShow)} />}
                />
                {!isProcessing
                    ? <Button buttonColor='white' mode="contained" style={[styles.buttonStyle, { textColor: "white" }]} loading={isProcessing ? true : false} onPress={handleSubmit}>
                        Submit
                    </Button>
                    : <ActivityIndicator size="large" color="black" />
                }

            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Button textColor='white' onPress={() => { navigation.navigate("Register") }}>
                    Don 't have an account
                </Button >
                <Button textColor='white' onPress={() => { navigation.navigate("ForgotPassword") }}>
                    Forget Password ?
                </Button>

            </View>

        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    containerUpr: {
        flex: 1,
        justifyContent: "center",


    },

    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },

    buttonStyle: {
        marginTop: 10,
        borderRadius: 4,
        textColor: "red",

        backgroundColor: "#219ebc"
    },
    uniqueText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: "center",

    },
})