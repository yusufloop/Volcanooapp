import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import React from "react";
import Background from "../../Components/Background";
import TopButton from "../../Components/TopButton";

import VolcanoTypes1 from "../../Components/VolcanoTypes1";

const CompoundVolcanoes = () => {
  return (
    <Background>
      <TopButton />
      <View className="items-center justify-center top-10">
        <VolcanoTypes1
          image={require("../../assets/pic/bcg-pic3.png")}
          title="Compound Volcanoes"
          description1=" is also known as stratovolcanoes, are large, steep-sided volcanoes built up by successive eruptions of lava flows, volcanic ash, cinders, and volcanic rocks. These volcanoes typically have a conical shape and are characterized by alternating layers of lava and volcanic debris."
          description2="Stratovolcanoes are formed at convergent plate boundaries, where one tectonic plate is forced beneath another in a process called subduction. The magma generated by the subduction of the oceanic plate rises through the Earth's crust, leading to volcanic activity.
These volcanoes can be extremely explosive due to the high viscosity of the magma, which traps gas bubbles and leads to pressure buildup. Eruptions from stratovolcanoes can produce pyroclastic flows, lava flows, ash clouds, and lahars (mudflows). "
          next="CompoundVolcanoes2"
        />
      </View>
    </Background>
  );
};

export default CompoundVolcanoes;
