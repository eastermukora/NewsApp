import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Home() {
    return (
        <View>
            <View style={styles.container}>
                <Text styles={styles.text}>This is everything</Text>
            </View>

            <View style={styles.flex}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.date}>Date</Text>
            </View>
            <Divider my={2} bg='#bdbdbd'/>
            <View style={styles.description}>
                <Text style={styles.title}>Description</Text>
            </View>
            <Divider my={2} bg='#bdbdbd'/>
            <View style={styles.flex}>
                <Text style={styles.title}>Title</Text>
                <Text style={styles.date}>Date</Text>
            </View>

            <View style={styles.description}>
                <Text style={styles.title}>Description</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: '#e0e0e0',
        border: '1px solid #bdbdbd'
    },
    text: {
        fontSize:24,
    },
    flex: {
        display: 'flex',
        flexDirection: 'row'
    },
    title: {
        fontSize: 20,
    },
    date: {
        fontSize: 18,
    },
    description: {
        padding: 20,
    },
});