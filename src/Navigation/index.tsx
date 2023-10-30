import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Containers/Home';
import Test from '../Containers/test';
// import BottomTabNavigation from '../Containers/BottomTabNavigation';
import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import BottomTabV2 from '../Component/WithLogin/BottomTabV2';
import { useState } from 'react';
import LoginScreen from '../Component/WithoutLogin/Login';
import FirstSetInfoScreen from '../Component/FirstSet/FirstSetInfo/index';
import SetAvatarScreen from '../Component/FirstSet/FirstSetInfo/SetAvatar/index';
import Verify from '../Component/FirstSet/Verify';


const Stack = createNativeStackNavigator();

function NavigateScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'home'}>
                <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="test" component={Test} options={{ headerShown: false }} />
                {/* <Stack.Screen name="login" component={LoginScreen} /> */}
                <Stack.Screen name="verify" component={Verify} options={{ headerShown: false }} />
                <Stack.Screen name="firstSetInfo" component={FirstSetInfoScreen} options={{ headerShown: false }} />
                <Stack.Screen name="setAvatar" component={SetAvatarScreen} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default NavigateScreen;
