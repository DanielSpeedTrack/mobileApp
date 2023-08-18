import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS } from '../../../assets/constants/theme'
import { ActivityIndicator, Avatar, IconButton } from '@react-native-material/core'
import images from '../../../assets/constants/images'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'

import { getToken, removeToken } from '../../../src/services/AsyncStorageServices'
import { removeAuth } from '../../../src/services/AuthSateSlice'
import { useGetLoggedUserQuery } from '../../../src/services/userAuthApi'

const UserProfile = ({ }) => {
    const [token, setToken] = useState({})
    const dispatch = useDispatch()
    const [StartLogout, setStartLogout] = useState(false)

    const handleRemoveToken = async () => {

        await removeToken()
        setStartLogout(true)
        setTimeout(() => {
            dispatch(removeAuth())

        }, 2000)
        // console.log('LOGOUT');

    }
    const { data, isSuccess } = useGetLoggedUserQuery(token.access)
    console.log("Data ", data);


    useEffect(() => {
        (async () => {
            const token = await getToken()
            if (token) {
                const { access, refresh } = JSON.parse(token)
                setToken({
                    "access": access,
                    "refresh": refresh
                })
                // dispatch(setUserAccessToken({ access_token: access }))
            }
        })();
    }, [])

    return (
        <ScrollView style={{ marginTop: 0 }}>
            <View style={{ height: 250, backgroundColor: COLORS.primary, position: 'relative' }}>
                <Avatar
                    size={150}

                    style={styles.avatar}
                    image={images.logo}
                />
                <IconButton onPress={handleRemoveToken} icon={<Ionicons name='log-out-outline' size={30} color={COLORS.primary} />} style={styles.logout} />
            </View>



            {StartLogout ? (
                <View style={styles.logoutSection} >
                    <ActivityIndicator size='large' color={COLORS.primary} />
                </View>
            ) : (<></>)
            }
        </ScrollView>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    avatar: {
        transform: [{ translateY: 180 }],
        marginLeft: 25
    },
    logout: {
        position: 'absolute',
        top: 70,
        right: 40,
        backgroundColor: COLORS.white,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoutSection: {
        position: 'absolute',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: COLORS.lightOpacity2,
        zIndex: 100,
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
    }
})