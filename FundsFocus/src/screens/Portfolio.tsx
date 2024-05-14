import React, { useState } from "react";
import { Button, TextInput } from "react-native";
import { adicionarFiiNaCarteira } from "../services/firebase";

const Portfolio = () => {
  const [codigoFii, setCodigoFii] = useState("");
  const [quantidadeFii, setQuantidadeFii] = useState("");
  const [valorFii, setValorFii] = useState("");

  const adicionarFii = async () => {
    // Validar os dados, se necessário
    // const novoFii = {
    //   codigo: codigoFii,
    //   nome: nomeFii,
    //   valor: parseFloat(valorFii),
    // };

    // Exemplo de uso
    const novoFii = {
      codigo: "IBM",
      nome: "ibm",
      valor: 100.0,
    };

    // Chamar o método para adicionar o FII na carteira
    await adicionarFiiNaCarteira("Tiago", novoFii);
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
    </>
  );
};

export default Portfolio;
