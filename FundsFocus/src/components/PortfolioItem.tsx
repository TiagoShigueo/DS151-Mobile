import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import idv from "../constants/Idv";
import { alphaVantageGlobalQuote } from "../services/alphaVantage";

interface ItemCarteiraProps {
  item: {
    codigo: string;
    quantidade: number;
    valorTotal: number;
    valorTotalMercado: number;
  };
}

const PortfolioItem: React.FC<ItemCarteiraProps> = ({ item }) => {
  const [valorTotalMercado, setValorTotalMercado] = useState<number | null>(
    null
  );

  const formattedValorTotalInvestido = item.valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    const fetchMarketValue = async () => {
      const data = await alphaVantageGlobalQuote(item.codigo + "11.SA");
      if (data && data["Global Quote"] && data["Global Quote"]["05. price"]) {
        const marketValue = parseFloat(data["Global Quote"]["05. price"]);
        setValorTotalMercado(marketValue * item.quantidade);
      } else {
        setValorTotalMercado(null); // Handle error or no data case
      }
    };
    fetchMarketValue();
  }, [item.codigo, item.quantidade]);

  const formattedValorTotalMercado = valorTotalMercado
    ? valorTotalMercado.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      })
    : "N/A";

  return (
    <View>
      <Text>Código do FII: {item.codigo}</Text>
      <Text>Quantidade de cotas: {item.quantidade}</Text>
      <Text>Valor investido no FII: {formattedValorTotalInvestido}</Text>
      <Text>Valor total mercado: {formattedValorTotalMercado}</Text>
      <Text>----------------------</Text>
    </View>
  );
};

export default PortfolioItem;
