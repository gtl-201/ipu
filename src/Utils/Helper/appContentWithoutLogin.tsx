import React, { FC, memo } from 'react';

import { StatusBar, StyleSheet, View } from 'react-native';
import { useTheme } from '../Themes/index';
import NavigateScreenAuth from '../../Navigation/authentic';

const AppContentWithoutLogin: FC<any> = props => {
  const { theme } = useTheme();
  return (
    // <SafeAreaView style={[styles.container, { backgroundColor: theme.background }]}>
    <View style={[styles.container, { backgroundColor: theme.background }]}>
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
