import React, { useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styleScaled from './style';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Utils/Themes';
// import { connect } from 'react-redux';


const LoginScreen = (props: any) => {
  const {theme} = useTheme();
  const styles = styleScaled(theme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = props.navigation;


  // const handleSignUp = () => {
  // auth
  //   .createUserWithEmailAndPassword(email, password)
  //   .then((userCredentials: { user: any; }) => {
  //     const user = userCredentials.user;
  //     console.log(user.email);
  //   }).catch((err: { message: any; }) => console.log(err.message));
  // };

  const handleSignIn = () => {

    auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log('User account sign in', user);
        setLoading(false);
      })
      .catch(error => {
        Alert.alert('Login Failed', error.code);
        setLoading(false);
      });
  };
  const { t } = useTranslation();
  return (
    <ImageBackground
      source={theme.theme === 'light' ? require('../../Asset/Picture/5.jpg') : require('../../Asset/Picture/bgLoginDark.jpg')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      blurRadius={50}
    >
      <View style={{ height: 40 }}>
        {loading && <ActivityIndicator size="large" color={theme.primary} />}
      </View>
      <Text style={styles.title}>{t('WELCOME_AGAIN')}</Text>
      <Text style={styles.subTitle}>{t("welcome back you've")}</Text>
      <Text style={[styles.subTitle, { marginBottom: 22 }]}>{t('BEEN_MISSED')}</Text>

      <TextInput
        style={styles.input}
        placeholder= {t('EMAIL')}
        value={email}
        onChangeText={setEmail}
        placeholderTextColor={theme.primaryText2}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder={t('PASS')}
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
            color={theme.primaryText2} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.forgetPass} onPress={() => { }}>
        <Text style={{ color: theme.primaryText, fontSize: 15, fontWeight: '500' }}>{t('FORGET_PASS')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.signIn, styles.shadow5]} onPress={() => {
        setLoading(true);
        handleSignIn();
      }}>
        <Text style={{ color: theme.onBackground, fontSize: 20, fontWeight: '600', textTransform: 'capitalize' }}>{t('SIGN_IN')}</Text>
      </TouchableOpacity>

      {/*Start Social Connect Account */}
      <Text style={styles.continue}>{t('OR_CONTINUE_WITH')}</Text>
      <View style={styles.flexRow}>
        <TouchableOpacity style={styles.borderIc}>
          <Image
            source={require('../../Asset/Picture/gg.png')}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.borderIc}>
          <Image
            source={require('../../Asset/Picture/fb.png')}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.borderIc}>
          <Image
            source={require('../../Asset/Picture/phone.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      {/*End Social Connect Account */}

      {/*
      <Text style={styles.text}>Bạn chưa có tài khoản?</Text>
      <Button title='Đăng ký' onPress={() => navigation.navigate('signUp')} />
      <Button title="check user" onPress={() => console.log('currentUser:', auth().currentUser)} />
      <Button title="sign out" onPress={handleSignout} /> */}

      {/* Start Register   */}
      <View style={styles.flexRow}>
        <Text style={styles.continue}>{t('NOT_MEMBER')}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={{ color: theme.link, marginLeft: 5, letterSpacing: 1 }}>{t('REGISTER_NOW')}</Text>
        </TouchableOpacity>
      </View>
      {/* End Register */}
    </ImageBackground>
  );
};


// function mapStateToProps(state: any) {
//   return {
//     color: state.controlApp.settings.color.LOGIN,
//     language: state.controlApp.settings.language,
//   };
// }

// export default connect(mapStateToProps)(LoginScreen);


export default LoginScreen;

