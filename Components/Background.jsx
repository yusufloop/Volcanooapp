import { View, Text, ImageBackground } from 'react-native'
import React from 'react'

const Background = ({ children }) => {
  return (
    <View className="flex-1 ">
    <ImageBackground
      className="flex-1"
      source={require("../assets/images/bg.png")}
    >
        {children}
        </ImageBackground>
    </View>
  )
}

export default Background