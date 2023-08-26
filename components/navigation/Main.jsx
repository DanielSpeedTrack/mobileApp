import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './Tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GpsManagement from './screens/GpsManagement'
import Suivie from './screens/Suivie'
import GpsForm from './screens/GpsForm'


const Stack = createNativeStackNavigator()
const Main = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen key={"Tab"} name='Tab' component={Tabs} options={{ headerShown: false, headerBackVisible: false }} />
            <Stack.Screen name='GpsManagement' component={GpsManagement}
                options={{
                    headerLargeTitle: false,
                    headerTitle: ''
                }}
            />
            <Stack.Screen name='Suivie' component={Suivie}
                options={{
                    headerLargeTitle: false,
                    headerTitle: ''
                }}
            />
            <Stack.Screen name='GpsForm'
                component={GpsForm}
                options={{
                    headerTitle: 'Formulaire Gps'
                }}

            />
        </Stack.Navigator>
        // <NavigationContainer independent={true} 

        // >




        // </NavigationContainer>
    )
}

export default Main

const styles = StyleSheet.create({})