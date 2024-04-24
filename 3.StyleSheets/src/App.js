import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={ style.container}>
      <Text style={ style.green }>Hello World verde</Text>
      <Text style={ style.red }>Hello World vermelho</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  green: {
    backgroundColor: 'green',
  },
  red: {
    backgroundColor: 'red',
  },
});