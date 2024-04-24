import { StyleSheet, Text, View } from 'react-native';
import Colors from './styles/Colors.ts';

export default function App() {
  return (
    <View style={styles.container1}>
      <Text style={Colors.verde}>Hello World verde</Text>
      <Text style={Colors.vermelho}>Hello World vermelho</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});