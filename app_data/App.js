import { View, Text, StyleSheet, BackHandler } from 'react-native'
import React from 'react'

import AppNavigation from './src/Navigations/AppNavigation'
import AuthContextProvider from './src/context/AuthContext'

export default function App() {
    return (
        <>
            <AuthContextProvider>

                <AppNavigation />
            </AuthContextProvider>
        </>
    )
}

const styles = StyleSheet.create({
    flexContainer: {

        // alignItems: "center",
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        BackgroundColor: "white"





    }
})