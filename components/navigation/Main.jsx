import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Tabs'

const Main = () => {
    return (
        <NavigationContainer independent={true}>
            <Tabs />
        </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})