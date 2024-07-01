import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import Background from "../Components/Background";
import TopButton from "../Components/TopButton";
import { useNavigation } from "@react-navigation/native";

const TypeOfVolcanoes = () => {

  const navigation = new useNavigation();
  return (
    <Background>
      <TopButton />

      <View className="items-center justify-center top-16">
        <View className="w-80 h-96 bg-white rounded-2xl">
          <View className="flex-col">
            <Text className="text-black text-2xl font-bold text-center top-2">
              Types of Volcanoes
            </Text>
            <Text className="text-black text-xs font-normal text-center top-2">
              Select one of the types to get to know about it
            </Text>
          </View>

          <View className="flex-col">
            <View className="pb-2">
              <Pressable onPress={() => navigation.navigate("ShieldVolcanoes")}>
                <View className="w-72 h-14  items-center ml-4 top-5 rounded-2xl flex-row shadow-inner">
                  <View className="w-1/4 h-14 place-items-start self-start bg-white rounded-l-2xl">
                    <Image
                      className="w-16 h-14 ml-2 rounded-l-2xl shadow-inner"
                      source={require("../assets/pic/bcg_pic1.png")}
                    />
                  </View>
                  <View className="w-3/4 h-14 place-items-start self-end bg-gray-300 rounded-r-2xl shadow-inner">
                    <Text className="text-black text-2xl font-bold text-center top-2">
                      Shield Volcanoes
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
            <View className="pb-2">
              <Pressable onPress={() => navigation.navigate("CompositeVolcanoes")}>
                <View className="w-72 h-14  items-center ml-4 top-5 rounded-2xl flex-row shadow-inner">
                  <View className="w-1/4 h-14 place-items-start self-start bg-white rounded-l-2xl">
                    <Image
                      className="w-16 h-14 ml-2 rounded-l-2xl shadow-inner"
                      source={require("../assets/pic/bcg_pic19.jpg")}
                    />
                  </View>
                  <View className="w-3/4 h-14 place-items-start self-end bg-gray-300 rounded-r-2xl shadow-inner">
                    <Text className="text-black text-xl font-bold text-center top-3">
                      Composite Volcanoes
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
            <View className="pb-2">
              <Pressable onPress={() => navigation.navigate("CompoundVolcanoes")}>
                <View className="w-72 h-14  items-center ml-4 top-5 rounded-2xl flex-row shadow-inner">
                  <View className="w-1/4 h-14 place-items-start self-start bg-white rounded-l-2xl">
                    <Image
                      className="w-16 h-14 ml-2 rounded-l-2xl shadow-inner"
                      source={require("../assets/pic/bcg-pic9.jpeg")}
                    />
                  </View>
                  <View className="w-3/4 h-14 place-items-start self-end bg-gray-300 rounded-r-2xl shadow-inner">
                    <Text className="text-black text-xl font-bold text-center top-3">
                      Compound Volcanoes
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
            <View className="pb-2">
              <Pressable onPress={() => navigation.navigate("FissureVolcanoes")}>
                <View className="w-72 h-14  items-center ml-4 top-5 rounded-2xl flex-row shadow-inner">
                  <View className="w-1/4 h-14 place-items-start self-start bg-white rounded-l-2xl">
                    <Image
                      className="w-16 h-14 ml-2 rounded-l-2xl shadow-inner"
                      source={require("../assets/pic/bcg_pic10.jpg")}
                    />
                  </View>
                  <View className="w-3/4 h-14 place-items-start self-end bg-gray-300 rounded-r-2xl shadow-inner">
                    <Text className="text-black text-2xl font-bold text-center top-2">
                      Fissure Volcanoes
                    </Text>
                  </View>
                </View>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default TypeOfVolcanoes;
