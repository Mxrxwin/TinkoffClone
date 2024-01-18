import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Font from 'expo-font';

import MainPage from "../screens/Main/mainPage";
import BilsPage from "../screens/Bils/bilsPage";
import CityPage from "../screens/City/cityPage";
import ChatPage from "../screens/Chat/chatPage";
import MorePage from "../screens/More/morePage";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    const [fontLoaded, setFontLoaded] = useState(false);

    const loadFonts = async () => {
      await Font.loadAsync({
        tbold: require("../assets/fonts/TinkoffSansBold.ttf"),
        tmedium: require("../assets/fonts/TinkoffSansMedium.ttf"),
        tregular: require("../assets/fonts/TinkoffSansRegular.ttf")
      });
    };

    useEffect(() => {
      const loadFontAsync = async () => {
        await loadFonts();
        setFontLoaded(true);
      };
  
      loadFontAsync();
    }, []);
  
    if (!fontLoaded) {
      return null; 
    }
  

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={"Main"}
        screenOptions={({}) => ({
            headerShown: false,
            tabBarStyle: {backgroundColor: '#121212', height: "7%", borderTopWidth: 0},
            tabBarInactiveTintColor: '#B5B9BB',
            tabBarLabelStyle: {
                fontFamily: "tregular",
                fontSize: 12,
                marginBottom: 8
            },
        })}>

        
        <Tab.Screen name={"Главная"} component={MainPage} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="card" color={color} size={25} />
            )
        }} />
        <Tab.Screen name={"Платежи"} component={BilsPage} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="radio-button-on" color={color} size={25} />
            )
        }} />
        <Tab.Screen name={"Город"} component={CityPage} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="earth" color={color} size={25} />
            )
        }} />
        <Tab.Screen name={"Чат"} component={ChatPage} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="chatbox-ellipses" color={color} size={25} />
            )
        }} />
        <Tab.Screen name={"Еще"} component={MorePage} options={{
            tabBarIcon: ({color, size}) => (
                <Ionicons name="ellipsis-horizontal" color={color} size={25} />
            )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
