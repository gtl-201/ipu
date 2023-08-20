import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Containers/Home';
import Test from '../Containers/test';
// import BottomTabNavigation from '../Containers/BottomTabNavigation';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import BottomTabV2 from '../Component/BottomTabV2';
import { useState } from 'react';
import LoginScreen from '../Component/Login';

const Stack = createNativeStackNavigator();

function NavigateScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'home'}>
                <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="test" component={Test} options={{headerShown: false}}/>
                {/* <Stack.Screen name="bottomTabNavigation" component={BottomTabNavigation} /> */}
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default NavigateScreen;
