import React, { FC, memo, useState } from 'react';

import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';
import { useTheme } from '../Themes/index';
import NavigateScreen from '../../Navigation';
import NavigateScreenTest from '../../Navigation/index-test';
import BottomTabV2 from '../../Component/BottomTabV2/index';
import I18nHelper from './i18n';

const AppContentWithLogin: FC<any> = (props) => {
    // const {choose} = props;
    const { theme } = useTheme();
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
    console.log(StatusBar.currentHeight, '-000000');

    return (
        <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]}>
            <StatusBar
                translucent
                barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor={theme.background}
            />
            <I18nHelper />
            {choose === 'home' && <NavigateScreen />}
            {choose === 'test' && <NavigateScreenTest />}

            <BottomTabV2 allTab={Object.keys(tabs).map(name => ({ name, ...tabs[name] }))}
                press={(item: string) => changeTab(item)}
            />
        </SafeAreaView>
    )
        ;
};
const styles = StyleSheet.create({
    container: {
        // position: 'relative',
        minHeight: '100%',
        // backgroundColor: 'red',
    },
});

export default memo(AppContentWithLogin);
