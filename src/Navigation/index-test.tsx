import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Containers/Home';
import Test from '../Containers/test';
// import BottomTabNavigation from '../Containers/BottomTabNavigation';

const Stack = createNativeStackNavigator();

function NavigateScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'test'}>
                <Stack.Screen name="home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="test" component={Test} options={{headerShown: false}}/>
                {/* <Stack.Screen name="bottomTabNavigation" component={BottomTabNavigation} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}



export default NavigateScreen;
