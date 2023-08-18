import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Main from "./components/navigation/Main";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./src/store/store";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { setAuthAsTrue } from "./src/services/AuthSateSlice";

const screenOptions = {
  headerShown: false, // This will remove the header automatically for all screens
};
const Stack = createNativeStackNavigator()


const MyApp = () => {

  const loggedIn = useSelector((state) => state.auth)
  const [isLogin, setIsLogin] = useState(false)
  const [isAuth, setIsAuth] = useState(false)
  const dispatch = useDispatch()
  console.log("Login token", isLogin);
  useEffect(() => {
    const getInitialState = async () => {
      try {
        const storedState = await AsyncStorage.getItem('token');
        if (storedState != null) {
          // const parsedState = JSON.parse(storedState);
          dispatch(setAuthAsTrue());
          setIsLogin(true) // Dispatch action to set the initial state
        }
        else {
          setIsLogin(false)
        }
      } catch (error) {
        console.error('Error retrieving initial state:', error);
      }
    };

    getInitialState();
  }, [])

  return (
    <>
      {!loggedIn ?
        (
          <NavigationContainer >
            <Stack.Navigator screenOptions={screenOptions} initialRouteName="Home">
              <Stack.Screen
                key={0}
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

            </Stack.Navigator>
          </NavigationContainer>
        ) : (

          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerTitle: '' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        )}


    </>
  )
}
export default function App() {

  return (
    <Provider store={store}>

      <MyApp />

    </Provider>
  );
}


