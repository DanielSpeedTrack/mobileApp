import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Profile = () => {
    const [markerPosition, setMarkerPosition] = useState({
        latitude: 37.78825, // Latitude initiale
        longitude: -122.4324, // Longitude initiale
    });

    useEffect(() => {
        // Interval pour changer la position du marker toutes les 0,5 secondes
        const markerInterval = setInterval(updateMarkerPosition, 500);

        return () => {
            // Nettoyer l'intervalle lorsque le composant est démonté
            clearInterval(markerInterval);
        };
    }, []);

    const updateMarkerPosition = () => {
        // Générer une nouvelle position aléatoire pour le marker
        const newLatitude = markerPosition.latitude + (Math.random() - 0.5) * 0.003;
        const newLongitude = markerPosition.longitude + (Math.random() - 0.5) * 0.003;

        setMarkerPosition({
            latitude: newLatitude,
            longitude: newLongitude,
        });
    };

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker coordinate={markerPosition} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
});

export default Profile;
