import React, { useEffect, useState } from 'react';

import auth from '@react-native-firebase/auth';

import { ThemeProvider } from './src/Utils/Themes';
import AppContentWithLogin from './src/Utils/Helper/appContentWithLogin';
import AppContentWithoutLogin from './src/Utils/Helper/appContentWithoutLogin';
import { MMKV } from 'react-native-mmkv';

// firebase.initializeApp(firebaseConfig);
function App(): JSX.Element {
  const [signIn, setSignIn] = useState(false);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      console.log(user);
      (user)
        ? setSignIn(true)
        : setSignIn(false);
    });
    [];
  });




  return (
    <ThemeProvider>
      {
        signIn !== false ? (
          <AppContentWithLogin />
          // <Verify />
        ) : (
          <AppContentWithoutLogin />
        )}
    </ThemeProvider>
  );
}

export default App;
