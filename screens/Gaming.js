import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, NativeBaseProvider, Box, Divider, ScrollView, Spinner } from "native-base"
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import ArticleCard from "../components/ArticleCard";
import * as rssParser from 'react-native-rss-parser'

export default function Gaming() {
    const [newsLetter, setNewsletter] = useState([])
    useEffect(() => {
        fetch ('https://gamespot.com/feeds/news')
        .then((response) => response.text())
        .then((responseData) => rssParser.parse(responseData))
        .then((rss) => {
    console.log(rss.title);
    console.log(rss.items.length);
        })
        .catch(error => {
            alert(error)
        })
    }, [])
    return (
        <NativeBaseProvider>
                <ScrollView>
                <SafeAreaView>
                {newsLetter.length > 1 ?(
                    <FlatList
						style={[styles.cards]}
						data={newsLetter}
						renderItem={({ item, index}) => 
                        <ArticleCard article={item} index={index} />}
						keyExtractor={(_, index) => index}
					/>
                ) : (
                    <View>
                        <Spinner color="danger.600" />
                    </View>
                )};
                </SafeAreaView>
                </ScrollView>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    newsContainer: {
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
    newsDescription: {
        padding: 20,
    },
    spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 400
    }
});