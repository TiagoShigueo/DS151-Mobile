import React, { useEffect, useState } from "react";
import {
  TextInput,
  Text,
  View,
  FlatList,
  Alert,
  TouchableOpacity,
} from "react-native";
import {
  adicionarFiiNaCarteira,
  obterCarteiraAgrupada,
} from "../services/firebase";
import { getUserId } from "../utils/User";
import { DocumentData } from "firebase/firestore";
import PortfolioItem from "../components/PortfolioItem";
import { readRemoteFile } from "react-native-csv";
import { Dropdown } from "react-native-element-dropdown";
import Idv from "../constants/Idv";

const Portfolio = () => {
  const [codigoFii, setCodigoFii] = useState("");
  const [quantidadeFii, setQuantidadeFii] = useState("");
  const [valorFii, setValorFii] = useState("");
  const [carteira, setCarteira] = useState<DocumentData | null | undefined>(
    null
  );
  const [isFocus, setIsFocus] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    readRemoteFile("/src/data/fiisB3.csv", {
      complete: (results: any) => {
        const csvDataArray = results.data;
        const convertedData = csvDataArray.map(
          (item: { [x: string]: any }) => ({
            label: item["Codigo"],
            value: item["Codigo"],
          })
        );
        setItems(convertedData);
      },

      header: true,
    });

    carregarCarteira();
  }, []);

  const carregarCarteira = async () => {
    try {
      const userId = (await getUserId()) ?? "";
      const carteiraUsuario = await obterCarteiraAgrupada(userId);
      setCarteira(carteiraUsuario);
    } catch (error) {
      console.error("Erro ao carregar a carteira do usuário: ", error);
    }
  };

  const adicionarFii = async () => {
    if (!codigoFii || !quantidadeFii || !valorFii) {
      Alert.alert("Erro!", "Por favor preencha todos os campos.");
      console.log("Erro! Por favor preencha todos os campos.");
      return;
    }
    try {
      /* ?? é o operador de coalescência nula, que fornece um valor padrão no caso de userId ser nulo */
      const userId = (await getUserId()) ?? "";
      const novoFii = {
        codigo: codigoFii.value,
        // codigo: "IBM",
        // codigo: "300135.SHZ",
        quantidade: parseInt(quantidadeFii),
        valor: parseFloat(valorFii),
      };

      await adicionarFiiNaCarteira(userId, novoFii);
      await carregarCarteira();
    } catch (error) {
      console.error("Erro ao adicionar FII à carteira: ", error);
    }
  };

  return (
    <View style={Idv.container}>
      <View style={Idv.centralizedContainer}>
        <View>
          <Dropdown
            style={Idv.input}
            data={items}
            search
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? "Selecione o fundo" : "Selecione o fundo"}
            searchPlaceholder="Pesquisar..."
            value={codigoFii}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={(item) => {
              setCodigoFii(item);
              setIsFocus(false);
            }}
          />
        </View>
        <TextInput
          placeholder="Quantidade de cotas"
          value={quantidadeFii}
          onChangeText={setQuantidadeFii}
          keyboardType="numeric"
          style={Idv.input}
        />
        <TextInput
          placeholder="Valor do FII"
          value={valorFii}
          onChangeText={setValorFii}
          keyboardType="numeric"
          style={Idv.input}
        />
        <TouchableOpacity style={Idv.button} onPress={() => adicionarFii()}>
          <Text style={Idv.buttonTextWhite}>Adicionar FII</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={carteira}
        renderItem={({ item }) => <PortfolioItem item={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={<Text>Nenhum item na carteira.</Text>}
      />
    </View>
  );
};

export default Portfolio;
