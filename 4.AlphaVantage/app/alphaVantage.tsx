import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import axios from "axios";

const AlphaVantageAPIExample = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=SUA_CHAVE_DE_API`
        );
        setStockData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <View>
      {stockData ? (
        <View>
          <Text>Símbolo: {stockData["Global Quote"]["01. symbol"]}</Text>
          <Text>Preço: {stockData["Global Quote"]["05. price"]}</Text>
          <Text>
            Última Atualização:{" "}
            {stockData["Global Quote"]["07. latest trading day"]}
          </Text>
          {/* Adicione mais informações conforme necessário */}
        </View>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

export default AlphaVantageAPIExample;
