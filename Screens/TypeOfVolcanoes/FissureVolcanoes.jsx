import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import React from "react";
import Background from "../../Components/Background";
import TopButton from "../../Components/TopButton";

import VolcanoTypes1 from "../../Components/VolcanoTypes1";

const FissureVolcanoes = () => {

  return (
    <Background>
      <TopButton />
      <View className="items-center justify-center top-10">
        <VolcanoTypes1
          image={require('../../assets/pic/bcg_pic6.jpg')}
          title="Fissure Volcanoes"
          description1="are a type of volcanic eruption that occurs when magma rises through elongated cracks or fissures in the Earth's crust rather than through a central vent. These fissures can be several kilometers long and typically produce extensive lava flows rather than explosive eruptions."
          description2="Fissure volcanoes form along tectonic plate boundaries, particularly at divergent boundaries where plates are moving apart, and can also occur in rift zones within tectonic plates. The eruptions are generally non-explosive, producing large quantities of basaltic lava that flows easily and can cover vast areas. The lava erupts from the fissure in a curtain-like manner along the length of the crack. The lava is typically low-viscosity basalt, which means it is fluid and can travel long distances from the fissure before cooling and solidifying."
          next="FissureVolcanoes2"
        />
      </View>
    </Background>
  );
};

export default FissureVolcanoes;
