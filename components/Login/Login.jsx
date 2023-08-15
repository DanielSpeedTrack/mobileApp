import { View, StyleSheet, ScrollView, Text, Image, ActivityIndicator, Pressable, ToastAndroid } from 'react-native'
import { Box, Flex, TextInput, Stack, Avatar, FAB, } from '@react-native-material/core'
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from 'react'
import { COLORS } from '../../assets/constants/theme'
import images from '../../assets/constants/images'
import { BaseToast } from "react-native-toast-message";
import { StackActions } from '@react-navigation/native';

import axios from 'axios';

const Login = ({ navigation }) => {

    const [data, setdata] = useState({
        email: '',
        password: ''
    })

    const [isLoading, setIsLoading] = useState(false);
    const handlePress = () => {
        // Simulate an asynchronous action (e.g., API request)

        setIsLoading(true);
        // fetch('http://172.20.10.5:8000/api/login/', {
        //     method: 'POST',
        //     body: data
        // }).then((res) => {
        //     console.log(res)
        //     // setIsLoading(false);
        //     if (res.status == 200) {

        //         console.log(res)
        //         ToastAndroid.show('Hello, this is a toast!', ToastAndroid.SHORT);
        //     }
        // })

        // ToastAndroid.show('Hello, this is a toast!', ToastAndroid.SHORT);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        navigation.dispatch(StackActions.popToTop());
        navigation.dispatch(
            StackActions.replace('Main')
        );
    };
    const [passwordHide, setPasswordHide] = useState(true)
    return (

        <ScrollView contentContainerStyle={styles.scrollContentContainer} style={{ backgroundColor: COLORS.white, flex: 1, width: '100%' }}>

            {/* <View style={styles.cercleOne}></View> */}
            <View style={styles.header} ></View>

            <Flex fill justify='center' direction='row' style={{ width: '100%' }}>

                <View style={styles.login}>
                    <View style={styles.logo}>
                        <Image source={images.logo} style={{ width: 150, height: 150 }} />
                    </View>
                    <View style={styles.form}>

                        <TextInput
                            inputContainerStyle={{ backgroundColor: COLORS.lightWhite }}
                            inputMode='text'
                            style={styles.input}
                            onChangeText={(target) => setdata({ ...data, email: target })}
                            value={data.email}
                            placeholder="email"
                            keyboardType="default"
                            importantForAccessibility='auto'
                            variant='outlined'
                            leading={<Ionicons name="person" size={25} color={COLORS.gray} />}
                            color={COLORS.lightBlue}

                        />

                        <TextInput
                            inputContainerStyle={{ backgroundColor: COLORS.lightWhite }}
                            style={styles.input}
                            onChangeText={(target) => setdata({ ...data, password: target })}
                            value={data.password}
                            placeholder="Password"
                            keyboardType="default"
                            importantForAccessibility='auto'
                            variant='outlined'
                            secureTextEntry={passwordHide}
                            inputMode='email'
                            leading={<Ionicons name="lock-closed" size={25} color={COLORS.gray} />}
                            color={COLORS.lightBlue}
                            helperText=''
                            trailing={
                                passwordHide ?
                                    (<Ionicons name='eye' size={25} onPress={() => setPasswordHide(!passwordHide)} color={COLORS.gray} />) :
                                    (<Ionicons name='eye-off' size={25} onPress={() => setPasswordHide(!passwordHide)} color={COLORS.gray} />)}

                        />

                        <Pressable style={{
                            backgroundColor: COLORS.primary,
                            padding: 15,
                            marginTop: 20,
                            borderRadius: 5
                        }}
                            disabled={isLoading}
                            onPress={handlePress}
                        >

                            {isLoading ? (
                                <ActivityIndicator color="white" />
                            ) : (
                                <Text style={{ textAlign: 'center', color: COLORS.white, fontSize: 25 }}> Login </Text>

                            )}
                        </Pressable>
                    </View>
                </View>

            </Flex>

            <Flex fill justify='center' direction='row' style={styles.loginSection}>

                <Pressable style={styles.registerBtn} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerBtnText} >Register</Text>
                </Pressable>
            </Flex>
            <Box style={{
                height: 200, backgroundColor: COLORS.primary,
                transform: [{ translateY: -50 }],
                zIndex: -1
            }}></Box>
            {/* <Flex fill justify='center' direction='row' >
                <View style={{ padding: 25, backgroundColor: COLORS.lightBlue, borderRadius: 20, marginTop: 25 }}>
                    <Ionicons name='logo-google' size={30} />
                </View>
            </Flex> */}
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    header: {
        height: 200,
        backgroundColor: COLORS.primary
    },
    login: {
        transform: [{ translateY: -50 }],
        backgroundColor: COLORS.white,
        width: '90%',
        padding: 30,
        shadowColor: 'gray',
        shadowOffset: 20,
        shadowOpacity: 20,
        elevation: 15,
        shadowRadius: 5,
        borderRadius: 10,
    },

    logo: {
        width: "100%",
        flex: 1,
        alignItems: "center"
    }, input: {
        marginTop: 20
    },
    form: {
        padding: 0,
    },
    loginSection: {
        padding: 25,
        width: '100%'
    },
    loginBtn: {
        backgroundColor: COLORS.primary,
        padding: 20,
        width: '40%',
        borderRadius: 50,
        shadowColor: 'gray',
        shadowOffset: 30,
        shadowOpacity: 5,
        elevation: 15,
        shadowRadius: 15,
    }, loginText: {
        textAlign: 'center',
        color: COLORS.white,
        fontSize: 18
    },
    registerBtn: {
        padding: 20,
        backgroundColor: COLORS.white,
        width: "80%",
        borderRadius: 70,
        shadowColor: 'gray',
        shadowOffset: 20,
        shadowOpacity: 20,
        elevation: 15,
        shadowRadius: 5
    },
    registerBtnText: {
        textAlign: "center",
        fontWeight: "bold",
        color: COLORS.primary,
        fontSize: 18
    }
})
export default Login