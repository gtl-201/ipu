import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import auth from '@react-native-firebase/auth';
import { SHADOW_1 } from '../../Utils/Values';

const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log(email, '---', password);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
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
      <Text style={styles.title}>Đăng ký tài khoản</Text>
      <TextInput
        placeholder="Tên đăng nhập"
        onChangeText={text => setUsername(text)}
        value={username}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
        style={styles.input}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Mật khẩu"
        onChangeText={text => setPassword(text)}
        value={password}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Đăng ký" onPress={handleRegister} />

    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
});

export default RegisterScreen;
