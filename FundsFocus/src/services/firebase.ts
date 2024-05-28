import firestore, { firebase } from '@react-native-firebase/firestore';
import { DocumentData, addDoc, collection, getAggregateFromServer, getDocs, orderBy, query, sum } from 'firebase/firestore';
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

export const obterCarteiraOrdenada = async (userId: string): Promise<any[] | null> => {
  try {
    const q = query(collection(FIREBASE_DB, `carteiras/${userId}/ativos`), orderBy("codigo"));
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

interface Ativo {
  codigo: string;
  quantidade: number;
  valor: number;
}

export const obterCarteiraAgrupada = async (userId: string): Promise<any[] | null> => {
  try {
    const coll = collection(FIREBASE_DB, `carteiras/${userId}/ativos`);
    const snapshot = await getDocs(coll);
    const carteiraData: any[] = [];

    snapshot.forEach((doc) => {
      carteiraData.push(doc.data());
    });

    const carteiraAgrupada = carteiraData.reduce((acc, curr) => {
      const { codigo, quantidade, valor } = curr;
      if (!acc[codigo]) {
        acc[codigo] = { codigo, quantidade: 0, valorTotal: 0 };
      }
      acc[codigo].quantidade += quantidade;
      acc[codigo].valorTotal += quantidade * valor;
      return acc;
    }, {});

    return Object.values(carteiraAgrupada);
  } catch (error) {
    console.error('Erro ao obter carteira: ', error);
    return null;
  }
};