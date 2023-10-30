import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SHADOW_1, SHADOW_3 } from '../../../Utils/Values';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Feather';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../Utils/Themes';
import styleScaled from './style';
import { MMKV } from 'react-native-mmkv';
import TextBox from '../../TextBox';

const RegisterScreen = (props: any) => {
  const navigation = props.navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  // const storage = new MMKV();

  const handleRegister = () => {
    console.log(email, '---', password);
    if (password === confirmPassword) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {

          setLoading(false);
          // const displayName = user.user?.displayName ? user.user?.displayName.toString() : undefined;
          // const photoURL = user.user?.photoURL ? user.user?.photoURL.toString() : undefined;
          // displayName && storage.set('user.name', displayName);
          // photoURL && storage.set('user.photoURL', photoURL);
          // (user.user && user.user?.displayName === null)
          //   ? navigation.navigate('FirstSetInfo')
          //   : (user.user && user.user.photoURL === null)
          //     ? navigation.navigate('SetAvatar')
          //     : console.log('User account created & signed in!');
        })
        .catch(error => {
          setLoading(false);
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Register Failed', t('WRONG_OR_USED'));
          }
          else if (error.code === 'auth/invalid-email') {
            Alert.alert('Register Failed', t('INVILED_EMAIL_PASS'));
          }
          else {
            // console.error(error.code);
            Alert.alert('Register Failed', t('REGIS_FAILED_CHECK_AND_TRY'));
          }
          console.log('failed', error.code);

        });
    } else {
      setLoading(false);
      Alert.alert('Register Failed', t('PASS_MUST_SAME'));
    }

  };

  const { t } = useTranslation();
  const { theme } = useTheme();
  const styles = styleScaled(theme);

  return (
    <ImageBackground
      source={theme.theme === 'light' ? require('../../../../Asset/Picture/5.jpg') : require('../../../../Asset/Picture/bgLoginDark.jpg')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      blurRadius={100}
    >

      {loading && <ActivityIndicator size="large" color={theme.primary} style={{ width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.5)', position: 'absolute', zIndex: 20 }} />}

      <TextBox style={styles.title}>{t('GETTING_STARTED')}</TextBox>
      <TextBox style={[styles.subTitle, { marginBottom: 22 }]}>{t('CRETE_ACCOUNT_TO_CONTINUE')}</TextBox>


      <TextBox style={styles.inputTitle}>{t('EMAIL')}</TextBox>
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


      <TextBox style={styles.inputTitle}>{t('PASS')}</TextBox>
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
            color={theme.primaryText3} />
        </TouchableOpacity>
      </View>

      <TextBox style={styles.inputTitle}>{t('CONFIRM_PASS')}</TextBox>
      <View style={styles.containerInput}>
        <Icon2
          name={'lock'}
          size={24}
          color={theme.primaryText2} />
        <TextInput
          style={styles.input}
          placeholder={t("confirm password")}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor={theme.primaryText3}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={styles.showPass}>
          <Icon
            name={showConfirmPassword ? 'eye' : 'eye-slash'}
            size={20}
            color={theme.primaryText3} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.signUp, styles.shadow5]} onPress={() => {
        setLoading(true);
        handleRegister();
      }}>
        <TextBox style={{ color: 'white', fontSize: 20, fontWeight: '600', textTransform: 'capitalize' }}>{t('SIGN_UP')}</TextBox>
      </TouchableOpacity>
      {/* <Button title="Đăng ký" onPress={handleRegister} /> */}
      <View style={styles.flexRow}>
        <TextBox style={styles.continue}>{t('YOU_HAVE_ACCOUNT')}</TextBox>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <TextBox style={{ color: theme.link, marginLeft: 5, letterSpacing: 1, fontSize: 15 }}>{t('LOGIN_NOW')}</TextBox>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
