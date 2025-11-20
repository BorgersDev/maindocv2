import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './ui/theme';

export function App() {
  return (
    <View style={styles.container}>
      <Text>Hooray!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.blue[400],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
