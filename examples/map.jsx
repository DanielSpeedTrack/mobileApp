{/* <View style={{ marginTop: 200 }}>
                <Text>  {token} e</Text>
            </View>
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
            </View> */}