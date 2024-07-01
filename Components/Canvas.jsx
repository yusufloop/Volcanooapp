import { View, Text } from "react-native";
import React from "react";

const Canvas = ({ children }) => {
  return (
    <View className="items-center justify-center top-10">
      <View className="w-80 h-[630px] bg-white rounded-2xl items-center">
        {children}
      </View>
    </View>
  );
};

export default Canvas;
