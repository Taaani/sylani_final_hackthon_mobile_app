import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { useState } from 'react';
import { TextInput, Button, ActivityIndicator } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';




// background images source
import backImage from '../../Assets/Images/Celestial.jpg'

const initialState = {
    email: "",

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

    };



    return (
        <ImageBackground source={backImage} style={styles.containerUpr}>

            <View style={styles.container}>
                <Text style={styles.uniqueText}> Reset Password</Text>
                <TextInput
                    label="Email"
                    // value={initialState.email}
                    onChangeText={value => handleChange("email", value)}
                    style={{ borderRadius: 4 }}
                />

                <Button buttonColor='white' mode="contained" style={[styles.buttonStyle, { textColor: "white" }]} loading={isProcessing ? true : false} onPress={handleSubmit}>
                    Submit
                </Button>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Button textColor='white' onPress={() => { navigation.navigate("Register") }}>
                    Don 't have an account ?
                </Button >
                <Button textColor='white' onPress={() => { navigation.navigate("ForgotPassword") }}>
                    Login Now
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