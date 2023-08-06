import React from 'react';
import { View, StyleSheet, Linking } from 'react-native';
import { Text, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AboutPage() {

    const openLinkedIn = () => {
        Linking.openURL('https://www.linkedin.com/');
    };

    const openTwitter = () => {
        Linking.openURL('https://www.twitter.com/');
    };
    const opengithub = () => {
        Linking.openURL('https://www.twitter.com/');
    };
    return (
        <View style={styles.container}>
            <Card style={styles.card}>
                <Card.Content style={styles.content}>
                    <Title style={styles.title}>Muhammad Tahir</Title>
                    <Paragraph style={styles.profession}>Full Stack Web Developer</Paragraph>
                    <Avatar.Image
                        source={require('../../Assets/Images/mydp.png')}
                        size={100}
                        style={styles.avatar}
                    />
                    <View style={styles.aboutBox}>
                        <Text style={styles.aboutHeading}>About Me</Text>
                        <Paragraph style={styles.aboutText}>
                            As a web and mobile application developer, I specialize in creating dynamic and user-friendly experiences across multiple platforms.
                            With a strong foundation in front-end and back-end development, I am proficient in languages such as HTML, CSS, JavaScript, and various
                            frameworks like React and React
                        </Paragraph>
                    </View>
                    <View style={styles.socialMediaContainer}>
                        <Icon.Button
                            name="linkedin"
                            size={24}
                            color="black"
                            backgroundColor="transparent"
                            onPress={() => openLinkedIn()}
                        />
                        <Icon.Button
                            name="github"
                            size={24}
                            color="black"
                            backgroundColor="transparent"
                            onPress={() => opengithub()}
                        />
                        <Icon.Button
                            name="twitter"
                            size={24}
                            color="black"
                            backgroundColor="transparent"
                            onPress={() => openTwitter()}
                        />
                    </View>
                </Card.Content>
            </Card>
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
    card: {
        width: '90%',
        elevation: 3,
        padding: 16,
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    profession: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 16,
    },
    avatar: {
        marginVertical: 16,
    },
    aboutBox: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        width: '100%',
    },
    aboutHeading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        textAlign: "center"
    },
    aboutText: {
        fontSize: 16,
        textAlign: "justify"
    },
    socialMediaContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
});
