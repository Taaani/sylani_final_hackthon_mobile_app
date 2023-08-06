import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, BottomNavigation } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// axios 
import axios from 'axios';

// se
import About from './About';
import Contect from './Contect';
// image
import image from '../../Assets/Images/cloth.jpg'

// order now 
import OrderNow from './OrderNow';


// dashBoards.......
import Dashboard from '../Dashborard/Dashboard';
// products...
import Products from './Products';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function MyComponent() {


    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}

        >
            {/* <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="home" size={size} color={color} />;
                    },
                }}
            /> */}

            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="home" size={size} color={color} />;
                    },
                }}
            />
            <Tab.Screen
                name="Contect"
                component={Contect}
                options={{
                    tabBarLabel: 'Contect',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="phone" size={size} color={color} />;
                    },
                }}
            />

            <Tab.Screen
                name="About"
                component={About}
                options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="information-variant" size={size} color={color} />;
                    },
                }}
            />

            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarLabel: 'Dashboard',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="view-dashboard" size={size} color={color} />;
                    },
                }}
            />

            <Tab.Screen
                name="Order"
                component={OrderNow}
                options={{
                    tabBarLabel: 'Order',
                    tabBarIcon: ({ color, size }) => {
                        return <Icon name="clipboard-list" size={size} color={color} />;
                    },
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },


    container1: {
        padding: 16,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        marginBottom: 16,
    },
    image: {
        height: 200,
    },

    uniqueText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 30,
        marginTop: 20,
        textAlign: "center",

    },
    buyNowButton: {
        marginTop: 10,
        borderRadius: 15,
        textAlign: "center",
        backgroundColor: '#FF5733',
    },

    buttonText: {
        textAlign: "center",
        fontSize: 15,
        fontWeight: 'bold',

    }

});


//  productss....
// const products = [
//     {
//         id: 1,
//         image: require('../../Assets/Images/cloth.jpg'), // Replace with the actual image path
//         name: 'Product 1',
//         description: 'Product 1 description goes here.',
//     },
//     {
//         id: 2,
//         image: require('../../Assets/Images/watch.png'), // Replace with the actual image path
//         name: 'Product 2',
//         description: 'Product 2 description goes here.',
//     },
//     {
//         id: 2,
//         image: require('../../Assets/Images/watch.png'), // Replace with the actual image path
//         name: 'Product 2',
//         description: 'Product 2 description goes here.',
//     },
//     {
//         id: 2,
//         image: require('../../Assets/Images/watch.png'), // Replace with the actual image path
//         name: 'Product 2',
//         description: 'Product 2 description goes here.',
//     },
// ];



function Home() {

    const [isProcessing, setIsProcessing] = useState()
    const [products, setProducts] = useState([])
    const navigation = useNavigation()

    useEffect(() => {
        axios.get("http://10.0.2.2:5000/product/addProduct/getproduct")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data)
            })
            .catch((err) => {
                console.log('Somthing went wrong =>', err);
            })
    }, [])


    return (
        <View>
            <Text style={styles.uniqueText}>Discover our exquisite collection of products!</Text>
            <ScrollView contentContainerStyle={styles.container1}>

                {products.map((product) => (
                    <Card key={product._id} style={styles.card}>
                        <Card.Cover source={image} style={styles.image} />
                        <Card.Content>
                            <Title>Product :{product.pname}</Title>
                            <Paragraph>Catagory:{product.catagory}</Paragraph>
                            <Paragraph>Price:${product.price}</Paragraph>
                            <TouchableOpacity style={styles.buyNowButton} onPress={() => navigation.navigate("Order", { product })}>
                                <Text style={styles.buttonText}>View Details</Text>
                            </TouchableOpacity>
                        </Card.Content>
                    </Card>
                ))}
            </ScrollView>

        </View>
    );
}

