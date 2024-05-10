import { StyleSheet } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { Text, View } from "@/src/components/Themed";
import Login from "@/src/components/Auth";
import { useState } from "react";
import Two from "./two";
export default function TabOneScreen() {
  const [user, setUser] = useState();

  return !user ? <Login setUser={setUser} /> : <Two />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
