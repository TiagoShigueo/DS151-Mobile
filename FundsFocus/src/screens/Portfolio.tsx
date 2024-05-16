import React, { useEffect, useState } from "react";
import {
  Button,
  TextInput,
  Text,
  View,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { adicionarFiiNaCarteira, obterCarteira } from "../services/firebase";
import { getUserId } from "../utils/User";
import { DocumentData } from "firebase/firestore";
import PortfolioItem from "../components/PortfolioItem";
import { alphaVantageSymbolSearch } from "../services/alphaVantage";

const Portfolio = () => {
  const [codigoFii, setCodigoFii] = useState("");
  const [quantidadeFii, setQuantidadeFii] = useState("");
  const [valorFii, setValorFii] = useState("");
  const [carteira, setCarteira] = useState<DocumentData | null | undefined>(
    null
  );
  const [resultadosPesquisa, setResultadosPesquisa] = useState<any[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

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

  const pesquisarFii = async (ticker: string) => {
    try {
      // console.log("Chamou função pesquisaFii com o ticker: ", ticker);
      const resultados = await alphaVantageSymbolSearch(ticker); //Trocar symbolSearch pelo Value codigoFii
      if (resultados) {
        setResultadosPesquisa(resultados.bestMatches);
      } else {
        setResultadosPesquisa([]);
      }
    } catch (error) {
      console.error("Erro ao buscar um ativo na API: ", error);
    }
  };

  return (
    <>
      <TextInput
        placeholder="Código do FII"
        value={codigoFii}
        onChangeText={setCodigoFii}
        onFocus={() => setModalVisible(true)}
      />
      {/* Não vou deixar assim, porque a cada atualização, seria uma requisição nova, 
      e estouraria muito rápido as minhas requisições diárias. Vou fazer uma lista estática mesmo
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              elevation: 5,
            }}
          >
            <TextInput
              placeholder="Código do FII"
              value={codigoFii}
              onChangeText={(ticker) => {
                setCodigoFii(ticker);
                pesquisarFii(ticker);
              }}
            />
            <FlatList
              data={resultadosPesquisa}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setCodigoFii(item.symbol);
                    setModalVisible(false);
                  }}
                >
                  <Text>
                    {item.symbol} - {item.name}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item, index) => index.toString()}
              ListEmptyComponent={<Text>Nenhum resultado encontrado.</Text>}
            />

            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal> */}
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
