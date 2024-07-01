import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Model from "../Screens/Model";
import Gallery from "../Screens/Gallery";
import Faq from "../Screens/Faq";
import EmergencyPrepareness from "../Screens/EmergencyPrepareness";
import TypeOfVolcanoes from "../Screens/TypeOfVolcanoes";
import ShieldVolcanoes from "../Screens/TypeOfVolcanoes/ShieldVolcanoes";
import ShieldVolcanoes2 from "../Screens/TypeOfVolcanoes/ShieldVolcanoes2";
import CompositeVolcanoes2 from "../Screens/TypeOfVolcanoes/CompositeVolcanoes2";
import CompositeVolcanoes from "../Screens/TypeOfVolcanoes/CompositeVolcanoes";
import CompoundVolcanoes from "../Screens/TypeOfVolcanoes/CompoundVolcanoes";
import CompoundVolcanoes2 from "../Screens/TypeOfVolcanoes/CompoundVolcanoes2";
import FissureVolcanoes from "../Screens/TypeOfVolcanoes/FissureVolcanoes";
import FissureVolcanoes2 from "../Screens/TypeOfVolcanoes/FissureVolcanoes2";
import ShieldVolcano1 from "../Screens/Gallery/ShieldVolcano1";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="ShiedVolcanoesGallery1" headerShown="false">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Model" component={Model} />
      <Stack.Screen name="TypeOfVolcanoes" component={TypeOfVolcanoes} />
      <Stack.Screen name="EmergencyPrepareness" component={EmergencyPrepareness} />
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen name="Faq" component={Faq} />


      <Stack.Screen name="ShieldVolcanoes" component={ShieldVolcanoes} />
      <Stack.Screen name="ShieldVolcanoes2" component={ShieldVolcanoes2} />
      <Stack.Screen name="CompositeVolcanoes" component={CompositeVolcanoes} />
      <Stack.Screen name="CompositeVolcanoes2" component={CompositeVolcanoes2} />
      <Stack.Screen name="CompoundVolcanoes" component={CompoundVolcanoes} />
      <Stack.Screen name="CompoundVolcanoes2" component={CompoundVolcanoes2} />
      <Stack.Screen name="FissureVolcanoes" component={FissureVolcanoes} />
      <Stack.Screen name="FissureVolcanoes2" component={FissureVolcanoes2} />
      

      <Stack.Screen name="ShiedVolcanoesGallery1" component={ShieldVolcano1} />
    </Stack.Navigator>
  );
}

export default MyStack;
