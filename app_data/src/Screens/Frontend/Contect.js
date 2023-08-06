import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';

export default function ContactPage() {
    return (

        <View style={styles.container}>
            <Text style={styles.title}>Contact Us</Text>
            <Text style={styles.heading2}>Discover the magic within, together we'll soar</Text>

            <TextInput
                label="Name"
                mode="outlined"
                style={styles.input}
            />

            <TextInput
                label="Email"
                mode="outlined"
                keyboardType="email-address"
                style={styles.input}
            />

            <TextInput
                label="Message"
                mode="outlined"
                multiline
                numberOfLines={4}
                style={styles.input}
            />

            <Button mode="contained" style={styles.button}>
                Send Message
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    heading2: {
        fontSize: 14,
        marginBottom: 10,
    },
    input: {
        width: '100%',
        marginBottom: 16,
    },
    button: {
        width: '60%',
        marginTop: 24,
        backgroundColor: '#ff5a5f',
    },
});
