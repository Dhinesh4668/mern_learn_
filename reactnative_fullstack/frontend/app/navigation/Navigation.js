import {createStackNavigator } from "@react-navigation/stack"
import {HomeScreen, ImagePicker, OnbordScreen} from "../index";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import OnbordScreen1 from "../screens/onbording/OnbordScreen1";
import ImagePick from "../screens/ImagePicker/ImagePicker";

let Stack;
let Tab;
Stack = createStackNavigator();
Tab = createBottomTabNavigator()
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
            <Stack.Screen name={"imagePicker"} component={ImagePick} />
        </Stack.Navigator>
    )
}

const TabNavigation =()=>{
    return(
        <Tab.Naviagter>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Chat" component={OnbordScreen1} />
        </Tab.Naviagter>
    )
}

export default Navigation