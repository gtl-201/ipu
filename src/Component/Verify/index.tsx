import React, { useEffect, useRef, useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity, Image, Alert, ActivityIndicator, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styleScaled from './style';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Utils/Themes';
// import { connect } from 'react-redux';

const Verify = (props: any) => {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const navigation = props.navigation;
  const styles = styleScaled(theme);

  //START VERIFY EMAIL
  const user = auth().currentUser;
  console.log('email verified:', auth().currentUser?.emailVerified);

  const [verifyClicked, setVerifyClicked] = useState(false);
  const [loading, setloading] = useState(false);
  const verifyEmail = () => {
    setloading(true);
    auth().currentUser?.sendEmailVerification()
      .then((data) => {
        console.log('data: ', data);
        setloading(false);
        setVerifyClicked(true);
      })
      .catch((err: any) => { Alert.alert('Verify Failed', err); setloading(false); });
  };
  //END VERIFY EMAIL

  //START CHECK AUTH CHANGE
  const [user2, setUser2] = useState(auth().currentUser); // Lưu ý sử dụng useState để lưu trạng thái user

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(newUser => {
      setUser2(newUser);
      console.log('hehehehehehheheeh', newUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //END CHECK AUTH CHANGE

  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.header}>
          <Text style={styles.titleHeader}>{t('WELCOME_TO_IPU_APP')}</Text>
        </View>
        <View style={styles.VerifyBoxContainer}>
          <Image
            source={require('../../Asset/Picture/EmailVerify.png')}
            style={styles.imageStyle}
          />
          <Text style={styles.tittle}>{t('HELLO')} {user?.displayName ?? t('NEW_USER')},</Text>
          <Text style={styles.content}>{t('THANK_FOR_REGIST_VERIFY_EMAIL')}</Text>
          {loading === true && <ActivityIndicator size="large" color="#007bff" />}
          {verifyClicked === true
            && <Text style={styles.content}>
              {t('CHECK_MAIL')}<Text style={{ fontWeight: '600' }}>{user?.email}</Text>, {t('CLICK_LINK_TO_VERIFY')}
            </Text>
          }
          <TouchableOpacity style={styles.button} onPress={verifyEmail}>
            {verifyClicked === true
              ? <Text style={styles.textButton}>{t('RESEND_EMAIL')}</Text>
              : <Text style={styles.textButton}>{t('VERIFY_EMAIL')}</Text>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => console.log(user)}>

            <Text style={styles.textButton}>{t('CHECK')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Login');
              auth()
                .signOut().then((value) => {
                  console.log(value);
                }).catch(err => {
                  console.log(err);
                });
              // console.log('Tên của Firebase:', firebase.app());
            }}
            style={styles.button}>
            <Text>Sign out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView >
    </View >
  );
};

export default Verify;

