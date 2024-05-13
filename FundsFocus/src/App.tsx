import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { User, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import Login from "./screens/Login";
import Details from "./screens/Details";
import List from "./screens/List";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeScreen from "./screens/Home";

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
        {/* <InsideStack.Screen
          name="My todos"
          component={List}
          options={{ headerShown: false }}
        />
        <InsideStack.Screen name="details" component={Details} /> */}
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
  );
}
