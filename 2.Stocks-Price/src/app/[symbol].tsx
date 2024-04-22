// Para o parâmetro dinâmico, podemos utilizar ferramenta no nome do arquivo [symbol], mas podia ser [id]
import { View, Text } from "@/src/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";
import StockListItem from "../components/StockListItem";
import Graph from "../components/Graph";
import { useQuery, gql } from "@apollo/client";
import { ActivityIndicator } from "react-native";

const query = gql`
  query MyQuery($symbol: String) {
    quote(symbol: $symbol) {
      name
      symbol
      close
      percent_change
    }
  }
`;

const StockDetails = () => {
  // Utiliza a função useLocalSerchParams para puxar o parâmetro passado no Link do arquivo StockListItem
  const { symbol } = useLocalSearchParams();

  const { data, loading, error } = useQuery(query, { variables: { symbol } });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Stocks with symbol {symbol} could not be found </Text>;
  }

  const stock = data.quote;

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
