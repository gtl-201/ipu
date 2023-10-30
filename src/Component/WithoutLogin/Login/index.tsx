import React, { useState } from 'react';
import { View, TextInput, Text, ImageBackground, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Feather';
import styleScaled from './style';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../Utils/Themes';
import ThemeSwitchScreen from '../../WithLogin/ChangeTheme/changeTheme';
import TextBox from '../../TextBox';
import I18nHelper from '../../../Utils/Helper/i18n';

const LoginScreen = (props: any) => {
  const { theme } = useTheme();
  const styles = styleScaled(theme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = props.navigation;

  const handleSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setLoading(false);
        // (user.user && user.user?.displayName === null)
        //   ? navigation.navigate('FirstSetInfo')
        //   : (user.user && user.user.photoURL === null)
        //     ? navigation.navigate('SetAvatar')
        //     : console.log('User account sign in', user);
        // const displayName = user.user?.displayName ? user.user?.displayName.toString() : undefined;
        // const photoURL = user.user?.photoURL ? user.user?.photoURL.toString() : undefined;
        // displayName && storage.set('user.name', displayName);
        // photoURL && storage.set('user.photoURL', photoURL);
      })
      .catch(error => {
        Alert.alert('Login Failed', error.code);
        setLoading(false);
      });
  };
  const { t } = useTranslation();
  return (
    <ImageBackground
      source={theme.theme === 'light' ? require('../../../../Asset/Picture/5.jpg') : require('../../../../Asset/Picture/bgLoginDark.jpg')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      blurRadius={100}
    >
      {loading && <ActivityIndicator size="large" color={theme.primary} style={{ width: '140%', height: '100%', backgroundColor: 'rgba(255,255,255,0.5)', position: 'absolute', zIndex: 20 }} />}

      <I18nHelper/>
      <TextBox style={styles.title}>LET_SIGN_YOU_IN</TextBox>
      <TextBox style={[styles.subTitle, { marginBottom: 22 }]}>WELCOME_BACK_YOU_BEEN_MISSED</TextBox>

      <TextBox style={styles.inputTitle}>EMAIL</TextBox>
      <View style={styles.containerInput}>
        <Icon2
          name={'user'}
          size={24}
          color={theme.primaryText2} />
        <TextInput
          style={styles.input}
          placeholder={t('EX_IPU_GMAIL_COM')}
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={theme.primaryText3}
        />
      </View>


      <TextBox style={styles.inputTitle}>PASS</TextBox>
      <View style={styles.containerInput}>
        <Icon2
          name={'lock'}
          size={24}
          color={theme.primaryText2} />
        <TextInput
          style={styles.input}
          placeholder={t('TYPE_PASS')}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={theme.primaryText3}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.showPass}>
          <Icon
            name={showPassword ? 'eye' : 'eye-slash'}
            size={20}
            color={theme.primaryText2} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgetPass} onPress={() => { }}>
        <TextBox style={{ color: theme.primaryText, fontSize: 15, fontWeight: '500' }}>FORGET_PASS</TextBox>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.signIn, styles.shadow5]} onPress={() => {
        setLoading(true);
        handleSignIn();
      }}>
        <TextBox style={{ color: theme.onBackground, fontSize: 20, fontWeight: '600', textTransform: 'capitalize' }}>SIGN_IN</TextBox>
      </TouchableOpacity>

      {/*Start Social Connect Account */}
      <TextBox style={styles.continue}>OR_CONTINUE_WITH</TextBox>
      <View style={styles.flexRow}>
        <TouchableOpacity style={styles.borderIc}>
          <Image
            source={require('../../../../Asset/Picture/gg.png')}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.borderIc}>
          <Image
            source={require('../../../../Asset/Picture/fb.png')}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.borderIc}>
          <Image
            source={require('../../../../Asset/Picture/phone.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      {/*End Social Connect Account */}

      {/* Start Register   */}
      <View style={styles.flexRow}>
        <TextBox style={styles.continue}>NOT_MEMBER</TextBox>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <TextBox style={{ color: theme.link, marginLeft: 5, letterSpacing: 1, fontSize: 15 }}>EGISTER_NOW</TextBox>
        </TouchableOpacity>
      </View>
      {/* End Register */}
      <ThemeSwitchScreen />
    </ImageBackground>
  );
};

export default LoginScreen;

