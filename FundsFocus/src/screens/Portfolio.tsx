import React, { useEffect, useState } from "react";
import { Button, TextInput, Text, View, FlatList } from "react-native";
import { adicionarFiiNaCarteira, obterCarteira } from "../services/firebase";
import { getUserId } from "../utils/User";
import { DocumentData } from "firebase/firestore";
import PortfolioItem from "../components/PortfolioItem";
import { readRemoteFile } from "react-native-csv";
import { Dropdown } from "react-native-element-dropdown";

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
        console.log(results.data);
        const convertedData = csvDataArray.map(
          (item: { [x: string]: any }) => ({
            label: item["Codigo"],
            value: item["Codigo"],
          })
        );
        console.log("convertedData: ", convertedData);
        setItems(convertedData);
      },

      header: true,
    });

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
      //   codigo: codigoFii.value,
      //   nome: nomeFii,
      //   valor: parseFloat(valorFii),
      // };

      // Exemplo de uso
      const novoFii = {
        codigo: "300135.SHZ",
        nome: "300135.SHZ",
        valor: 150.0,
        // codigo: "IBM",
        // nome: "ibm",
        // valor: 100.0,
      };
      await adicionarFiiNaCarteira(userId, novoFii);
      await carregarCarteira();
    } catch (error) {
      console.error("Erro ao adicionar FII à carteira: ", error);
    }
  };

  return (
    <>
      {/* Teste do dropdown */}
      <View /*style={styles.container}*/>
        {/* {renderLabel()} */}
        <Dropdown
          // style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
          // placeholderStyle={styles.placeholderStyle}
          // selectedTextStyle={styles.selectedTextStyle}
          // inputSearchStyle={styles.inputSearchStyle}
          // iconStyle={styles.iconStyle}
          data={items}
          search
          // maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select item" : "Selecione o fundo"}
          searchPlaceholder="Search..."
          value={codigoFii}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setCodigoFii(item);
            setIsFocus(false);
            // console.log(codigoFii);
          }}
          // renderLeftIcon={() => (
          //   <AntDesign
          //     style={styles.icon}
          //     color={isFocus ? "blue" : "black"}
          //     name="Safety"
          //     size={20}
          //   />
          // )}
        />
      </View>

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
