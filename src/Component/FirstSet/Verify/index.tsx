import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Alert, ActivityIndicator, ScrollView } from 'react-native';
import auth from '@react-native-firebase/auth';
import styleScaled from './style';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../../Utils/Themes';
import TextBox from '../../TextBox';
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

  //END CHECK AUTH CHANGE
  // const storage = new MMKV();
  return (
    <View style={styles.container}>
      <ScrollView >
        <View style={styles.header}>
          <TextBox style={styles.titleHeader}>{t('WELCOME_TO_IPU_APP')}</TextBox>
        </View>
        <View style={styles.VerifyBoxContainer}>
          <Image
            source={require('../../../../asset/picture/EmailVerify.png')}
            style={styles.imageStyle}
          />
          <TextBox style={styles.tittle}>{t('HELLO') + (user?.displayName ?? t('NEW_USER')) + ','}</TextBox>
          <TextBox style={styles.content}>{t('THANK_FOR_REGIST_VERIFY_EMAIL')}</TextBox>
          {loading === true && <ActivityIndicator size="large" color="#007bff" />}
          {verifyClicked === true
            && (<>
              <TextBox style={styles.content}>CHECK_MAIL</TextBox>
              <TextBox style={{ fontWeight: '600' }}>{user?.email + ', ' + t('CLICK_LINK_TO_VERIFY')}</TextBox>
            </>
            )
          }
          <TouchableOpacity style={styles.button} onPress={verifyEmail}>
            {verifyClicked === true
              ? <TextBox style={styles.textButton}>{t('RESEND_EMAIL')}</TextBox>
              : <TextBox style={styles.textButton}>{t('VERIFY_EMAIL')}</TextBox>}
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => console.log(auth().currentUser)}>
            <TextBox style={styles.textButton}>{t('CHECK')}</TextBox>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // navigation.navigate('Login');
              auth()
                .signOut().then((value) => {
                  console.log(value);
                  // storage.delete('user.name');
                  // storage.delete('user.photoURL');
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

