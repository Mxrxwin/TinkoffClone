import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import Search from "../../components/Search";
import UserBar from "./Components/userBar";
import StoryBar from "./Components/storyBar";
import MainPart from "./Components/spendingsAndCashback";

export default function MainPage() {
	return (
		<View style={styles.container}>
			<Search />
			<UserBar />
			<StoryBar />
			<MainPart />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#121212",
		alignItems: "center",
		justifyContent: "flex-start",
	},
});
