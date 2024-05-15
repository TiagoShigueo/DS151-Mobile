import React, { useEffect, useState } from "react";
import { Button, TextInput, Text, View, FlatList } from "react-native";
import { adicionarFiiNaCarteira, obterCarteira } from "../services/firebase";
import { getUserId } from "../utils/User";
import { DocumentData } from "firebase/firestore";
import PortfolioItem from "../components/PortfolioItem";

const Portfolio = () => {
  const [codigoFii, setCodigoFii] = useState("");
  const [quantidadeFii, setQuantidadeFii] = useState("");
  const [valorFii, setValorFii] = useState("");
  const [carteira, setCarteira] = useState<DocumentData | null | undefined>(
    null
  );

  useEffect(() => {
    carregarCarteira();
  }, []);

  const carregarCarteira = async () => {
    try {
      const userId = (await getUserId()) ?? "";
      const carteiraUsuario = await obterCarteira(userId);
      setCarteira(carteiraUsuario);
    } catch (error) {
      console.error("Erro ao carregar a carteira do usuário: ", error);
    }
  };

  const adicionarFii = async () => {
    try {
      /* ?? é o operador de coalescência nula, que fornece um valor padrão no caso de userId ser nulo */
      const userId = (await getUserId()) ?? "";

      // const novoFii = {
      //   codigo: codigoFii,
      //   nome: nomeFii,
      //   valor: parseFloat(valorFii),
      // };

      // Exemplo de uso
      const novoFii = {
        // codigo: "300135.SHZ",
        // nome: "300135.SHZ",
        // valor: 150.0,
        codigo: "IBM",
        nome: "ibm",
        valor: 100.0,
      };
      await adicionarFiiNaCarteira(userId, novoFii);
      await carregarCarteira();
    } catch (error) {
      console.error("Erro ao adicionar FII à carteira: ", error);
    }
  };

  return (
    <>
      <TextInput
        placeholder="Código do FII"
        value={codigoFii}
        onChangeText={setCodigoFii}
      />
      <TextInput
        placeholder="Quantidade de cotas"
        value={quantidadeFii}
        onChangeText={setQuantidadeFii}
      />
      <TextInput
        placeholder="Valor do FII"
        value={valorFii}
        onChangeText={setValorFii}
        keyboardType="numeric"
      />
      <Button title="Adicionar FII" onPress={adicionarFii} />

      <FlatList
        data={carteira}
        renderItem={({ item }) => <PortfolioItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>Nenhum item na carteira.</Text>}
      />
    </>
  );
};

export default Portfolio;
