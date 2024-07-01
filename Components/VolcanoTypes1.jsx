import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const VolcanoTypes1 = (props) => {
  const navigation = new useNavigation();
  return (
    <View className="w-80 h-[630px] bg-white rounded-2xl items-center">
            
          <ImageBackground
            className="w-72 h-44 absolute top-3 rounded-2xl overflow-hidden"
            source={props.image}
          >
            <View className="absolute bottom-2 left-2 ">
              <Text className="text-white text-2xl font-bold ">
                {props.title}
              </Text>
            </View>
          </ImageBackground>
          
          <View className="absolute top-48">
            <Text className="text-black text-sm font-normal top-2 pl-3 pr-3 text-justify">
              <Text className="font-bold">{props.title}</Text> {props.description1}
            </Text>
            <Text className="text-black text-sm font-normal top-2 pl-3 pr-3 text-justify">
            {props.description2}
            </Text>
          </View>

          <View className="absolute bottom-2 right-2">
            <Pressable onPress={() => navigation.navigate(props.next)}>
              <View className=" w-24 h-10 bg-teal-400 rounded-r-2xl shadow-inner">
                <Text className="text-center text-2xl font-bold text-gray-100">Next...</Text>
              </View>
            </Pressable>
          </View>
        </View>
  )
}

export default VolcanoTypes1