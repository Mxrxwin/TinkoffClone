import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";

export default function UserBar() {
    return  (
        <View style={styles.lineContainer}>
				<TouchableOpacity style={{ flexDirection: "row" }}>
					<View
						style={{
							borderColor: "#aef511",
							borderWidth: 2,
							borderRadius: 999,
						}}
					>
						<View style={styles.avatar}>
							<Text style={styles.avatarTagName}>Н</Text>
						</View>
					</View>
					<View
						style={{
							marginStart: 15,
							marginVertical: 4,
							justifyContent: "space-between",
						}}
					>
						<View style={{ flexDirection: "row", alignItems: "center" }}>
							<Text style={styles.name}>Никита</Text>
							<Ionicons
								name="chevron-forward"
								size={16}
								color="white"
								style={{ marginTop: 5 }}
							/>
						</View>
						<View style={styles.proBorder}>
							<Text style={styles.proText}>PRO</Text>
						</View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.giftBorder}>
					<Ionicons name="gift" size={24} color="white" />
				</TouchableOpacity>
			</View>
    )
 }


 const styles = StyleSheet.create({
	lineContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "95%",
    	marginTop: 30
	},
	avatar: {
		backgroundColor: "#52555a",
		height: 50,
		width: 50,
		borderRadius: 999,
		borderColor: "#121212",
		borderWidth: 2,
		justifyContent: "center",
		alignItems: "center",
	},
	avatarTagName: {
		fontFamily: "tregular",
		color: "white",
		fontSize: 20,
	},
	name: {
		fontSize: 20,
		color: "white",
		fontFamily: "tmedium",
	},
	proBorder: {
		borderColor: "#aef511",
		borderWidth: 4,
		borderRadius: 999,
		justifyContent: "center",
		alignItems: "center",
		width: 35,
	},
	proText: {
		fontFamily: "tbold",
		color: "white",
		fontSize: 10,
	},
	giftBorder: {
		backgroundColor: "#542bff",
		height: 40,
		width: 40,
		borderRadius: 999,
		alignItems: "center",
		justifyContent: "center",
	},
});