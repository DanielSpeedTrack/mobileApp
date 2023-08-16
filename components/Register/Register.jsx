import { View, Text, ScrollView, StyleSheet, Pressable, Image } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../assets/constants/theme'
import { ActivityIndicator, Box, Flex, TextInput } from '@react-native-material/core'
import { Ionicons } from '@expo/vector-icons'
import images from '../../assets/constants/images'

import { useRegisterUserMutation } from '../../src/services/userAuthApi'
import { Toast } from 'react-native-toast-message/lib/src/Toast'

const Register = ({ navigation }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [registerUser] = useRegisterUserMutation()
    const [postData, setPostData] = useState({
        email: '',
        name: '',
        password: '',
        password2: '',
        tc: true
    })
    const handlePress = async () => {
        setIsLoading(true);
        // console.log(postData);
        const res = await registerUser(postData)
        if (res.data) {

        }
        if (res.error) {
            Toast.show(
                {
                    type: 'warning',
                    position: 'bottom',
                    topOffset: 0,
                    text1: "Warning",
                    text2: "Verifiez tous les champs"
                }
            )
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };
    return (
        <ScrollView contentContainerStyle={styles.scrollContentContainer} style={{ backgroundColor: COLORS.white }}>
            <View style={styles.header}>
                <Text style={styles.registerText} > Register</Text>
            </View>
            <View style={styles.background} >
                {/* <Image source={images.tracking} /> */}
            </View>

            <Flex fill justify='center' direction='row'>
                <View style={styles.form}>
                    <TextInput
                        onChangeText={(target) => setPostData({ ...postData, email: target })}

                        style={styles.input}
                        inputMode='email'
                        placeholder='Email'
                        variant='outlined'
                        color={COLORS.gray}
                        leading={<Ionicons name='mail' size={20} color={COLORS.gray} />}
                    />
                    <TextInput
                        onChangeText={(target) => setPostData({ ...postData, name: target })}
                        style={styles.input}
                        inputMode='email'
                        placeholder='Name'
                        variant='outlined'
                        color={COLORS.gray}
                        leading={<Ionicons name='person' size={20} color={COLORS.gray} />}
                    />

                    <TextInput
                        onChangeText={(target) => setPostData({ ...postData, password: target })}
                        style={styles.input}
                        inputMode='text'
                        variant='outlined'
                        placeholder='Password'
                        color={COLORS.lightBlue}
                        leading={<Ionicons name='lock-closed' size={20} color={COLORS.gray} />}
                    />
                    <TextInput
                        onChangeText={(target) => setPostData({ ...postData, password2: target })}
                        style={styles.input}
                        inputMode='text'
                        variant='outlined'
                        placeholder='Confirm password'
                        color={COLORS.lightBlue}
                        leading={<Ionicons name='lock-closed' size={20} color={COLORS.gray} />}
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
                            <Text style={{ textAlign: 'center', color: COLORS.white, fontSize: 25 }}> Register </Text>

                        )}
                    </Pressable>
                </View>
            </Flex>

            <Flex fill justify='center' direction='row' style={styles.loginSection}>

                <Pressable style={styles.registerBtn} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.registerBtnText} >Login</Text>
                </Pressable>
            </Flex>
            <Box style={{
                height: 200, backgroundColor: COLORS.primary,
                transform: [{ translateY: -30 }],
                zIndex: -1
            }}></Box>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.primary,
        width: '100%',
        padding: 25,
        // borderBottomLeftRadius: 70,
        // borderBottomRightRadius: 70,
        height: 300,
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    background: {
        // position: "absolute",

    },
    registerText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 30
    },
    input: {
        marginTop: 15,


    },
    form: {
        backgroundColor: COLORS.white,

        padding: 20,
        width: '90%',
        shadowColor: 'gray',
        elevation: 50,
        shadowOffset: 20,
        shadowOpacity: 20,
        shadowRadius: 5,
        borderRadius: 10,
        transform: [{ translateY: -80 }],


    },

    registerBtn: {
        padding: 20,
        backgroundColor: COLORS.white,
        width: "80%",
        borderRadius: 70,
        shadowColor: 'gray',
        elevation: 50,
        shadowOffset: 20,
        shadowOpacity: 20,
        shadowRadius: 5
    },
    registerBtnText: {
        textAlign: "center",
        fontWeight: "bold",
        color: COLORS.primary,
        fontSize: 18
    }
})
export default Register