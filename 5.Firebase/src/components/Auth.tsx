import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebaseConfig";
import { AntDesign } from "@expo/vector-icons";
const logo = require("../assets/images/logo.png");
const Login = ({ setUser }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <View style={styles.container}>
      <Image source={logo} /*style={styles.Img}*/ />
      <View /*style={styles.inputConainer}*/>
        <TextInput /*style={styles.input}*/
          placeholder="Login"
          placeholderTextColor="black"
          value={email}
          onChangeText={(val) => {
            setEmail(val);
          }}
        />
      </View>
      <View /*style={styles.inputContainer}*/>
        <TextInput
          /*style={styles.input}*/ placeholder="Senha"
          placeholderTextColor="black"
          value={password}
          onChangeText={(val) => {
            setPassword(val);
          }}
        />
      </View>
      <TouchableOpacity onPress={handleLogin} activeOpacity={0.75}>
        <Text /*style={styles.loginTxt}*/>Fazer login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

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
