import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import axios from "axios";

const AlphaVantageAPIExample = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchStockData = async (symbol) => {
      try {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=KM3PTTHZNI45GUWJ`
        );
        console.log(response.data);
        // Retorno:
        // {"Global Quote": {"01. symbol": "MXRF11.SA", "02. open": "10.3300", "03. high": "10.3400", "04. low": "10.1600", "05. price": "10.2200", "06. volume": "2108637", "07. latest trading day": "2024-05-03", "08. previous close": "10.3200", "09. change": "-0.1000", "10. change percent": "-0.9690%"}}
        setStockData(response.data);
      } catch (error) {
        console.error("Erro ao buscar os dados da API:", error);
      }
    };

    fetchStockData("HGBS11.SA");
  }, []);
  return (
    <View style={style.container}>
      {stockData ? (
        <View style={style.red}>
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

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  green: {
    backgroundColor: "green",
  },
  red: {
    backgroundColor: "red",
  },
});

export default AlphaVantageAPIExample;
