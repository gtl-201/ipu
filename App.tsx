import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import BottomTabV2 from './src/Component/BottomTabV2/index';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import NavigateScreen from './src/Navigation';
import NavigateScreenTest from './src/Navigation/index-test';
import NavigateScreenAuth from './src/Navigation/authentic';
import auth from '@react-native-firebase/auth';

import I18nHelper from './src/Utils/Helper/i18n';
import { ThemeProvider, useTheme } from './src/Utils/Themes';

// firebase.initializeApp(firebaseConfig);
function App(): JSX.Element {
  const [choose, setchoose] = useState('home');
  const changeTab = (item: string) => {
    setchoose(item);
    console.log(item);
  };
  // console.log(auth().currentUser);
  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      user ? setSignIn(true) : setSignIn(false);
    });
  });

  const tabs: any = {
    'home': { icon: { outline: 'home-outline', fill: 'home' }, component: 1 },
    'test': { icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 2 },
    'test2': { icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 3 },
    'test3': { icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 4 },
  };

  // eslint-disable-next-line react/no-unstable-nested-components
  function AppContent() {
    const { theme } = useTheme();
    return (
      <SafeAreaView style={[styles.container, {backgroundColor: theme.background}]}>
        <StatusBar
            barStyle={theme.theme === 'dark' ? 'light-content' : 'dark-content'}
            // backgroundColor={theme.background}
          />
        <I18nHelper />

        {choose === 'home' && <NavigateScreen />}
        {choose === 'test' && <NavigateScreenTest />}

        <BottomTabV2 allTab={Object.keys(tabs).map(name => ({ name, ...tabs[name] }))}
          color={Colors}
          press={(item: string) => changeTab(item)}
        />
      </SafeAreaView>
    );
  }

  if (signIn === false) {
    return (
      <NavigateScreenAuth />
    );
  } else {
    return (
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
      // </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    minHeight: '100%',
    // backgroundColor: 'red',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
