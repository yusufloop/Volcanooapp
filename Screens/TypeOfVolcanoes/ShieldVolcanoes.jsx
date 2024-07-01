import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import React from "react";
import Background from "../../Components/Background";
import TopButton from "../../Components/TopButton";

import VolcanoTypes1 from "../../Components/VolcanoTypes1";

const ShieldVolcanoes = () => {

  return (
    <Background>
      <TopButton />
      <View className="items-center justify-center top-10">
        <VolcanoTypes1
          image={require('../../assets/pic/bcg_pic1.png')}
          title="Shield Volcanoes"
          description1="are broad, domed volcanoes with gentle slopes, typically ranging from 2 to 10 degrees. They are formed primarily from low-viscosity basaltic lava that flows over great distances, resulting in their distinctive wide and gently sloping profile. These volcanoes are built up by numerous lava flows emanating from a central summit vent or group of vents."
          description2="Shield volcanoes generally do not produce violent eruptions, their lava flows can cause significant destruction by covering large areas. Secondary hazards include volcanic gases and occasional phreatomagmatic explosions when lava interacts with water. Shield volcanoes provide valuable insights into mantle plume activities and tectonic plate movements and contribute to the formation of new land and landscape alterations over geological timescales."
          next="ShieldVolcanoes2"
        />
      </View>
    </Background>
  );
};

export default ShieldVolcanoes;
