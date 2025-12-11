import { ImageBackground, View, Image } from "react-native";
import greetingbg from "@ui/assets/greetings-bg/image.png"
import logo from "@ui/assets/logo/logo.png"
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "@ui/components/Button";
import { AppInput } from "@ui/components/Input";
import { inputStyles } from "@ui/components/Input/styles";

export function Greetings() {
  return (
    <>
      <ImageBackground
        source={greetingbg}
        resizeMode="cover"
        style={styles.container}
      >
        <SafeAreaView style={styles.content}>
          <Image source={logo} style={styles.logo} />

          <View style={styles.ctaContainer}>
            <View style={styles.ctaContent}>
              <View style={styles.inputContainer}>
                <AppInput placeholder="E-mail" />
                <AppInput placeholder="Senha" />
              </View>
              <AppButton>
                Acesse sua conta
              </AppButton>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </>
  )
}