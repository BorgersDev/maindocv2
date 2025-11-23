import { AppText } from "@ui/components/AppText";
import { ImageBackground, View, Image } from "react-native";
import greetingbg from "@ui/assets/greetings-bg/image.png"
import logo from "@ui/assets/logo/logo.png"
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppButton } from "@ui/components/Button";
import { theme } from "@ui/styles/theme";

export function Greetings() {
  return (
    <ImageBackground
      source={greetingbg}
      resizeMode="cover"
      style={styles.container}
    >
      <SafeAreaView style={styles.content}>
        <Image source={logo} style={styles.logo} />

        <View style={styles.ctaContainer}>
          <AppText 
            color={theme.colors.white} 
            weight="semiBold" size="2xl"
            style={styles.heading}
            >
            Gestão e upload de documentos
          </AppText>
          <View style={styles.ctaContent}>
            <AppButton>
              Acesse sua conta
            </AppButton>
          </View>
        </View>
    </SafeAreaView>
    </ImageBackground>
  )
}