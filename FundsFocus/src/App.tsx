import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import Login from "./screens/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./screens/Home";
import Portfolio from "./screens/Portfolio";
import { SafeAreaView } from "react-native";

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function InsideLayout() {
  return (
    <>
      <Navbar />
      <InsideStack.Navigator>
        <InsideStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        <InsideStack.Screen
          name="Portfolio"
          component={Portfolio}
          options={{ headerShown: false }}
        />
      </InsideStack.Navigator>
      <Footer />
    </>
  );
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      setUser(user);
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {user ? (
            <Stack.Screen
              name="Inside"
              component={InsideLayout}
              options={{
                headerShown: false,
              }} /* Some com o Header onde ficava aquele Título da página */
            />
          ) : (
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }} /* Some com o Header onde ficava aquele Título da página */
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
