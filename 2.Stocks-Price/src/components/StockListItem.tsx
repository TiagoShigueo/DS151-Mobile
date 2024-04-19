/* Mesmo Text que do React Native, porém importando do Themed altera com o Dark mode e Light mode */
import { Text, View } from "./Themed";
import { MonoText } from "./StyledText";
import { StyleSheet, Pressable } from "react-native";
import Colors from "../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";

// Declarando que o name dentro do Stock é uma string
type Stock = {
  name: string;
  symbol: string;
  close: string;
  percent_change: string;
};

//  Declarando que o Stock dentro de StockListItem é um Stock declarando anteriormente
type StockListItem = {
  stock: Stock;
};

export default function StockListItem({ stock }: StockListItem) {
  const change = Number.parseFloat(stock.percent_change);

  return (
    // Link importado do expo-router joga para a página desejada Link href={"/stock"}
    // Ou com parâmetro utiliza crase
    <Link href={`/${stock.symbol}`} asChild>
      <Pressable style={styles.container}>
        {/*Container da esquerda */}
        <View style={{ flex: 1, gap: 5 }}>
          {/*Flex: 1 joga o outro container filho para o outro lado */}
          <Text style={styles.symbol}>
            {stock.symbol} <AntDesign name="staro" size={18} color="gray" />
          </Text>
          <Text style={{ color: "gray" }}>{stock.name}</Text>
        </View>

        {/*Container da direita */}
        <View style={{ alignItems: "flex-end" }}>
          {/* Tem um componente StyledText que contém esse MonoText, mas só altera a fonte 
        Convertendo para number a justando a quantidade de casas decimais com o toFixed */}
          <MonoText>${Number.parseFloat(stock.close).toFixed(1)}</MonoText>
          {/* Declarei change no começo da função, mas acho que daria para fazer igual do sotck.close */}
          <MonoText style={{ color: change > 0 ? "green" : "red" }}>
            {change > 0 ? "+" : ""}
            {change.toFixed(1)}%
          </MonoText>
        </View>
      </Pressable>
    </Link>
  ); // Return só retorna um componente, porém podemos colocar tudo dentro de uma View
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  symbol: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.light.tint,
  },
});
