import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
// import Geolocation from '@react-native-community/geolocation'
import MapView, { Marker, Polyline } from 'react-native-maps'
import { COLORS, SIZES } from '../../../assets/constants/theme'
import MapViewDirections from "react-native-maps-directions";

const Home = () => {

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
        <ScrollView>
            <View style={{ height: SIZES.window }}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 3.8633472,
                        longitude: 11.5113984,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: coordinate.latitide, longitude: coordinate.longitude }}

                    />
                    <MapViewDirections
                        origin={origin}
                        destination={mapRegion}
                        apikey="AIzaSyDhej0DBE18RkFC6eHtcAt0ahm_OYFmSKY"
                        strokeWidth={10}
                        strokeColor={COLORS.tertiary}
                        mode="DRIVING"
                        timePrecision="now"
                        onReady={(re) => {
                            const datav = { distance: re.distance, duration: re.duration };
                            setResult(datav);
                            // console.log(`Distance : ${re.distance}`);
                            // console.log(`Distance : ${re.duration}`);
                        }}
                        onStart={(params) => {
                            // console.log(
                            //     `Started routing between "${params.origin}" and "${params.destination}"`
                            // );
                        }}
                    />
                </MapView>
            </View>
        </ScrollView>

    )
}

export default Home

const styles = StyleSheet.create({
    map: {
        height: "100%",
        zIndex: -2
    }
})


