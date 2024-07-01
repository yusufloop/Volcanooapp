import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import React from "react";
import Background from "../../Components/Background";
import TopButton from "../../Components/TopButton";
import { useNavigation } from "@react-navigation/native";
import VolcanoTypes2 from "../../Components/VolcanoTypes2";

const FissureVolcanoes2 = () => {
  const navigation = new useNavigation();
  return (
    <Background>
      <TopButton />
      
      <VolcanoTypes2
        description1="Examples of fissure volcanoes include the Laki fissure eruption in Iceland (1783-1784), which produced one of the largest lava flows in recorded history; the Krafla fissure system, also in Iceland, which has been the site of numerous eruptions; and the Mauna Loa and Kīlauea volcanoes in Hawaii, which have fissure eruptions as part of their activity.
Fissure eruptions can significantly alter the landscape, creating extensive lava plateaus. The lava flows can destroy infrastructure, but they typically move slowly enough for people to evacuate. The gases released during these eruptions, such as sulfur dioxide, can have significant environmental and climatic impacts. Fissure volcanoes are an important feature of the Earth's volcanic activity, contributing to the formation of new crust and influencing the landscape on a large scale."
        // image1={require("../../assets/pic/Mount Mauna Loa.png")}
        image2={require("../../assets/pic/Mount Kilauea.jpg")}
        // imageTitle1="Muana Loa, Hawaii, USA"
        imageTitle2="Kīlauea, Hawaii, USA"
        gallery=""
        historicalData=""
      />
    </Background>
  );
};

export default FissureVolcanoes2;
