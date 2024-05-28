import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import idv from "../constants/Idv";

interface ItemCarteiraProps {
  item: {
    codigo: string;
    quantidade: number;
    valorTotal: number;
  };
}

const PortfolioItem: React.FC<ItemCarteiraProps> = ({ item }) => {
  const formattedValorTotal = item.valorTotal.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return (
    <View>
      <Text>Código do FII: {item.codigo}</Text>
      <Text>Quantidade de cotas: {item.quantidade}</Text>
      <Text>Valor do FII: {formattedValorTotal}</Text>
      <Text>----------------------</Text>
    </View>
  );
};

export default PortfolioItem;
