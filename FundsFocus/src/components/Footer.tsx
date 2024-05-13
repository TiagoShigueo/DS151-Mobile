import React from "react";
import { View, Text, StyleSheet } from "react-native";
// Componente Footer
const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>© 2024 FundsFocus</Text>
    </View>
  );
};

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

export default Footer;
