import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SHADOW_1, SHADOW_3 } from '../../Utils/Values';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Utils/Themes';
import styleScaled from './style';

const RegisterScreen = (props: any) => {
  const navigation = props.navigation;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    console.log(email, '---', password);
    if (password === confirmPassword) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
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
          console.log('failed',error.code);

        });
    } else {
      setLoading(false);
      Alert.alert('Register Failed', t('PASS_MUST_SAME'));
    }

  };

  const { t } = useTranslation();
  const {theme} = useTheme();
  const styles = styleScaled(theme);

  return (
    <ImageBackground
    source={theme.theme === 'light' ? require('../../Asset/Picture/5.jpg') : require('../../Asset/Picture/bgLoginDark.jpg')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      blurRadius={50}
    >

      <View style={{ height: 40 }}>
        {loading && <ActivityIndicator size="large" color="#007bff" />}
      </View>

      <Text style={styles.title}>
        {t('WELCOME_TO')}
        <Text style={[styles.title, { color: theme.error }]}> Ipu </Text>
        {t('app')}
      </Text>


      <TextInput
        style={styles.input}
        placeholder={t("email")}
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={theme.primaryText2}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder={t("password")}
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={theme.primaryText2}
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

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder={t("confirm password")}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor={theme.primaryText2}
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
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', textTransform: 'capitalize' }}>{t('SIGN_UP')}</Text>
      </TouchableOpacity>
      {/* <Button title="Đăng ký" onPress={handleRegister} /> */}
      <View style={styles.flexRow}>
        <Text style={styles.continue}>{t('YOU_HAVE_ACCOUNT')}</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: theme.link, marginLeft: 5, letterSpacing: 1 }}>{t('LOGIN_NOW')}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;
