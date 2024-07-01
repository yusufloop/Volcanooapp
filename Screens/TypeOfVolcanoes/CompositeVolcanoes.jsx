import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import React from "react";
import Background from "../../Components/Background";
import TopButton from "../../Components/TopButton";

import VolcanoTypes1 from "../../Components/VolcanoTypes1";

const CompositeVolcanoes = () => {

  return (
    <Background>
      <TopButton />
      <View className="items-center justify-center top-10">
        <VolcanoTypes1
          image={require('../../assets/pic/bcg_pic5.jpg')}
          title="Composite Volcanoes"
          description1="also called stratovolcanoes, are towering geological formations characterized by their steep slopes and conical shapes. They form through repeated eruptions over thousands to millions of years, each eruption layering new material on top of the previous layers. This layering creates a stratified appearance, hence the name 'stratovolcano'."
          description2="These volcanoes are typically found in subduction zone environments, where one tectonic plate is forced beneath another, leading to the melting of rock and the formation of magma. The magma produced in these regions is often rich in silica, resulting in high-viscosity lava flows. During eruptions, the thick, sticky magma tends to trap gas bubbles, leading to a buildup of pressure within the volcano."
          next="CompositeVolcanoes2"
        />
      </View>
    </Background>
  );
};

export default CompositeVolcanoes;
