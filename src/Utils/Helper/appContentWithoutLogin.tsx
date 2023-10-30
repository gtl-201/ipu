import React, { FC, memo } from 'react';

import { StatusBar, StyleSheet, View } from 'react-native';
import { useTheme } from '../Themes/index';
import NavigateScreenAuth from '../../Navigation/authentic';
import I18nHelper from './i18n';

const AppContentWithoutLogin: FC<any> = props => {
  const { theme } = useTheme();
  return (
    // <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* <View style={{width: '100%', height: 40, alignSelf: 'flex-start'}}>
        <I18nHelper />
      </View> */}

      <StatusBar
        translucent
        barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={theme.background}
      />
      <NavigateScreenAuth />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // position: 'relative',
    minHeight: '100%',
    // backgroundColor: 'red',
  },
});

export default memo(AppContentWithoutLogin);
