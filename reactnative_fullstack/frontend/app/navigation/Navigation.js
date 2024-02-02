import {createStackNavigator } from "@react-navigation/stack"
import { HomeScreen, OnbordScreen } from "../index";

let Stack;
Stack = createStackNavigator();

const Navigation = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="onbord" options={{
                gestureEnabled: true,
                headerShown: false,
                cardOverlayEnabled: true,
                presentation: "modal"
            }}  component={OnbordScreen} />
        </Stack.Navigator>
    )
}


export default Navigation