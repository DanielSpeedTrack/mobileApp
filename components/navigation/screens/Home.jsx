import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Geolocation from '@react-native-community/geolocation'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { COLORS, SIZES } from '../../../assets/constants/theme'
import MapViewDirections from "react-native-maps-directions";
import { getToken } from '../../../src/services/AsyncStorageServices';
import SingleGps from '../components/SingleGps';
import { Flex } from 'react-native-flex-layout';
import { Ionicons } from '@expo/vector-icons';
import { Divider } from '@react-native-material/core';


const Home = () => {

    const [token, setToken] = useState('')

    const gps = ['GPS-A425S', 'GPS-THD44', 'GPS-B4ES', 'GPS-GS8',]
    const origin = {
        latitude: 3.8381992,
        longitude: 11.4907126,
        latitudeDelta: 0.0999,
        longitudeDelta: 0.0999,
    };

    const [mapRegion, setMapRegion] = useState({
        latitude: 3.8325682,
        longitude: 11.4449561,
        latitudeDelta: 0.0999,
        longitudeDelta: 0.0999,
    });
    const [coordinate, setCoordinate] = useState({
        latitide: 3.88833472,
        longitude: 11.5713984,
    })

    const [coordinate2, setCoordinate2] = useState({
        latitide: 3.8733472,
        longitude: 11.8113984,
    })
    const [routeCoordinates, setRouteCoordinates] = useState({
        latitide: 3.8733472,
        longitude: 11.8113984,
    })
    const [result, setResult] = useState({
        distance: 0,
        duration: 0,
    });
    useEffect(() => {

        (
            async () => {
                const tokens = await getToken()

                const { refresh, access } = JSON.parse(tokens)
                setToken(refresh)
            }
        )()
        const interval = setInterval(() => {
            setCoordinate(prevCoordinate => ({
                ...prevCoordinate,
                latitude: prevCoordinate.latitude + 0.0000000001,
            }));
        }, 500);

        return () => {
            clearInterval(interval);
        };
    }, []);


    return (
        <ScrollView style={{ marginTop: 50 }} >

            <View style={styles.header} >
                <View style={styles.headerContent}>
                    <Text style={styles.welcome}  > <Ionicons name='home' size={70} /> Bienvenue  </Text>
                    <Text style={styles.welcomeMessage}> Profilez au maximum  😀 </Text>
                </View>
            </View>
            <Divider />
            <Flex wrap='wrap' direction='row' fill justify='between' style={{ gap: 10, padding: 20 }}>
                <View style={{ ...styles.card, backgroundColor: COLORS.white }}>

                </View>
                <View style={{ ...styles.card, backgroundColor: COLORS.white }}>

                </View>
                <View style={{ ...styles.card, backgroundColor: COLORS.white }}>

                </View>
                <View style={{ ...styles.card, backgroundColor: COLORS.white }}>

                </View>
            </Flex>
            <View>
                <Flex fill justify='around' direction='row' alignItems='center' >
                    <View>
                        <Ionicons name='locate' size={70} color={COLORS.tertiary} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 40, color: COLORS.tertiary }}>Mes GPS</Text>
                    </View>
                </Flex>
                {gps.map((item, index) => (
                    <SingleGps key={index} name={item} />
                ))}
            </View>
            <View style={{ height: 150 }}></View>
        </ScrollView>

    )
}

export default Home

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 200,
        marginTop: 25,
        display: 'flex',
        justifyContent: "center",
        alignItems: 'center',
        marginBottom: 70

    },
    headerContent: {
        width: '92%',
        height: '100%',
        backgroundColor: COLORS.primary,
        borderRadius: 25,
        padding: 35,
        display: 'flex',
        justifyContent: 'space-between'
    },
    welcome: {
        color: COLORS.white,
        fontSize: 45
    },
    welcomeMessage: {
        color: COLORS.white,
        fontSize: 30
    },
    card: {
        width: '48%',
        height: 150,
        borderRadius: 6,
        shadowOpacity: 6,
        shadowOffset: 5,
        shadowColor: COLORS.gray,
        elevation: 5
    }

})


