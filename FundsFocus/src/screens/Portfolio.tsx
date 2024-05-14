import React, { useState } from "react";
import { Button, TextInput } from "react-native";
import { adicionarFiiNaCarteira, obterIdUsuario } from "../services/firebase";
import { getUserId } from "../utils/User";

const Portfolio = () => {
  const [codigoFii, setCodigoFii] = useState("");
  const [quantidadeFii, setQuantidadeFii] = useState("");
  const [valorFii, setValorFii] = useState("");
  const userId: string = getUserId()!;

  const adicionarFii = async () => {
    // Validar os dados, se necessário
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

    // Chamar o método para adicionar o FII na carteira
    await adicionarFiiNaCarteira(userId, novoFii);
  };

  const obterIdUser = async () => {
    await obterIdUsuario();
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
      <Button title="Buscar UId do usuário" onPress={obterIdUser} />
    </>
  );
};

export default Portfolio;
