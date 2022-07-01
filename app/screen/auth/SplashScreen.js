import React from "react"
import { Text } from "react-native-paper"
import SplashBG from "../../../features/SplashBG"
import Background from "../../../features/Background"
import Logo from "../../../features/logo"
import Button from "../../../features/Button"
const { height, width } = useWindowDimensions();

export default function SplashScreen({ navigation }) {
  
const { height, width } = useWindowDimensions();
  return (
    <SplashBG>
      <Logo />
      <Text>Its helluva start, lets hunt the heist.</Text>
      <Button mode="contained" onPress={() => navigation.navigate("StartScreen")} color='#F8772E'>
        Start
      </Button>
    </SplashBG>
  )
}
