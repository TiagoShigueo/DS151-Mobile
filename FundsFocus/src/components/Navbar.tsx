import React from "react";
import { View, Text, Image, Button, TouchableOpacity } from "react-native";
import Idv from "../constants/Idv";
import { logout } from "../services/authService";

const Navbar = () => {
  return (
    <View style={Idv.navbar}>
      <Image
        style={Idv.tinyLogo}
        source={require("../../assets/logo.png")}
        resizeMode="contain"
      />
      <Text style={Idv.navbarTitle}>Funds Focus</Text>
      <TouchableOpacity style={Idv.button} onPress={() => logout()}>
        <Text style={Idv.buttonTextWhite}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
