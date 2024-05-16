import {
  View,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { signIn, signUp } from "../services/authService";
import Idv from "../constants/Idv";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const handleSignIn = async () => {
    setLoading("true");
    try {
      await signIn(email, password);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading("false");
    }
  };

  const handleSignUp = async () => {
    setLoading("true");
    try {
      await signUp(email, password);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading("false");
    }
  };

  return (
    <View style={Idv.centralizedContainer}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={Idv.input}
          value={email}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={Idv.input}
          secureTextEntry={true}
          value={password}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <>
            <Button title="Login" onPress={handleSignIn} />
            <Button title="Create account" onPress={handleSignUp} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
