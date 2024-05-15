import React from "react";
import { TouchableOpacity, View, Text, Pressable } from "react-native";
import idv from "../constants/Idv";

interface ItemCarteiraProps {
  item: {
    codigo: string;
    quantidade: number;
    valor: number;
  };
}

const PortfolioItem: React.FC<ItemCarteiraProps> = ({ item }) => {
  return (
    <View>
      <Text>Código do FII: {item.codigo}</Text>
      <Text>Quantidade de cotas: {item.quantidade}</Text>
      <Text>Valor do FII: {item.valor}</Text>
      <Text>----------------------</Text>
    </View>
  );
};

export default PortfolioItem;
