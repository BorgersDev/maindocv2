import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 195,
    height: 60,
    resizeMode: 'contain',
  },
  content: {
    alignItems: 'center',
    paddingTop: 32,
    justifyContent: 'space-between',
    flex: 1,
  },
  heading: {
    letterSpacing:  -0.32,
    textAlign: 'center',
    maxWidth: 311,
  },
  ctaContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 32,
  },
  ctaContent: {
    width: '100%',
    padding: 20,
    marginTop: 24,
  }
})