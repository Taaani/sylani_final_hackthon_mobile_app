import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Title, Paragraph, Button, TextInput } from 'react-native-paper';

// image..
import { useRoute } from '@react-navigation/native';

const OrderNowScreen = () => {

    const [customerName, setCustomerName] = useState('');
    const [address, setAddress] = useState('');
    const [zipCode, setZipCode] = useState('');

    const handleOrderNow = () => {
        // Perform the order processing logic here
        console.log('Order placed:', {
            customerName,
            address,
            zipCode,
            productName: 'Product Name', // Replace with the actual product name
            productCategory: 'Product Category', // Replace with the actual product category
        });
    };

    const route = useRoute();
    const { product } = route.params
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Cover source={require('../../Assets/Images/cloth.jpg')} style={styles.image} />
                <Card.Content>
                    <Title>Product Name : {product.pname}</Title>
                    <Paragraph>Product Category: {product.catagory}</Paragraph>
                    <Paragraph>Product Category: {product.price}</Paragraph>
                    <Paragraph style={{ marginBottom: 15 }}>Product Category: {product.size}</Paragraph>

                    <TextInput
                        label="Customer Name"
                        value={customerName}
                        onChangeText={(text) => setCustomerName(text)}
                        style={styles.input}
                    />
                    <TextInput
                        label="Address"
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                        style={styles.input}
                    />
                    <TextInput
                        label="Zip Code"
                        value={zipCode}
                        onChangeText={(text) => setZipCode(text)}
                        style={styles.input}
                    />
                </Card.Content>
                <Card.Actions>
                    <Button mode="contained" onPress={handleOrderNow}>
                        Order Now
                    </Button>
                </Card.Actions>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    card: {
        width: '90%',
    },
    image: {
        height: 200,
    },
    input: {
        marginBottom: 12,
    },
});

export default OrderNowScreen;
