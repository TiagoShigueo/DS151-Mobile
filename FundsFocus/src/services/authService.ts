import { Platform } from "react-native";
import { FIREBASE_AUTH } from "../../FirebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

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