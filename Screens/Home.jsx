import { View, Text, ImageBackground, Pressable, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Background from "../Components/Background";

const Home = () => {
  const navigation = new useNavigation();
  return (
    <Background>
        <View className=" items-center -top-60 ">
          <Image className="w-80" resizeMode="contain" source={require("../assets/pic/logo.png")}/>
        </View>
        <View className=" absolute items-center justify-center top-56 left-8">
          <View className="w-80 h-80 bg-gray-500 rounded-2xl">
            <View className="flex flex-col justify-around ">
              <View className="pb-3">
                <Pressable onPress={() => navigation.navigate("Model")}>
                  <View className="w-72 h-14  items-center ml-4 top-5 rounded-2xl flex-row shadow-inner">
                    <View className="w-1/4 h-14 place-items-start self-start bg-white rounded-l-2xl">
                      <Image
                        className="w-10 h-10 ml-5 mt-2"
                        resizeMode="contain"
                        source={require("../assets/icon/model.png")}
                      />
                    </View>
                    <View className="w-3/4 h-14 place-items-start self-end bg-yellow-200 rounded-r-2xl">
                      <Text className="text-black text-2xl font-bold text-center top-2">
                        3D Volcanic Model
                      </Text>
                    </View>
                  </View>
                </Pressable>
              </View>
              <View className="pb-3">
                <Pressable
                  onPress={() => navigation.navigate("TypeOfVolcanoes")}
                >
                  <View className="w-72 h-14  items-center ml-4 top-5 rounded-2xl flex-row shadow-inner">
                    <View className="w-1/4 h-14 place-items-start self-start bg-white rounded-l-2xl">
                      <Image
                        className="w-10 h-10 ml-5 mt-2"
                        resizeMode="contain"
                        source={require("../assets/icon/volcano.png")}
                      />
                    </View>
                    <View className="w-3/4 h-14 place-items-start self-end bg-red-300 rounded-r-2xl">
                      <Text className="text-black text-2xl font-bold text-center top-2">
                        Types of Volcanoes
                      </Text>
                    </View>
                  </View>
                </Pressable>
              </View>
              <View className="pb-3">
                <Pressable
                  onPress={() => navigation.navigate("EmergencyPrepareness")}
                >
                  <View className="w-72 h-14  items-center ml-4 top-5 rounded-2xl flex-row shadow-inner">
                    <View className="w-1/4 h-14 place-items-start self-start bg-white rounded-l-2xl">
                      <Image
                        className="w-10 h-10 ml-5 mt-2"
                        resizeMode="contain"
                        source={require("../assets/icon/emergency.png")}
                      />
                    </View>
                    <View className="w-3/4 h-14 place-items-start self-end bg-blue-300 rounded-r-2xl">
                      <Text className="text-black text-lg font-bold text-center top-3 ">
                        Emergency Prepareness
                      </Text>
                    </View>
                  </View>
                </Pressable>
              </View>
              <View className="pb-2">
                <Pressable onPress={() => navigation.navigate("Gallery")}>
                  <View className="w-[45%] h-14 place-items-start self-start bg-yellow-200 rounded-2xl mr-1 flex-row top-7 ml-4">
                    <Image
                      className="w-10 h-10 ml-2 mt-2"
                      resizeMode="contain"
                      source={require("../assets/icon/gallery.png")}
                    />
                    <Text className="text-black text-2xl font-bold ml-2 top-2">
                      Gallery
                    </Text>
                  </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Faq")}>
                <View className="w-[43%] h-14 place-items-start self-end bg-red-300 rounded-2xl flex-row -top-7 mr-4">
                  <Image
                    className="w-10 h-10 ml-4 mt-2"
                    resizeMode="contain"
                    source={require("../assets/icon/faq.png")}
                  />
                  <Text className="text-black text-2xl font-bold ml-3 top-2">
                    FAQ
                  </Text>
                </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </Background>
  );
};

export default Home;
