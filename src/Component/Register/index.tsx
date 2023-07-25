import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SHADOW_1, SHADOW_3 } from '../../Utils/Values';
import Icon from 'react-native-vector-icons/FontAwesome5';

const RegisterScreen = (props: any) => {
  const navigation = props.navigation;

  const [username, setUsername] = useState('');
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
          if (error.code === 'auth/email-already-in-use') {
            Alert.alert('Register Failed', 'That email address is wrong or already in use!');
          }
          else if (error.code === 'auth/invalid-email') {
            Alert.alert('Register Failed', 'That email address is invalid!');
          }
          else {
            // console.error(error.code);
            Alert.alert('Register Failed', error.code);
          }
          Alert.alert('Register Failed', error.code);

        });
    } else {
      Alert.alert('Register Failed', 'Password you`ve type not must be same');
    }

  };

  return (
    <ImageBackground
      source={require('../../Asset/Picture/5.jpg')}
      style={styles.container}
      imageStyle={styles.backgroundImage}
      blurRadius={50}
    >

      <View style={{height: 40}}>
      {loading && <ActivityIndicator size="large" color="#007bff" />}
      </View>

      <Text style={styles.title}>
        Welcome to
        <Text style={[styles.title, { color: '#ED2939' }]}>Ipu</Text>
        App
      </Text>
      {/* <Text style={styles.subTitle}>Welcome back you've</Text> */}
      {/* <Text style={[styles.subTitle, { marginBottom: 22 }]}>been missed!</Text> */}


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

      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          style={styles.showPass}>
          <Icon
            name={showConfirmPassword ? 'eye' : 'eye-slash'}
            size={20}
            color={'grey'} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.signUp, styles.shadow5]} onPress={() => {
        setLoading(true);
        handleRegister();
        }}>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: '600', textTransform: 'capitalize' }}>Đăng ký</Text>
      </TouchableOpacity>
      {/* <Button title="Đăng ký" onPress={handleRegister} /> */}
      <View style={styles.flexRow}>
        <Text style={styles.continue}>You already have an Account?</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{ color: 'blue', marginLeft: 5, letterSpacing: 1 }}>Login Now</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    opacity: 0.9,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    letterSpacing: 1.2,
    // color: '#333333',
    opacity: 0.9,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 2,
    // color: '#333333',
    opacity: 0.9,

  },
  signUp: {
    backgroundColor: '#ED2939',
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // ...SHADOW_5,
    marginVertical: 40,
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
    ...SHADOW_3,
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showPass: {
    position: 'absolute',
    right: 15,
    top: 23,
  },
  flexRow: {
    // flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  continue: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 1,
    marginVertical: 15,
  },
});

export default RegisterScreen;
