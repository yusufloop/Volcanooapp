import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const VolcanoTypes2 = (props) => {
  const navigation = new useNavigation();
  return (
    <View className="items-center justify-center top-10">
      <View className="w-80 h-[630px] bg-white rounded-2xl items-center flex-col">
        <View className="absolute top-3">
          <Text className="text-black text-xm font-normal top-0 pl-3 pr-3 text-justify">
            {props.description1}
          </Text>
        </View>


        <View className="absolute bottom-60 ">
          <ImageBackground
            className="w-72 h-36 rounded-2xl overflow-hidden"
            source={props.image1}
          >
            <View className="absolute bottom-2 left-2 ">
              <Text className="text-white text-xl font-bold ">
                {props.imageTitle1}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View className=" absolute bottom-20">
          <ImageBackground
            className="w-72 h-36   rounded-2xl overflow-hidden"
            source={props.image2}
          >
            <View className="absolute bottom-2 right-2 ">
              <Text className="text-white text-xl font-bold ">
                {props.imageTitle2}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View className="absolute bottom-8 flex-row">
          <Pressable onPress={() => navigation.navigate(props.gallery)}>
            <View className=" w-28 h-10 bg-yellow-400 rounded-2xl  right-2">
              <Text
                className="text-center text-2xl font-bold text-white text-shadow-black"
                style={{
                  textShadowColor: "rgba(0, 0, 0, 0.75)",
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 10,
                }}
              >
                Gallery
              </Text>
            </View>
          </Pressable>
          <View className="flex-row">
            <Pressable
              onPress={() => navigation.navigate(props.historicalData)}
            >
              <View className=" w-40 h-10 bg-green-500 rounded-2xl shadow-inner left-2 ">
                <Text
                  className="text-center text-xl font-bold text-gray-100 top-1"
                  style={{
                    textShadowColor: "rgba(0, 0, 0, 0.75)",
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 10,
                  }}
                >
                  Historical Data
                </Text>
              </View>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default VolcanoTypes2;
