import React from 'react'
import { StyleSheet } from 'react-native'
import { View, Text } from 'native-base'
import * as Font from 'expo-font'
import { useFonts } from "expo-font";

function Accounts() {
    const [loaded] = useFonts({
        Roboto: require('../../node_modules/native-base/Fonts/Roboto.ttf'),
        Roboto_medium: require('../../node_modules/native-base/Fonts/Roboto_medium.ttf')
    });

    if(!loaded) {
        return null;
    }

    return(
        <View>
            <Text>Account...</Text>
        </View>
    );
}

export default Accounts;