import { StyleSheet, TextInput, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Search() {
	return (
        <View style={[styles.search, { backgroundColor: "#363636"}]}>
            <Ionicons
                style={{ padding: 5, marginLeft: 10 }}
                name="search-sharp"
                size={22}
                color={"#9d9d9d"}
            />
            <TextInput
                placeholder="Курсы валют"
                placeholderTextColor={"#9d9d9d"}
                clearButtonMode="always"
                autoCapitalize="none"
                style={styles.text}
                /* 					value={searchQuery}
                onChangeText={(query) => handleSearch(query)} */
            />
        </View>
	);
}

const styles = StyleSheet.create({
	search: {
		width: "95%",
		borderWidth: 1,
		borderColor: "#3333",
		borderRadius: 999,
		height: 40,
		flexDirection: "row",
		alignItems: "center",
        marginTop: 40
	},
	text: {
		fontFamily: "tregular",
		color: "#9d9d9d",
		marginLeft: 10,
        marginTop: 3,
        fontSize: 16
	},
});
