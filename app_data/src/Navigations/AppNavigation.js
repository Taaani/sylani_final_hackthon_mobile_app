import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// stack navigation.......
const stack = createNativeStackNavigator();

// auth screens...........
import Login from '../Screens/Auth/Login';
import Register from '../Screens/Auth/Register';
import ForgotPassword from '../Screens/Auth/ForgotPassword';

// frontend screens ..........
import Home from '../Screens/Frontend/Home';
import About from '../Screens/Frontend/About';
import Contect from '../Screens/Frontend/Contect';

import { useAuthContext } from '../context/AuthContext';

// 
const isAuthenticated = true;

export default function AppNavigation() {

    // let { curUserToken } = useAuthContext();

    // console.log("current user Token => ", curUserToken)

    return (
        <>
            <NavigationContainer>
                <stack.Navigator>

                    {isAuthenticated
                        ? <stack.Group
                            screenOptions={{
                                headerShown: false,
                            }}
                        >
                            {/* frontend screens group */}
                            <stack.Screen name='Home' component={Home} />
                            <stack.Screen name='About' component={About} />
                            <stack.Screen name='Contect' component={Contect} />
                        </stack.Group>
                        : <stack.Group
                            screenOptions={{
                                headerShown: false,
                            }}
                        >
                            {/* login screens group */}
                            <stack.Screen name='Login' component={Login} />
                            <stack.Screen name='Register' component={Register} />
                            <stack.Screen name='ForgotPassword' component={ForgotPassword} />
                        </stack.Group>
                    }


                    {/* frontend screens group */}

                </stack.Navigator>
            </NavigationContainer>
        </>
    )
}

// function Home() {
//     return (
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Contect" component={} />
//         <Tab.Screen name="About" component={ProfileScreen} />
//       </Tab.Navigator>
//     );
//   }
