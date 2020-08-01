import React from 'react'
import { View, Text } from 'native-base'
import { StyleSheet } from 'react-native'
import * as Font from 'expo-font'
import { useFonts } from "expo-font";

function Favorites() {
    const [loaded] = useFonts({
        Roboto: require('../../node_modules/native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('../../node_modules/native-base/Fonts/Roboto_medium.ttf')
    });

    if(!loaded) {
        return null;
    }

    return(
        <View>
            <Text>Favorites...</Text>
        </View>
    );
}

export default Favorites;