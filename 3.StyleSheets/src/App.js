import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ backgroundColor: 'green' }}>Hello World verde</Text>
      <Text style={{ backgroundColor: 'red' }}>Hello World vermelho</Text>
    </View>
  );
}