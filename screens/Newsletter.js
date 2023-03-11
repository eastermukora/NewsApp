import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, NativeBaseProvider, Box, Divider, ScrollView } from "native-base"
import { services } from '../services/services'
import { useEffect, useState } from "react";

export default function Newsletter() {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        services('general')
        .then(data => {
            setNewsData(data)
        })
        .catch(error => {
            alert(error)
        })
    }, [])
    return (
        <NativeBaseProvider>
            <View>
                <View style={styles.container}>
                    <Text styles={styles.text}>Your Newsletters</Text>
                </View>
                <ScrollView
                px={90}
                _contentContainerStyle={{
                    bg: "line.300",
                    px: "44px",
                    w: "100"
                }}
                ></ScrollView>
                <FlatList data={newsData} 
                renderItem={({ item}) => (
                    <Box px={5} py={2} rounded="md" my={2} >
                        {item.title}
                    </Box>
                )}
            keyExtractor={(item) => item.id}/>
            </View>
        </NativeBaseProvider>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20
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