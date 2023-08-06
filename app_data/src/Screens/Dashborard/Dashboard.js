import { View, Text, StyleSheet, ImageBackground, Alert, ScrollView, ActivityIndicator } from 'react-native'
import { useState } from 'react';
import { TextInput, Button, } from 'react-native-paper';
import axios from 'axios';
const URL = "http://10.0.2.2:5000";

const initialState = {
    pname: "",
    catagory: "",
    price: "",
    color: "",
    size: "",
}


export default function Dashboard() {

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = (name, value) => {
        console.log("name=>", name);
        console.log("value", value);

        setState((s) => ({ ...s, [name]: value }))

    }

    // handle submit.......
    const handleSubmit = () => {

        setIsProcessing(true)

        const { pname, catagory, price, color, size } = state;


        if (pname && catagory && price, color, size) {
            // setIsProcessing(true)
            const newState = { pname, catagory, price, color, size }
            axios.post(`${URL}/product/addProduct`, newState)
                .then(res => {
                    console.log(res.data);
                    Alert.alert('Success', "product successfully added in catalog")
                    // Handle the response from the server
                    // For example, update your UI based on the response
                })
                .catch(error => {
                    console.log("something went wrong", error);
                    Alert.alert('Error', "something went wrong")

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
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.uniqueText}>Add Product In catalog</Text>
                <TextInput
                    label="Product Name "
                    // value={initialState.email}
                    onChangeText={value => handleChange("pname", value)}
                    style={{ borderRadius: 4, marginBottom: 6 }}
                />
                <TextInput
                    label="Catagory"
                    // value={initialState.email}
                    onChangeText={value => handleChange("catagory", value)}
                    style={{ borderRadius: 4, marginBottom: 6 }}
                />
                <TextInput
                    label="Price"
                    // value={initialState.email}
                    onChangeText={value => handleChange("price", value)}
                    style={{ borderRadius: 4, marginBottom: 6 }}
                />
                <TextInput
                    label="Colour"
                    // value={initialState.email}
                    onChangeText={value => handleChange("color", value)}
                    style={{ borderRadius: 4, marginBottom: 6 }}
                />
                <TextInput
                    label="Size"
                    // value={initialState.email}
                    onChangeText={value => handleChange("size", value)}
                    style={{ borderRadius: 4, marginBottom: 4 }}
                />
                {!isProcessing
                    ? <Button buttonColor='white' mode="contained" style={[styles.buttonStyle, { textColor: "white" }]} onPress={handleSubmit} >
                        Submit
                    </Button>
                    : <ActivityIndicator size="small" color="blue" />
                }


            </View>



        </ScrollView>
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
        marginTop: 20,
        textAlign: "center",
        color: "black"

    },
})