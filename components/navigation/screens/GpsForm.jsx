import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { ActivityIndicator, Box, Flex, Pressable, TextInput } from '@react-native-material/core'
import { COLORS } from '../../../assets/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Dimensions } from 'react-native'
import { useSelector } from 'react-redux'
import { useCreateGpsMutation, useGetGpsQuery } from '../../../src/services/api/GpsManegement'


const GpsForm = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [fromSta, setFromSta] = useState({ code: '' })
    const user = useSelector((state) => state.auth)
    const [createGps] = useCreateGpsMutation(user.user.payload.access)



    const handlePress = async () => {
        setIsLoading(true);
        const res = await createGps({ token: user.user.payload.access, data: { code: fromSta.code } })
        if (res.data) {

            navigation.pop()
        }
        setTimeout(() => {
            setIsLoading(false);
        }, 500);

    };
    return (
        <ScrollView>
            <Flex fill justify='center' p={10} style={styles.from}>
                <View bg={COLORS.white} p={10} fill>
                    <Text > Code du Gps</Text>
                    <TextInput

                        placeholder='Code du GPS'
                        inputMode='text'
                        variant='outlined'
                        onChangeText={(target) => setFromSta({ ...fromSta, code: target })}
                        leading={<Ionicons name='locate' size={25} color={COLORS.primary} />}
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
                            <Text style={{ textAlign: 'center', color: COLORS.white, fontSize: 25 }}> Valider </Text>

                        )}
                    </Pressable>
                </View>
            </Flex>
        </ScrollView>
    )
}

export default GpsForm

const styles = StyleSheet.create({
    from: {
        marginTop: 100,
        backgroundColor: COLORS.white,
        paddingTop: 50,
        paddingBottom: 50,


    }
})