import {createStackNavigator } from "@react-navigation/stack"
import { HomeScreen, OnbordScreen } from "../index"

const stack = createStackNavigator()

const Navigation = () =>{
    <stack.Navigator>
        <stack.Screen name="home" component={HomeScreen} />
        <stack.Screen name="onbord" component={OnbordScreen} />
    </stack.Navigator>
}

export default Navigation