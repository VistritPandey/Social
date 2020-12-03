import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native'
import {Ionicons} from "@expo/vector-icons"

export default PostScreen = () => {
    return (
        <View style={Styles.container}>
            <Text>Post Screen</Text>
        </View>
    )
}


const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})