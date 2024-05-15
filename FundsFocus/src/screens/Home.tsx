import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import StockItem from "../components/StockItem";
import alphaVantage from "../services/alphaVantage";
import idv from "../constants/Idv";

const HomeScreen = () => {
  const [stockDataList, setStockDataList] = useState([]);

  useEffect(() => {
    const symbols = ["IBM", "300135.SHZ"];

    const newDataList: any = [];

    const axiosDataForSymbols = async () => {
      for (const symbol of symbols) {
        const data = await alphaVantage(symbol);
        newDataList.push(data);
      }
      setStockDataList(newDataList);
    };
    axiosDataForSymbols();
  }, []);

  return (
    <View style={idv.container}>
      <Text style={idv.title}>Mercado hoje</Text>
      {stockDataList.length > 0 ? (
        <FlatList
          data={stockDataList}
          renderItem={({ item }) => <StockItem stockData={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

export default HomeScreen;
