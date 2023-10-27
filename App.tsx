import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ColoredBox from './src/components/native/View';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>React Native</Text>
      <ColoredBox color="red" text="Red" />
      <ColoredBox color="blue" text="Blue" />
      <ColoredBox color="yellow" text="Yellow" />
      <ColoredBox color="pink" text="Pink" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
