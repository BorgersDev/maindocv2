import { AppText } from "@ui/components/AppText";
import { ImageBackground, View, Image } from "react-native";
import greetingbg from "@ui/assets/greetings-bg/image.png"
import logo from "@ui/assets/logo/logo.png"
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

export function Greetings() {
  return (
    <ImageBackground
      source={greetingbg}
      resizeMode="cover"
      style={styles.container}
    >
      <SafeAreaView>
        <Image source={logo} style={styles.logo} />
      </SafeAreaView>
    </ImageBackground>
  )
}