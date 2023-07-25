import React, { useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SHADOW_1, SHADOW_3, SHADOW_5 } from './../../Utils/Values/shadows';
import { moderateScale } from 'react-native-size-matters';

const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <ImageBackground
      source={require('../../Asset/Picture/blueSky.jpg')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      blurRadius={10}
    >
      <Text style={styles.title}>Hello Again!</Text>
      <Text style={styles.subTitle}>Welcome back you've</Text>
      <Text style={[styles.subTitle, { marginBottom: 22 }]}>been missed!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.showPass}>
          <Icon
            name={showPassword ? 'eye' : 'eye-slash'}
            size={20}
            color={'grey'} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.forgetPass} onPress={() => { }}>
        <Text style={{ color: 'gray' }}>Quên mật khẩu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.signIn, styles.shadow5]} onPress={handleSignIn}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', textTransform: 'capitalize' }}>Đăng nhập</Text>
      </TouchableOpacity>

      <Text style={styles.continue}>or continues with</Text>

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
      {/*
      <Text style={styles.text}>Bạn chưa có tài khoản?</Text>
      <Button title='Đăng ký' onPress={() => navigation.navigate('signUp')} />
      <Button title="check user" onPress={() => console.log('currentUser:', auth().currentUser)} />
      <Button title="sign out" onPress={handleSignout} /> */}

      {/* </BlurView> */}
      <View style={styles.flexRow}>
        <Text style={styles.continue}>not a menber?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('register')}>
          <Text style={{ color: 'blue', marginLeft: 5, letterSpacing: 1 }}>Register Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    // width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    opacity: 0.7,
  },
  absoluteBlur: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Điều này sẽ tạo hiệu ứng mờ giống kính
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  input: {
    height: 45,
    fontSize: 16,
    marginVertical: 10,
    width: '100%',
    borderColor: 'gray',
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 10,

    borderWidth: 1,
    borderRadius: 10,
    borderTopWidth: 0,
    borderEndWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    ...SHADOW_1,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    textAlign: 'center',
  },
  showPass: {
    position: 'absolute',
    right: 15,
    top: 23,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    letterSpacing: 1.2,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 2,
  },
  continue: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 1,
    marginVertical: 15,
  },
  forgetPass: {
    width: '100%',
    alignItems: 'flex-end',
    marginVertical: 5,
  },
  signIn: {
    backgroundColor: '#ED2939',
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // ...SHADOW_5,
    marginVertical: 20,
  },
  shadow5: {
    shadowColor: "#ED2939",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  image: {
    width: 22,
    height: 22,
  },
  borderIc: {
    borderRadius: 10,
    borderWidth: 5,
    borderColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  flexRow: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
});

export default LoginScreen;

