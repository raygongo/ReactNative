import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Account extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    accout
                </Text>
            </View>
        )
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
