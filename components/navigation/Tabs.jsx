import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Porfile from "./screens/Porfile";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Login from "../Login/Login";

const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{

                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    borderRadius: 15,
                    elevation: 0,
                    height: 90,
                    backgroundColor: 'white', // Change to your desired background color
                    borderTopWidth: 1, // Add a border to the top of the tab bar
                    borderTopColor: '#dddddd', // Border color
                    paddingHorizontal: 10,
                    ...styles.shadow// Add horizontal padding to the tab bar
                },
                headerShown: false,

            }}

            initialRouteName="homeScreen"

        >
            <Tab.Screen name="homeScreen" component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="home" />
                    )
                }}
            />
            <Tab.Screen name="Profile" component={Porfile}

            />

        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#7F5DF0",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5

    }
})

export default Tabs



