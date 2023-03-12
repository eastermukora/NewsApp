import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function ArticleCard({ article, index }) {
	return (
        <View style={[styles.card, index > 0 ? styles.border : null]}>
			{/* Check if article image is present before displaying it */}
			{article.urlToImage && (
				<Image
					source={{
						uri: article.urlToImage,
					}}
					// height and width are a must
					style={styles.image}
				/>
			)}
			<Text style={styles.cardTitle}>{article.title}</Text>
			<Text style={styles.cardDescription}>{article.description}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	card: {
		paddingHorizontal: 10,
		paddingVertical: 20,
	},
	border: {
		borderTopWidth: 1,
		borderColor: "#0003",
	},
	cardTitle: {
		fontSize: 16,
		fontWeight: "600",
	},
	cardDescription: {
        fontSize: 12,
	},

	image: {
		height: 200,
		width: "100%",
	},
});

export default ArticleCard;
