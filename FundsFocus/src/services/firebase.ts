import firestore from '@react-native-firebase/firestore';
import { addDoc, collection } from 'firebase/firestore';
import { FIREBASE_DB } from '../../FirebaseConfig';

export const adicionarFiiNaCarteira = async (userId: string, novoFii: any) => {
    try {
        // Adicionar o novo FII à coleção 'carteiras' para o usuário específico
        await addDoc(collection(FIREBASE_DB, `carteiras/${userId}/fiis`), novoFii);
        console.log('FII adicionado à carteira com sucesso!');
      } catch (error) {
        console.error('Erro ao adicionar FII à carteira: ', error);
      }
};

export const obterCarteira = async (userId: string) => {
  try {
    const snapshot = await firestore()
      .collection('carteiras')
      .doc(userId)
      .get();
    if (snapshot.exists) {
      return snapshot.data();
    } else {
      console.log('Nenhuma carteira encontrada para este usuário.');
      return null;
    }
  } catch (error) {
    console.error('Erro ao obter carteira: ', error);
    return null;
  }
};
