import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function SpendingsAndCashback() {
	const Months: string[] = [
		"январе",
		"феврале",
		"марте",
		"апреле",
		"мае",
		"июне",
		"июле",
		"августе",
		"сентябре",
		"октябре",
		"ноябре",
		"декабре",
	];

	const Partners: string[] = [
		"https://play-lh.googleusercontent.com/ADApjX-HvYOpnB4jqpe7UwzTL_sVs5_c8mv0H1ph4b1RYEu7qeXOpQuKdHmWBomv_2I",
		"https://play-lh.googleusercontent.com/tNtGbGhUy8wwUhQPXtHD2ii0WSapYlzQZVQkLxXcudi3bpy62TnbWkGLpMO11I36cg=w240-h480-rw",
		"https://play-lh.googleusercontent.com/ReUnNgZus0gT4id9Bcooumdv0YXnSY4aKMIDatSkE02qvkNg-HQtR8WuixZdFuYy0MQ"
	]

	const SpendingsColors: string[] = [
		"#01bedb",
		"#fde200",
		"#b499ce",
		"#fe9893",
		"#37aa99",
		"#4cdef7",
	];

	return (
		<View style={styles.lineContainer}>
			<View style={styles.fstLine}>
				<TouchableOpacity style={styles.block}>
					<Text style={styles.titleText}>Все операции</Text>
					<Text style={styles.spendings}>
						Трат в {Months[new Date().getMonth()]} 24 214 ₽
					</Text>
					<View style={styles.spendingsLine}>
						<View style={{width: '30%', backgroundColor: SpendingsColors[0]}}></View>
						<View style={{width: '20%', backgroundColor: SpendingsColors[1]}}></View>
						<View style={{width: '15%', backgroundColor: SpendingsColors[2]}}></View>
						<View style={{width: '15%', backgroundColor: SpendingsColors[3]}}></View>
						<View style={{width: '10%', backgroundColor: SpendingsColors[4]}}></View>
						<View style={{width: '10%', backgroundColor: SpendingsColors[5]}}></View>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.block}>
					<View style={styles.cashBackLine}>
						<View style={styles.cashTextLine}>
							<Text style={styles.cashText}>Кэшбэк</Text>
							<Text style={styles.cashText}>и бонусы</Text>
						</View>
						<View style={styles.notifications}>
							<Text style={styles.notificationsText}>2</Text>
						</View>
					</View>
					<View style={styles.partnersBlock}>
						<Image style={styles.partnersImage} source={{ uri: Partners[0]}}/>
						<Image style={styles.partnersImage} source={{ uri: Partners[1]}}/>
						<Image style={styles.partnersImage} source={{ uri: Partners[2]}}/>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	lineContainer: {
		marginTop: 20,
		width: "95%",
	},
	fstLine: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	block: {
		backgroundColor: "#1c1c1e",
		height: 130,
		borderRadius: 30,
		width: "47%",
	},
	spendings: {
		color: "white",
		marginStart: 20,
		marginTop: 5,
		fontFamily: "tregular",
		fontSize: 16,
	},
	spendingsLine: {
		flexDirection: 'row',
		width: '80%',
		marginTop: 20,
		marginLeft: 20,
		height: 15,
		borderRadius: 8,
		overflow: 'hidden'
	},
	titleText: {
		color: "white",
		marginStart: 20,
		marginTop: 20,
		fontFamily: "tmedium",
		fontSize: 16,
	},
	cashText: {
		color: "white",
		marginBottom: 5,
		fontFamily: "tmedium",
		fontSize: 16,
	},
	cashTextLine: {
		marginTop: 20,
		marginStart: 20
	},
	cashBackLine: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		
	},
	notifications: {
		backgroundColor: '#f2290b',
		marginEnd: 20,
		marginTop: 20,
		height: 20,
		width: 20,
		borderRadius: 999,
		justifyContent: 'center',
		alignItems: 'center'
	},
	notificationsText: {
		color: 'white',
		fontSize: 16,
		marginBottom: 3,
		fontFamily: 'tregular'
	},
	partnersBlock: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginHorizontal: 10,
		marginTop: 5
	},
	partnersImage: {
		width: 40,
		height: 40,
		borderRadius: 10
	}
});
