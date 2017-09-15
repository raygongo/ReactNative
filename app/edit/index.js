import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Chat extends Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        人模狗样
                    </Text>
                </View>
            </View>
        )
    }

}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
        paddingTop:25,
        paddingBottom:12,
        backgroundColor:'red'
    },
    headerTitle:{
        textAlign:'center',
        fontSize:16,
        color:'#fff',
    }
});
