// Para o parâmetro dinâmico, podemos utilizar ferramenta no nome do arquivo [symbol], mas podia ser [id]
import { View, Text } from "@/src/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";
import top5 from "@/assets/data/top5.json";
import StockListItem from "../components/StockListItem";
import Graph from "../components/Graph";

const StockDetails = () => {
  // Utiliza a função useLocalSerchParams para puxar o parâmetro passado no Link do arquivo StockListItem
  const { symbol } = useLocalSearchParams();

  const stock = top5[symbol];

  if (!stock) {
    return <Text>Stock with symbol {symbol} could not be found</Text>;
  }

  return (
    <View style={{ padding: 10 }}>
      <Stack.Screen
        options={{ title: stock.symbol, headerBackTitleVisible: false }}
      />
      <StockListItem stock={stock} />
      <Graph />
    </View>
  );
};

// Para aparecer, precisa sempre exportar
export default StockDetails;
