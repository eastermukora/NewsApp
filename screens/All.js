import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList, NativeBaseProvider, Box, Divider, ScrollView } from "native-base";
import { services } from "../services/services";
import { useEffect, useState } from "react";
import { endpoint } from "../config/config";
import { SafeAreaView } from "react-native-safe-area-context";
import ArticleCard from "../components/ArticleCard";

export default function Home() {
	const [newsData, setNewsData] = useState([]);
	useEffect(() => {
		services()
			.then((data) => {
				setNewsData(data);
			})
			.catch((error) => {
				alert(error);
			});
	}, []);
	return (
		<NativeBaseProvider>
			<SafeAreaView>
				<ScrollView>
					<FlatList
						style={[styles.cards]}
						data={newsData}
						renderItem={({ item, index }) => <ArticleCard article={item} index={index} />}
						keyExtractor={(_, index) => index}
					/>
				</ScrollView>
			</SafeAreaView>
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		textAlign: "center",
		padding: 10,
		backgroundColor: "#e0e0e0",
		border: "1px solid #bdbdbd",
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
