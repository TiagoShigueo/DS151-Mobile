import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Idv from "../constants/Idv";
type RootStackParamList = {
  Home: undefined;
  Portfolio: undefined;
  // Adicione mais telas conforme necessário
};
type FooterNavigationProp = StackNavigationProp<RootStackParamList>;

const Footer = () => {
  const navigation = useNavigation<FooterNavigationProp>();

  const navigateToScreen = (screenName: keyof RootStackParamList) => {
    // Defina o tipo do parâmetro
    navigation.navigate(screenName);
  };

  return (
    <View style={Idv.footer}>
      <TouchableOpacity onPress={() => navigateToScreen("Home")}>
        <Text style={Idv.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen("Portfolio")}>
        <Text style={Idv.buttonText}>Carteira</Text>
      </TouchableOpacity>

      {/* Adicione mais botões de navegação conforme necessário */}
    </View>
  );
};

export default Footer;
