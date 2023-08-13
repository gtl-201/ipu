import React, { FC, memo, useRef } from 'react';
import { Button, PanResponder, Text, TouchableOpacity, View } from 'react-native';
import styleScaled from './style';
import auth from '@react-native-firebase/auth';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../../Utils/Themes/index';
import ThemeSwitchScreen from '../../Component/ChangeTheme/changeTheme';


const Home: FC<any> = (props) => {
  const { theme } = useTheme();
  const styles = styleScaled(theme);
  const navigation = props.navigation;

  const panResponder = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, guesture) => {
      // console.log('event: ', event);
      console.log('gusture: ', guesture);
    },
  })).current;

  const { t } = useTranslation();
  const user = auth().currentUser;
  const UpdateUser = () =>{
    user?.updateProfile({
      displayName: 'Tên Hiển Thị Mới',
      photoURL: 'https://example.com/profile.jpg',
    })
      .then(() => {
        console.log('Cập nhật thông tin hồ sơ người dùng thành công');
      })
      .catch(error => {
        console.error('Lỗi khi cập nhật thông tin hồ sơ người dùng:', error);
      });
  }

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }} {...panResponder.panHandlers}>
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

      <Button title={t("VERIFY_EMAIL")} onPress={() => auth().currentUser?.sendEmailVerification()
        .then((data) => console.log(data))
        .catch((err: any) => console.log(err))} />
      <Text>{t('HELLO')} {auth().currentUser?.displayName}</Text>

      <Button title={t("CHECK_USER")} onPress={() => console.log('currentUser:', auth().currentUser)} />

      <Button title={t("UPDATE_USER")} onPress={() => UpdateUser()} />

      <ThemeSwitchScreen />
    </View >
  );
};

export default memo(Home);
