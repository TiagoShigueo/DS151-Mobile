import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Componente Navbar
const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.navbarTitle}>Funds Focus</Text>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: "#333",
    padding: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  navbarTitle: {
    color: "#fff",
    fontSize: 20,
  },
  footer: {
    backgroundColor: "#333",
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    color: "#fff",
  },
});

export default Navbar;
