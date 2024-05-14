import { View, Text, Button } from "react-native";
import React, { useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";
import { FIREBASE_AUTH, FIREBASE_DB } from "../../FirebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { getIdToken } from "firebase/auth";
interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const List = ({ navigation }: RouterProps) => {
  useEffect(() => {}, []);

  const addTodo = async () => {
    const doc = addDoc(collection(FIREBASE_DB, "todos"), {
      title: "I am a test",
      done: false,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center " }}>
      <Button
        onPress={() => navigation.navigate("details")}
        title="Open Details"
      />
      <Button onPress={() => addTodo()} title="Add Todo" />

      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  );
};

export default List;