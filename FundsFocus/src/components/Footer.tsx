import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type RootStackParamList = {
  Home: undefined;
  details: undefined;
  My_todos: undefined;
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
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigateToScreen("Home")}>
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen("details")}>
        <Text style={styles.buttonText}>details</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen("My_todos")}>
        <Text style={styles.buttonText}>List</Text>
      </TouchableOpacity>
      {/* Adicione mais botões de navegação conforme necessário */}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ccc",
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Footer;
