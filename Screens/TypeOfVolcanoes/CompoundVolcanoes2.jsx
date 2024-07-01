import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import React from "react";
import Background from "../../Components/Background";
import TopButton from "../../Components/TopButton";
import { useNavigation } from "@react-navigation/native";
import VolcanoTypes2 from "../../Components/VolcanoTypes2";

const CompoundVolcanoes2 = () => {
  const navigation = new useNavigation();
  return (
    <Background>
      <TopButton />
      
      <VolcanoTypes2
        description1="Meanwhile, composite and compound volcanoes, also known as stratovolcanoes, are large, steep-sided volcanic structures characterized by a single, central vent from which eruptions occur, resulting in a symmetrical cone shape formed by successive layers of lava, ash, and volcanic debris. However, compound volcanoes are volcanic formations composed of multiple overlapping cones or vents, created through eruptions from various locations over time, resulting in a more irregular and complex structure with multiple craters and cones."
        // image1={require("../../assets/pic/Mount Ruapehu.png")}
        image2={require("../../assets/pic/Mount Ruapehu.png")}
        // imageTitle1="Mount Ruapehu, New Zealand"
        imageTitle2="Mount Ruapehu, New Zealand"
        gallery=""
        historicalData=""
      />
    </Background>
  );
};

export default CompoundVolcanoes2;
