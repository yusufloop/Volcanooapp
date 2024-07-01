import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const TopButton = () => {
  const navigation = new useNavigation();
  return (
    <View className="flex-row">
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image
          className="w-10 h-10 top-8 left-10"
          source={require("../assets/icon/back_main.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Image
          className="w-10 h-10 top-8 left-12"
          source={require("../assets/icon/home_main.png")}
        />
      </Pressable>
    </View>
  );
};

export default TopButton;
