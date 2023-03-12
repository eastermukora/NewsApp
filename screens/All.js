import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, NativeBaseProvider, Box, Divider, ScrollView, Spinner } from "native-base";
import { services } from "../services/services";
import { useEffect, useState } from "react";
import { endpoint } from "../config/config";
import { SafeAreaView } from "react-native-safe-area-context";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
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
                <ScrollView>
                <SafeAreaView>
                {newsData.length > 1 ?(
                    <FlatList
						style={[styles.cards]}
						data={newsData}
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
		padding: 10
	},
	text: {
		fontSize: 24,
	},
	flex: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 20,
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
	cards: {
		display: "flex",
	},
});
