import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import BottomTabV2 from './src/Component/BottomTabV2/index';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import NavigateScreen from './src/Navigation';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#E9EDF6' : '#E9EDF6',
  };
  return (
    <SafeAreaView style={styles.container}>
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
      <NavigateScreen />
      <BottomTabV2 allTab={
        [
          { name: 'Home', icon: { outline: 'home-outline', fill: 'home' }, component: 1 },
          { name: 'test', icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 2 },
          { name: 'test', icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 3 },
          { name: 'test', icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 4 },
          // { name: 'test', icon: { outline: 'car-sport-outline', fill: 'car-sport-sharp' }, component: 5 },
        ]
      } color={Colors} />
    </SafeAreaView>
  );
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
