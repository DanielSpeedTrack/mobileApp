import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Box, Flex } from "@react-native-material/core";
import images from '../../../assets/constants/images';
import { COLORS } from '../../../assets/constants/theme';

const SingleGps = ({ name }) => {
    return (
        <View>
            <Flex fill justify='between' direction='row' style={styles.gps}>
                <View>
                    <Image source={images.logo} style={{ width: 70, height: 70, }} />
                </View>
                <View>
                    <Text>  {name} </Text>
                </View>
            </Flex>
        </View>
    )
}

export default SingleGps

const styles = StyleSheet.create({
    gps: {
        backgroundColor: COLORS.white,
        margin: 7,
        padding: 6,
        borderRadius: 10
    }
})