import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

import Search from "../../components/Search";
import UserBar from "./Components/userBar";
import StoryBar from "./Components/storyBar";
import SpendingsAndCashback from "./Components/spendingsAndCashback";
import MoneyPart from "./Components/moneyPart";


export default function MainPage() {
	return (
		<View style={styles.container}>
			<Search />
			<UserBar />
			<StoryBar />
			<SpendingsAndCashback />
			<MoneyPart />
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
