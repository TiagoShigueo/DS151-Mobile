import idv from "@/src/constants/Idv";
import { StyleSheet, FlatList } from "react-native";
import { Text, View } from "@/src/components/Themed";
import alphaVantage from "@/src/api/alphaVantage";
import { useState } from "react";

export default function TabOneScreen() {
  const [stockDataList, setStockDataList] = useState([]);
  const [changePercentList, setchangePercentList] = useState([]);
  const newDataList: any = [];
  var change: any;
  const changes: any = [];
  const symbols = ["IBM", "300135.SHZ"]; // Lista de símbolos de ações que você deseja consultar

  const fetchDataForSymbols = async () => {
    for (const symbol of symbols) {
      const data = await alphaVantage(symbol);
      // console.log(data);
      newDataList.push(data);
    }
    setStockDataList(newDataList);
    // console.log(changes[0]);
    // console.log("New Data List: ", newDataList);
    // console.log(newDataList["0"]["Global Quote"]["01. symbol"]);
    // console.log(newDataList["0"]["Global Quote"]["05. price"]);
  };
  fetchDataForSymbols();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mercado hoje</Text>
      {stockDataList.length > 0 ? (
        stockDataList.map((stockData, index) => (
          <View style={styles.list}>
            <View key={index} style={{ flex: 1, gap: 5 }}>
              <Text>{stockData["Global Quote"]["01. symbol"]}</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text>
                R${" "}
                {parseFloat(stockData["Global Quote"]["05. price"]).toFixed(2)}
              </Text>
              <Text
                style={{
                  color:
                    stockData["Global Quote"]["10. change percent"] > 0
                      ? "green"
                      : "red",
                }}
              >
                {parseFloat(
                  stockData["Global Quote"]["10. change percent"]
                ).toFixed(2)}
              </Text>
            </View>
          </View>
        ))
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  list: {
    flexDirection: "row",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
