import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	FlatList,
	ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface ItemProps {
	title: string;
	imageURL: string;
	id: number;
	view: boolean;
}

export default function StoryBar() {
	const [data, setData] = useState<ItemProps[]>([]);


	const Item: React.FC<{ item: ItemProps }> = ({ item }) => (
		<TouchableOpacity 
			style={[styles.imageView, {borderColor: item.view ? '#121212' : '#5684cf'}]}
			onPress={() => changeViewProp(item.id)}
		>
			<ImageBackground
				source={{ uri: item.imageURL }}
				style={styles.imageContainer}
				imageStyle={[styles.image, {borderColor: item.view ? '#121212' : 'black',}]}
			>
				<Text style={styles.text}>{item.title}</Text>
			</ImageBackground>
		</TouchableOpacity>
	);

	const changeViewProp = (id: number) => {
		const newData = [...data]; 
		newData[id] = { ...newData[id], view: true }; 
		setData(newData); 
	}


	const FetchData = async () => {
		axios
			.get("https://6515c9e609e3260018c924d0.mockapi.io/menu")
			.then(({ data }) => {
				setData(data);
			})
			.catch((err) => {
				console.log(err);
				alert("Ошибка при получении статей");
			});
	};

	useEffect(() => {
		FetchData();
	}, []);

	return (
		<View style={styles.lineContainer}>
			<FlatList
				data={data}
				showsHorizontalScrollIndicator={false}
				horizontal
				renderItem={({ item }) => <Item item={item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	lineContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginTop: 20,
	},
	imageContainer: {
		height: 100,
		width: 100,
		justifyContent: 'flex-end'
	},
	imageView: {
		borderRadius: 25,
		marginEnd: 0,
		marginStart: 10,
		borderWidth: 2
	},
	image: {
		borderRadius: 25,
		borderWidth: 2
	},
	text: {
		fontSize: 12,
		fontFamily: "tmedium",
		color: "white",
		padding: 10
	},
});
