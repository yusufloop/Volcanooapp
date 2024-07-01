import { View, Text, ImageBackground, Pressable, Image } from "react-native";
import React from "react";
import Background from "../../Components/Background";
import TopButton from "../../Components/TopButton";
import Canvas from "../../Components/Canvas";
import GalleryVolcanoes from "../../Components/GalleryVolcanoes";

const ShieldVolcano1 = () => {
  return (
    <Background>
      <TopButton />
      <Canvas>
        <GalleryVolcanoes title1="Mauna Loa, Hawaii, USA" title2="Kīlauea, Hawaii, USA" title3="Mauna Kea, Hawaii, USA" image1={require("../../assets/pic/Mount Mauna Loa.png")} image2={require("../../assets/pic/Mount Mauna Loa.png")}  image3={require("../../assets/pic/Mount Mauna Loa.png")} />
      </Canvas>
    </Background>
  );
};

export default ShieldVolcano1;
