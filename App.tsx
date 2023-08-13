import React, { useEffect, useState } from 'react';

import auth from '@react-native-firebase/auth';

import { ThemeProvider } from './src/Utils/Themes';
import AppContentWithLogin from './src/Utils/Helper/appContentWithLogin';
import AppContentWithoutLogin from './src/Utils/Helper/appContentWithoutLogin';


// firebase.initializeApp(firebaseConfig);
function App(): JSX.Element {
  const [signIn, setSignIn] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      user ? setSignIn(true) : setSignIn(false);
    });
  });

  return (
    <ThemeProvider>
      {
        signIn !== false ? (
          <AppContentWithLogin />
        ) : (
          <AppContentWithoutLogin />
        )}
    </ThemeProvider>
  );
}

export default App;
