import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Component/WithoutLogin/Login/index';
import RegisterScreen from '../Component/WithoutLogin/Register/index';
import OnBoardScreen from '../Component/WithoutLogin/OnBoarding/index';
// import BottomTabNavigation from '../Containers/BottomTabNavigation';


const Stack = createNativeStackNavigator();

function NavigateScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'onBoard'}>
            {/* <Stack.Navigator initialRouteName={'login'}> */}

            <Stack.Screen name="login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="register" component={RegisterScreen} options={{headerShown: false}}/>
            <Stack.Screen name="onBoard" component={OnBoardScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default NavigateScreen;
