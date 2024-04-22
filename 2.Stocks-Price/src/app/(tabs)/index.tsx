import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { Text, View } from "@/src/components/Themed";
import { Stack } from "expo-router";
import top5 from "@/assets/data/top5.json";
import StockListItem from "@/src/components/StockListItem";

import { useQuery, gql } from "@apollo/client";

const query = gql`
  query MyQuer($symbol: String) {
    quotes(symbol: $symbol) {
      value {
        name
        symbol
        percent_change
        close
      }
    }
  }
`;

export default function TabOneScreen() {
  // const stocks = Object.values(top5); /*Transformando Objeto em array*/

  const { data, loading, error } = useQuery(query, {
    variables: { symbol: "META,NVDA,TSLA" },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch stocks</Text>;
  }

  const stocks = data.quotes.map((q) => q.value);

  return (
    <View style={styles.container}>
      {/*Alterando o título da página*/}
      <Stack.Screen options={{ title: "Stocks" }} />

      <FlatList
        data={stocks}
        renderItem={({ item }) => <StockListItem stock={item} />}
        contentContainerStyle={{ gap: 20, padding: 10 }} // Espaçamento interno da FlatList
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
