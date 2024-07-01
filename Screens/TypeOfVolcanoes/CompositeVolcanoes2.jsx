import { View, Text, Image, ImageBackground, Pressable } from "react-native";
import React from "react";
import Background from "../../Components/Background";
import TopButton from "../../Components/TopButton";
import { useNavigation } from "@react-navigation/native";
import VolcanoTypes2 from "../../Components/VolcanoTypes2";

const CompositeVolcanoes2 = () => {
  const navigation = new useNavigation();
  return (
    <Background>
      <TopButton />
      
      <VolcanoTypes2
        description1="These eruptions can be highly destructive and pose significant hazards to nearby communities. Composite volcanoes are known for their ability to produce a variety of volcanic hazards. Pyroclastic flows, which are fast-moving clouds of hot gas and volcanic particles, can race down the slopes of the volcano at speeds of hundreds of kilometers per hour, incinerating everything in their path. Ashfall, another hazard associated with composite volcanoes, can blanket vast areas, disrupting transportation, damaging crops, and posing respiratory risks to humans and animals.
        
        Famous examples include Mount St. Helens, Mount Fuji, and Mount Vesuvius. These volcanoes pose various hazards such as lahars, ash fall, and lava flows, impacting both the environment and human settlements. Despite their dangers, they offer valuable insights into Earth's geological processes and hold cultural significance while requiring careful monitoring and preparedness measures."
        // image1={require("../../assets/pic/Mount Mauna Loa.png")}
        image2={require("../../assets/pic/fuji.png")}
        // imageTitle1="Muana Loa, Hawaii, USA"
        imageTitle2="Mount Fuji, Japan"
        gallery=""
        historicalData=""
      />
    </Background>
  );
};

export default CompositeVolcanoes2;
