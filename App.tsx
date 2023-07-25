import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';
import BottomTabV2 from './src/Component/BottomTabV2/index';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import NavigateScreen from './src/Navigation';
import NavigateScreenTest from './src/Navigation/index-test';
import NavigateScreenAuth from './src/Navigation/authentic';
import auth from '@react-native-firebase/auth';

// import firebase from '@react-native-firebase/app';


// firebase.initializeApp(firebaseConfig);
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#E9EDF6' : '#E9EDF6',
  };
  const [choose, setchoose] = useState('home');
  const changeTab = (item: string) => {
    setchoose(item);
    console.log(item);

  };
  console.log(auth().currentUser);
  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      user ? setSignIn(true) : setSignIn(false);
    });
  });
  if (signIn === false) {
    return (
      <NavigateScreenAuth />
    );
  } else {
    return (

      <SafeAreaView style={styles.container}>
        {/* <View style={{ flex: 1 }}> */}
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={[backgroundStyle, { minHeight: '100%' }]}
        >
          <NavigateScreen />
        </ScrollView> */}
        {choose === 'home' && <NavigateScreen />}
        {choose === 'test' && <NavigateScreenTest />}

        {/* <View style={{backgroundColor: 'pink', width: '100%', height: 20}}></View> */}

        <BottomTabV2 allTab={
          [
            { name: 'home', icon: { outline: 'home-outline', fill: 'home' }, component: 1 },
            { name: 'test', icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 2 },
            { name: 'test', icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 3 },
            { name: 'test', icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 4 },
            // { name: 'test', icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 5 },
          ]
        }
          color={Colors}
          press={(item: string) => changeTab(item)}
        />

      </SafeAreaView>
      // </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    minHeight: '100%',
    backgroundColor: '#E9EDF6',
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
