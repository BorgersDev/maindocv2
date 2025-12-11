import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 195,
    height: 60,
    resizeMode: 'contain',
    marginTop: 20,
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
    flex: 1,
    width: '90%',
    alignItems: 'center',
    marginBottom: 120,
    justifyContent: 'center',
  },
  inputContainer: {
    gap: 6,
    marginBottom: 16,
  },
  ctaContent: {
    width: '100%',
    padding: 20,
    marginTop: 24,
  }
})