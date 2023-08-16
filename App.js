import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Main from "./components/navigation/Main";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
const screenOptions = {
  headerShown: false, // This will remove the header automatically for all screens
};
const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>

      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen
            name='Home'
            component={Home}
            options={{ headerTitle: '' }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerTitle: '' }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerTitle: '' }}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{ headerTitle: '' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


