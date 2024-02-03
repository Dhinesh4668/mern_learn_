import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, OnbordScreen } from "../index";
import ImagePick from "../screens/ImagePicker/ImagePicker";
import userRegersterScreen from "../screens/auth/userRegersterScreen";

let Stack = createStackNavigator();
let Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="home" options={{
                headerShown: false
            }} component={TabNavigation} />
            <Stack.Screen
                name="onbord"
                options={{
                    gestureEnabled: true,
                    headerShown: false,
                    cardOverlayEnabled: true,
                    presentation: "modal",
                }}
                component={OnbordScreen}
            />
            <Stack.Screen
                options={{
                    gestureEnabled: true,
                }}
                name={"imagePicker"}
                component={ImagePick}
            />
        </Stack.Navigator>
    );
};

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chat" component={userRegersterScreen} />
        </Tab.Navigator>
    );
};

export default Navigation;
