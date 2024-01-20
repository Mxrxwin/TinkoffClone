import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

interface Card {
	picture: string,
	number: number,
	paySystem: PaySystem,
}

interface PaySystem {
	pictureWhite: string
	pictureBlack: string,
	id: number,
}

export default function MoneyPart() {
	const paySystem1: PaySystem = {
		pictureWhite: 'https://i.imgur.com/Jcf9GPW.png',
		pictureBlack: 'https://i.imgur.com/H3g1o9f.png',
		id: 0,
	};
	
	const paySystem2: PaySystem = {
		pictureWhite: 'https://i.imgur.com/r7LK9TI.png',
		pictureBlack: 'https://i.imgur.com/u9RKCb2.png',
		id: 1,
	};

	const Card1: Card = {
		picture: 'https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=330&height=212&fit=crop&format=pjpg&auto=webp',
		number: 1234567890123456,
		paySystem: paySystem1, 
	};
	const Card2: Card = {
		picture: 'https://static.nationalgeographic.co.uk/files/styles/image_3200/public/poy1.jpg?w=400&h=200',
		number: 1234567890125125,
		paySystem: paySystem2, 
	};

	return (
		<View style={styles.lineContainer}>
			<View style={styles.block}>
				<View style={styles.rubleIcon}>
					<View style={styles.rubleBorder}>	
						<Text style={styles.ruble}>₽</Text>
					</View>
				</View>
				<View style={styles.moneyLine}>
					<View>
						<Text style={styles.moneyText}>291 656,47 ₽</Text>
						<Text style={styles.cardNameText}>Tinkoff Black</Text>
					</View>
					<View style={styles.cardBlock}>
						<ImageBackground style={styles.cardStyle} imageStyle={styles.cardStyle} source={{uri: Card1.picture }}>
								<View style={styles.cardInnerContainer}>
									<Text style={[styles.cardNumberText, {color: 'white'}]}>{Card1.number.toString().slice(12,16)}</Text>
									<Image style={styles.paySystemImage} source={{uri: Card1.paySystem.pictureWhite}}/>
								</View>
						</ImageBackground>
						<ImageBackground style={styles.cardStyle} imageStyle={styles.cardStyle} source={{uri: Card2.picture }}>
								<View style={styles.cardInnerContainer}>
									<Text style={[styles.cardNumberText, {color: 'white'}]}>{Card2.number.toString().slice(12,16)}</Text>
									<Image style={styles.paySystemImage} source={{uri: Card2.paySystem.pictureWhite}}/>
								</View>
						</ImageBackground>
					</View>
				</View>
			</View>
			<View style={styles.cashBack}>
					<Ionicons name="basket-sharp" size={14} color="white" style={{marginHorizontal: 3}}/>
					<Text style={styles.cashBackText}>10 ₽</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	lineContainer: {
		marginTop: 20,
		width: "95%",
		padding: 20,
		borderRadius: 30,
		backgroundColor: "#1c1c1e",
		height: 130,
		justifyContent: 'space-between',
		flexDirection: 'row',
	},
	block: {
		flexDirection: 'row',
	},
	rubleIcon: {
		height: 40,
		width: 40,
		backgroundColor: "#3f92f0",
		borderRadius: 999,
		alignItems: 'center',
		justifyContent: 'center',
		marginEnd: 15
	},
	rubleBorder: {
		height: 20,
		width: 20,
		borderRadius: 999,
		backgroundColor: "white",
		alignItems: 'center',
		justifyContent: 'center'
	},
	ruble: {
		fontSize: 20,
		fontFamily: 'tmedium',
		color: "#3f92f0"
	},
	paySystemImage: {
		height: 5,
		width: 16,
		marginEnd: 1
	},
	cardBlock: {
		marginTop: 15,
		flexDirection: 'row',
	},
	cardNumberText: {
		fontFamily: 'tregular',
		fontSize: 11,
	},
	cardInnerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		marginTop: 18,
		padding: 3
	},
	cardStyle: {
		height: 35,
		width: 55,
		borderRadius: 8,
		marginEnd: 10
	},
	moneyLine: {
		marginTop: 5
	},
	moneyText: {
		fontFamily: 'tmedium',
		fontSize: 16,
		marginBottom: 4,
		color: 'white',
	},
	cardNameText: {
		color: "white",
		fontFamily: 'tregular',
		fontSize: 14
	},
	cashBack: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		height: 20,
		backgroundColor: '#4d4d4d',
		borderRadius: 999
	},
	cashBackText: {
		color: 'white',
		fontFamily: 'tregular',
		marginEnd: 4
	}
});
