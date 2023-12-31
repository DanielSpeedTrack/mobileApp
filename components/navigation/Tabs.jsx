import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./screens/Home";
import Porfile from "./screens/Porfile";
import { StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Login from "../Login/Login";
import { COLORS } from "../../assets/constants/theme";
import UserProfile from "./screens/UserProfile";
import Management from "./screens/Management";


import { createNativeStackNavigator } from '@react-navigation/native-stack'
import GpsManagement from "./screens/GpsManagement";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
const Tabs = () => {
    return (
        <Tab.Navigator

            screenOptions={{
                headerTitle: '',
                tabBarStyle: {
                    marginTop: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
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
                    paddingTop: 25,
                    ...styles.shadow// Add horizontal padding to the tab bar
                },

                headerShown: false,

            }}

            initialRouteName="homeScreen"

        >
            <Tab.Screen name="homeScreen"
                component={Home}

                options={{

                    title: 'Acceuil',
                    headerShown: false,

                    tabBarIcon: ({ focused }) => (
                        <Ionicons name="home"
                            size={25}
                            style={{
                                color: focused ? COLORS.primary : COLORS.gray2
                            }}
                        />
                    ),

                }}
            />
            <Tab.Screen name="Profile" component={Porfile}
                options={{
                    title: 'Map',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{}}>
                            <Ionicons name="map"
                                size={25}
                                style={{
                                    color: focused ? COLORS.primary : COLORS.gray2
                                }}
                            />
                        </View>
                    ),

                }}
            />

            <Tab.Screen name="Management" component={Management}

                options={{
                    title: 'Gestion',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{}}>
                            <Ionicons name="settings"
                                size={25}
                                style={{
                                    color: focused ? COLORS.primary : COLORS.gray2
                                }}
                            />
                        </View>
                    ),

                }}
            />

            <Tab.Screen name="UserProfile" component={UserProfile}

                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <View style={{}}>
                            <Ionicons name="person"
                                size={25}
                                style={{
                                    color: focused ? COLORS.primary : COLORS.gray2
                                }}
                            />
                        </View>
                    ),

                }}
            />




        </Tab.Navigator>
    )
}


const styles = StyleSheet.create({
    shadow: {
        // backgroundColor: 'wihte',
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



