import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";
import alphaVantage from "../API/alphaVantage";

const AlphaVantageScreen = () => {
  const [stockDataList, setStockDataList] = useState([]);

  useEffect(() => {
    // const fetchStockData = async (symbol) => {
    //   try {
    //     const response = await axios.get(
    //       `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    //     );
    //     return response.data;
    //   } catch (error) {
    //     console.error("Erro ao buscar os dados da API:", error);
    //     return null;
    //   }
    // };

    // const API_KEY = "KM3PTTHZNI45GUWJ";
    // const API_KEY = "YU938S42CFRSI15H";

    const symbols = [
      "KNIP11.SA",
      "XPML11.SA",
      "KNCR11.SA",
      "HGLG11.SA",
      "KNRI11.SA",
    ]; // Lista de símbolos de ações que você deseja consultar

    const fetchDataForSymbols = async () => {
      const newDataList = [];
      for (const symbol of symbols) {
        // const data = await fetchStockData(symbol);
        const data = await alphaVantage(symbol);
        newDataList.push(data);
      }
      setStockDataList(newDataList);
    };

    fetchDataForSymbols();
  }, []);

  return (
    <View>
      {stockDataList.length > 0 ? (
        stockDataList.map((stockData, index) => (
          <View key={index}>
            <Text>Símbolo: {stockData["Global Quote"]["01. symbol"]}</Text>
            <Text>Preço: {stockData["Global Quote"]["05. price"]}</Text>
            <Text>
              Última Atualização:{" "}
              {stockData["Global Quote"]["07. latest trading day"]}
            </Text>
            {/* Adicione mais informações conforme necessário */}
          </View>
        ))
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

export default AlphaVantageScreen;
