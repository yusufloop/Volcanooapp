import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import React from "react";
import Background from "../../Components/Background";
import TopButton from "../../Components/TopButton";
import { useNavigation } from "@react-navigation/native";
import VolcanoTypes2 from "../../Components/VolcanoTypes2";

const ShieldVolcanoes2 = () => {
  const navigation = new useNavigation();
  return (
    <Background>
      <TopButton />
      {/* <View className="items-center justify-center top-10">
        <View className="w-80 h-[630px] bg-white rounded-2xl items-center">
        <View className="absolute top-3">
            <Text className="text-black text-sm font-normal top-0 pl-3 pr-3 text-justify">
            The eruptions of shield volcanoes are typically effusive rather than explosive, characterized by continuous lava fountains and flows that can persist for extended periods. Shield volcanoes are commonly found at hot spots and divergent plate boundaries, with notable examples including Mauna Loa and Kīlauea in Hawaii, and Skjaldbreiður in Iceland.
            </Text>
            
            
          </View>
         
          <ImageBackground
            className="w-72 h-36 absolute top-48 rounded-2xl overflow-hidden shadow-2xl shadow-black"
            source={require("../../assets/pic/Mount Mauna Loa.png")}
          >
            <View className="absolute bottom-2 left-2 ">
              <Text className="text-white text-xl font-bold ">
                Muana Loa, Hawaii, USA
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            className="w-72 h-36 absolute bottom-36 shadow-2xl shadow-black rounded-2xl overflow-hidden"
            source={require("../../assets/pic/Mount Kilauea.jpg")}
          >
            <View className="absolute bottom-2 right-2 ">
              <Text className="text-white text-xl font-bold ">
              Kīlauea, Hawaii, USA
              </Text>
            </View>
          </ImageBackground>
          

          

          <View className="absolute bottom-20 flex-row">
            <Pressable onPress={() => navigation.navigate("ShieldVolcanoes2")}>
              <View className=" w-28 h-10 bg-yellow-400 rounded-2xl  right-2">
                <Text className="text-center text-2xl font-bold text-white text-shadow-black" style={{
                   textShadowColor: 'rgba(0, 0, 0, 0.75)',
                   textShadowOffset: {width: -1, height: 1},
                   textShadowRadius: 10
                }}>Gallery</Text>
              </View>
            </Pressable>
          <View className="flex-row">
            <Pressable onPress={() => navigation.navigate("ShieldVolcanoes2")}>
              <View className=" w-40 h-10 bg-green-500 rounded-2xl shadow-inner left-2 ">
                <Text className="text-center text-xl font-bold text-gray-100 top-1" style={{
                   textShadowColor: 'rgba(0, 0, 0, 0.75)',
                   textShadowOffset: {width: -1, height: 1},
                   textShadowRadius: 10}}>Historical Data</Text>
              </View>
            </Pressable>
          </View>
          </View>
        </View>
      </View> */}
      <VolcanoTypes2
        description1="The eruptions of shield volcanoes are typically effusive rather than explosive, characterized by continuous lava fountains and flows that can persist for extended periods. Shield volcanoes are commonly found at hot spots and divergent plate boundaries, with notable examples including Mauna Loa and Kīlauea in Hawaii, and Skjaldbreiður in Iceland."
        image1={require("../../assets/pic/Mount Mauna Loa.png")}
        image2={require("../../assets/pic/Mount Kilauea.jpg")}
        imageTitle1="Muana Loa, Hawaii, USA"
        imageTitle2="Kīlauea, Hawaii, USA"
        gallery=""
        historicalData=""
      />
    </Background>
  );
};

export default ShieldVolcanoes2;
