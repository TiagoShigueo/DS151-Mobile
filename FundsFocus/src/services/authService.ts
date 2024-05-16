import { Platform } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { setUserId } from "../utils/User";

const cleanUserId = async () => {
    try {
        if (Platform.OS === 'web'){
            localStorage.removeItem('userId');
        } else {
        await AsyncStorage.removeItem('userId')
        }
        console.log('Id do usuário removido do armazenamento');
    } catch(error) {
        console.error('Erro ao limpar o ID do usuário: ', error);
    }
};

export const logout = async () => {
    try {
        await FIREBASE_AUTH.signOut();
        await cleanUserId();
    } catch (error) {
        console.error('Erro ao fazer logout: ', error);
    }
};

/* arrumar daqui para baixo */

const auth = FIREBASE_AUTH;

export const signIn = async (email: string, password: string) => {
    // setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      setUserId(response.user.uid);
    } catch (error: any) {
      console.error('Erro ao realizar Login: ', error);
      alert("Sign in failed: " + error.message);
    }
  };

  export const signUp = async (email: string, password: string) => {
    // setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      // alert("Check your emails!");
    } catch (error: any) {
      console.error('Erro ao realizar o cadastro: ', error);
      // alert("Sign in failed: " + error.message);
    } 
  };