import React, { FC, memo, useState } from 'react';

import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import { useTheme } from '../Themes/index';
import NavigateScreen from '../../Navigation';
import NavigateScreenTest from '../../Navigation/index-test';
import BottomTabV2 from '../../Component/BottomTabV2/index';
import I18nHelper from './i18n';
import Verify from '../../Component/Verify';
import auth from '@react-native-firebase/auth';


const AppContentWithLogin: FC<any> = (props) => {
    // const {choose} = props;
    const { theme } = useTheme();
    const user = auth().currentUser;
    console.log(user?.emailVerified);
    console.log(user?.emailVerified === true, '???');

    //START TAB
    const tabs: any = {
        'home': { icon: { outline: 'home-outline', fill: 'home' }, component: 1 },
        'test': { icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 2 },
        'test2': { icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 3 },
        'test3': { icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 4 },
    };
    const [choose, setchoose] = useState('home');
    const changeTab = (item: string) => {
        setchoose(item);
        console.log(item);
    };
    //END TAB

return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
        <StatusBar
            translucent
            barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'}
            backgroundColor={theme.background}
        />
        {user?.emailVerified === false
            ? <Verify />
            : <View style={{ flex: 1 }}>
                <I18nHelper />
                {choose === 'home' && <NavigateScreen />}
                {choose === 'test' && <NavigateScreenTest />}

                <BottomTabV2 allTab={Object.keys(tabs).map(name => ({ name, ...tabs[name] }))}
                    press={(item: string) => changeTab(item)}
                />
            </View>}
        {/* */}

    </SafeAreaView>
)
    ;
};
const styles = StyleSheet.create({
    container: {
        // position: 'relative',
        minHeight: '100%',
        flex: 1,
        // backgroundColor: 'red',
    },
});

export default memo(AppContentWithLogin);
