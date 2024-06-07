import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyD6DkVFFhP01yZPQLAASiLqp6oCdyP3g9A",
  authDomain: "fir-b9d52.firebaseapp.com",
  projectId: "fir-b9d52",
  storageBucket: "fir-b9d52.appspot.com",
  messagingSenderId: "356926613214",
  appId: "1:356926613214:web:3f43124c977813c117844f"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage persistence
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const FIREBASE_DB = getFirestore(FIREBASE_APP);
