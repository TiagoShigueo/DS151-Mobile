import React from "react";
import { View, Text } from "react-native";
import Idv from "../constants/Idv";

// Componente Navbar
const Navbar = () => {
  return (
    <View style={Idv.navbar}>
      <Text style={Idv.navbarTitle}>Funds Focus</Text>
    </View>
  );
};

export default Navbar;
