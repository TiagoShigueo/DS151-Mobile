import React from "react";
import { View, Text, Pressable } from "react-native";
import idv from "../constants/Idv";
// import { useNavigation } from "expo-router";

type Stock = {
  "Global Quote": {
    "01. symbol": string;
    "05. price": string;
    "10. change percent": number;
  };
};

type StockListItem = {
  stockData: Stock;
};

interface RouteParams {
  symbol: string;
}

const Dividends = ({ stockData }: StockListItem) => {
  //   const navigation = useNavigation();

  //   const goToDetails = (symbol: string) => {
  //     navigation.navigate("Fund Detail", { symbol });
  //   };
  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "rgba(0, 0, 0, 0.1)" : "transparent",
        },
        idv.list,
      ]}
      /*onPress={() => goToDetails(stockData["Global Quote"]["01. symbol"])}*/
    >
      <View style={{ flex: 1, gap: 5 }}>
        <Text>{stockData["Global Quote"]["01. symbol"]}</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text>
          R$ {parseFloat(stockData["Global Quote"]["05. price"]).toFixed(2)}
        </Text>
        <Text
          style={{
            color:
              stockData["Global Quote"]["10. change percent"] > 0
                ? "green"
                : "red",
          }}
        >
          {
            /*parseFloat*/ stockData["Global Quote"][
              "10. change percent"
            ] /*.toFixed(2)*/
          }
        </Text>
      </View>
    </Pressable>
  );
};

export default Dividends;
