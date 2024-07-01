import { View, Text, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const GalleryVolcanoes = (props) => {
    const navigation = new useNavigation();
  return (
    <View>
       <Text
          className="text-white font-bold text-center text-4xl top-1"
          style={{
            textShadowColor: "rgba(0, 0, 0, 0.75)",
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 10,
          }}
        >
          Gallery
        </Text>
        <Text className="font-normal text-center text-sm">
          Picture of the current known shield volcanoes around the world
        </Text>

        <View className="flex-col justify-evenly mb-2">
          <ImageBackground
            className="w-72 h-36 rounded-2xl overflow-hidden mb-2"
            source={props.image1}
          >
            <View className="absolute bottom-2 left-2 p">
              <Text className="text-white text-xl font-bold ">
                {props.title1}
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            className="w-72 h-36 rounded-2xl overflow-hidden mb-2"
            source={props.image2}
          >
            <View className="absolute bottom-2 left-2 ">
              <Text className="text-white text-xl font-bold ">
                {props.title2}
              </Text>
            </View>
          </ImageBackground>
          <ImageBackground
            className="w-72 h-36  rounded-2xl overflow-hidden mb-2"
            source={props.image3}
          >
            <View className="absolute bottom-2 left-2 ">
              <Text className="text-white text-xl font-bold ">
                {props.title3}
              </Text>
            </View>
          </ImageBackground>
          <View className="items-center">
            <Pressable onPress={() => navigation.navigate(props.next)}>
              <Image
                className="w-12 h-12"
                source={require("../assets/icon/next_main.png")}
              />
            </Pressable>
          </View>
        </View>
    </View>
  )
}

export default GalleryVolcanoes