import firestore, { firebase } from '@react-native-firebase/firestore';
import { DocumentData, addDoc, collection, getDocs, query } from 'firebase/firestore';
import { FIREBASE_DB } from '../../FirebaseConfig';
import auth from '@react-native-firebase/auth';
export const adicionarFiiNaCarteira = async (userId: string, novoFii: any) => {
    try {
        // Adicionar o novo FII à coleção 'carteiras' para o usuário específico
        await addDoc(collection(FIREBASE_DB, `carteiras/${userId}/ativos`), novoFii);
        console.log('FII adicionado à carteira com sucesso!');
      } catch (error) {
        console.error('Erro ao adicionar FII à carteira: ', error);
      }
};

export const obterCarteira = async (userId: string): Promise<any[] | null> => {
  try {
    const q = query(collection(FIREBASE_DB, `carteiras/${userId}/ativos`));
    const querySnapshot = await getDocs(q);
    const carteira = querySnapshot.docs.map((doc) => ({
      id:doc.id,
      ...doc.data(),
    }));
    return carteira;
  }catch (error) {
    console.error('Erro ao obter carteira: ', error);
    return null;
  }
};

// export const obterIdUsuario = () => {
//   // const usuarioAtual = auth().currentUser;
//   // if (usuarioAtual) {
//   //   console.log('Usuário atual UId: ' + usuarioAtual.uid);
//   //   return usuarioAtual.uid;
//   // } else {
//   //   console.log('Não foi possível buscar o UId do usuário');
//   //   return null
//   // }

//   const user = firebase.auth().currentUser;
//   if (user)
//     console.log('User email: ', user.email);
// }